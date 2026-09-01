const state = {
  data: null,
  questions: [],
  byId: new Map(),
  answers: new Map(),
  query: '',
};

const main = document.querySelector('#main-content');
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function currentRoute() {
  const hash = location.hash.replace(/^#\/?/, '');
  if (hash.startsWith('question/')) return { name: 'question', id: hash.split('/')[1] };
  return { name: 'home' };
}

function questionTree(questions) {
  if (!questions.length) {
    return '<p>没有找到匹配的题目。<a href="#/" data-action="clear-search">清除搜索</a></p>';
  }

  return `<ul class="file-tree">${state.data.sections.map((section) => {
    const items = questions.filter((question) => question.section === section.name);
    if (!items.length) return '';
    return `<li class="tree-directory"><strong>${escapeHtml(section.name)}/</strong>
      <ul>${items.map((question) => `<li><a href="#/question/${question.id}">${question.id} — ${escapeHtml(question.title)}</a></li>`).join('')}</ul>
    </li>`;
  }).join('')}</ul>`;
}

function renderHome() {
  const query = state.query.trim().toLowerCase();
  const questions = query
    ? state.questions.filter((question) => `${question.id} ${question.title} ${question.section}`.toLowerCase().includes(query))
    : state.questions;

  main.innerHTML = `${query ? `<p>搜索“${escapeHtml(state.query)}”：${questions.length} 题。<a href="#/" data-action="clear-search">清除</a></p>` : ''}${questionTree(questions)}`;
}

function renderQuestion(id) {
  const question = state.byId.get(id);
  if (!question) {
    location.hash = '#/';
    return;
  }

  const index = state.questions.findIndex((item) => item.id === id);
  const previous = state.questions[index - 1];
  const next = state.questions[index + 1];

  main.innerHTML = `
    <p><a href="#/">首页</a> &gt; ${escapeHtml(question.section)} &gt; ${question.id}</p>
    <article class="question-page">
      <h2>${escapeHtml(question.title)}</h2>
      <div class="markdown-body" id="answer-body">${state.answers.get(id) || '<p><em>正在载入答案……</em></p>'}</div>
      <p class="pager">
        ${previous ? `<a href="#/question/${previous.id}">← ${previous.id}</a>` : '← 第一题'}
        · <a href="#/">返回目录</a> ·
        ${next ? `<a href="#/question/${next.id}">${next.id} →</a>` : '最后一题 →'}
      </p>
    </article>
  `;

  main.focus({ preventScroll: true });
  loadAnswer(question);
}

function render() {
  if (!state.data) return;
  const route = currentRoute();
  if (route.name === 'question') renderQuestion(route.id);
  else renderHome();
  main.setAttribute('aria-busy', 'false');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function queueMath() {
  const body = document.querySelector('.markdown-body');
  if (body && window.MathJax?.typesetPromise) {
    window.MathJax.typesetClear?.([body]);
    window.MathJax.typesetPromise([body]).catch(() => {});
  }
}

async function loadAnswer(question) {
  let answerHtml = state.answers.get(question.id);
  if (!answerHtml) {
    try {
      const response = await fetch(`./data/answers/${question.id}.json`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      answerHtml = (await response.json()).answerHtml;
      state.answers.set(question.id, answerHtml);
    } catch {
      answerHtml = '<p><strong>答案加载失败。</strong>请刷新页面后重试。</p>';
    }
  }

  const body = document.querySelector('#answer-body');
  if (body && currentRoute().id === question.id) {
    body.innerHTML = answerHtml;
    queueMath();
  }
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  state.query = searchInput.value;
  if (currentRoute().name !== 'home') location.hash = '#/';
  else renderHome();
});

searchInput.addEventListener('input', () => {
  if (!searchInput.value && state.query) {
    state.query = '';
    if (currentRoute().name === 'home') renderHome();
  }
});

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action="clear-search"]');
  if (!target) return;
  event.preventDefault();
  state.query = '';
  searchInput.value = '';
  if (currentRoute().name !== 'home') location.hash = '#/';
  else renderHome();
});

window.addEventListener('hashchange', render);

async function init() {
  try {
    const response = await fetch('./data/questions.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.data = await response.json();
    state.questions = state.data.questions;
    state.byId = new Map(state.questions.map((question) => [question.id, question]));
    document.querySelector('#updated-at').textContent = `题库生成时间：${new Date(state.data.generatedAt).toLocaleString('zh-CN')}`;
    render();
  } catch (error) {
    main.innerHTML = `<h2>题库加载失败</h2><p>${escapeHtml(error.message)}</p><p><button type="button" onclick="location.reload()">重新加载</button></p>`;
  }
}

init();
