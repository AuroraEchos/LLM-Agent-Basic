const STORAGE_KEY = 'llm-interview-study-v1';

const state = {
  data: null,
  questions: [],
  byId: new Map(),
  answers: new Map(),
  query: '',
  filter: 'all',
  section: '',
  answerVisible: false,
  study: loadStudy(),
};

const main = document.querySelector('#main-content');
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');
const notice = document.querySelector('#notice');

function loadStudy() {
  try {
    return { mastery: {}, starred: [], views: {}, lastViewed: '', ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
  } catch {
    return { mastery: {}, starred: [], views: {}, lastViewed: '' };
  }
}

function saveStudy() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.study));
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function currentRoute() {
  const hash = location.hash.replace(/^#\/?/, '');
  if (hash.startsWith('question/')) return { name: 'question', id: hash.split('/')[1] };
  if (hash === 'library') return { name: 'library' };
  if (hash === 'progress') return { name: 'progress' };
  return { name: 'home' };
}

function navigate(path) {
  location.hash = path === 'home' ? '#/' : `#/${path}`;
}

function masteredCount(questions = state.questions) {
  return questions.filter((question) => state.study.mastery[question.id] === 'mastered').length;
}

function statusText(question) {
  const value = state.study.mastery[question.id];
  if (value === 'mastered') return '（已掌握）';
  if (value === 'learning') return '（待巩固）';
  return '';
}

function filteredQuestions() {
  const query = state.query.trim().toLowerCase();
  return state.questions.filter((question) => {
    if (state.section && question.section !== state.section) return false;
    const mastery = state.study.mastery[question.id];
    if (state.filter === 'mastered' && mastery !== 'mastered') return false;
    if (state.filter === 'learning' && mastery !== 'learning') return false;
    if (state.filter === 'unmastered' && mastery === 'mastered') return false;
    if (state.filter === 'starred' && !state.study.starred.includes(question.id)) return false;
    if (!query) return true;
    return `${question.id} ${question.title} ${question.section}`.toLowerCase().includes(query);
  });
}

function questionList(questions) {
  if (!questions.length) return '<p><em>没有找到符合条件的题目。</em> <a href="#/library" data-action="clear-filters">清除筛选</a></p>';
  return `<ol class="questions">${questions.map((question) => `
    <li>
      <a href="#/question/${question.id}" data-question="${question.id}">${escapeHtml(question.title)}</a>
      <small>[${question.id}] ${escapeHtml(statusText(question))}</small>
    </li>
  `).join('')}</ol>`;
}

function renderHome() {
  const mastered = masteredCount();
  const viewed = Object.keys(state.study.views).filter((id) => state.byId.has(id)).length;
  const resume = state.byId.get(state.study.lastViewed) || state.questions.find((question) => state.study.mastery[question.id] !== 'mastered') || state.questions[0];

  main.innerHTML = `
    <h2>About these notes</h2>
    <p>这不是完整的“大模型百科全书”，而是一份有意缩减的面试复习提纲。题目集中在 Agent、RAG、评估、推理部署以及回答项目经历时最常被追问的工程判断。</p>
    <p><strong>使用方法：</strong>点击题目后先口述 30–90 秒，再显示答案核对。不要逐字背诵，优先记住定义、机制、权衡和落地经验。</p>

    <h2>Start here</h2>
    <ul>
      <li><a href="#/question/${resume.id}" data-question="${resume.id}">继续上次：${escapeHtml(resume.title)}</a></li>
      <li><a href="#/random" data-action="random-question">随机抽取一道题</a></li>
      <li><a href="#/library" data-filter="unmastered">只看尚未掌握的题目</a></li>
    </ul>
    <p>当前进度：已浏览 ${viewed} / ${state.data.total}，已掌握 ${mastered} / ${state.data.total}。<a href="#/progress">查看分章节进度</a></p>

    <h2>Contents</h2>
    <ol class="contents">${state.data.sections.map((section, index) => {
      const questions = state.questions.filter((question) => question.section === section.name);
      return `<li><a href="#/library" data-section="${escapeHtml(section.name)}">${index + 1}. ${escapeHtml(section.name)}</a> — ${section.count} 题，已掌握 ${masteredCount(questions)} 题</li>`;
    }).join('')}</ol>

    <h2>Keyboard shortcuts</h2>
    <p><kbd>/</kbd> 搜索；<kbd>Space</kbd> 显示答案；<kbd>←</kbd>/<kbd>→</kbd> 上一题/下一题；<kbd>M</kbd> 标记掌握；<kbd>S</kbd> 收藏；<kbd>R</kbd> 随机题。</p>
  `;
}

function renderLibrary() {
  const questions = filteredQuestions();
  const heading = state.query ? `搜索：“${escapeHtml(state.query)}”` : state.section || '全部题目';
  main.innerHTML = `
    <p><a href="#/">首页</a> &gt; 题库</p>
    <h2>${heading}</h2>
    <p>共 ${questions.length} 题。筛选：
      <a href="#/library" data-filter="all">全部</a> |
      <a href="#/library" data-filter="unmastered">未掌握</a> |
      <a href="#/library" data-filter="learning">待巩固</a> |
      <a href="#/library" data-filter="mastered">已掌握</a> |
      <a href="#/library" data-filter="starred">已收藏</a>
      ${(state.query || state.section || state.filter !== 'all') ? '| <a href="#/library" data-action="clear-filters">清除条件</a>' : ''}
    </p>
    <p><a href="#/random" data-action="random-filtered">从当前结果中随机抽题</a></p>
    ${questionList(questions)}
  `;
}

function renderQuestion(id) {
  const question = state.byId.get(id);
  if (!question) return navigate('library');
  const index = state.questions.findIndex((item) => item.id === id);
  const previous = state.questions[index - 1];
  const next = state.questions[index + 1];
  const mastery = state.study.mastery[id];
  const starred = state.study.starred.includes(id);

  state.study.lastViewed = id;
  state.study.views[id] = (state.study.views[id] || 0) + 1;
  saveStudy();

  main.innerHTML = `
    <p><a href="#/">首页</a> &gt; <a href="#/library" data-section="${escapeHtml(question.section)}">${escapeHtml(question.section)}</a> &gt; ${question.id}</p>
    <article class="question-page">
      <h2>${escapeHtml(question.title)}</h2>
      <p><small>编号：${question.id}；状态：${mastery === 'mastered' ? '已掌握' : mastery === 'learning' ? '待巩固' : '未标记'}；${starred ? '已收藏' : '未收藏'}</small></p>
      <blockquote>先不要看答案。尝试按“定义 → 机制 → 权衡 → 实践”完整说一遍。</blockquote>

      <p class="question-actions">
        <button type="button" data-action="reveal-answer">显示参考答案</button>
        <button type="button" data-action="toggle-star" data-id="${id}">${starred ? '取消收藏' : '收藏此题'}</button>
        <button type="button" data-action="copy-link">复制链接</button>
      </p>

      <section id="answer" ${state.answerVisible ? '' : 'hidden'}>
        <hr />
        <h3>参考答案</h3>
        <div class="markdown-body" id="answer-body">${state.answers.get(id) || '<p><em>正在载入答案……</em></p>'}</div>
        <hr />
        <p><strong>自评：</strong>
          <button type="button" data-mastery="learning" data-id="${id}">${mastery === 'learning' ? '✓ ' : ''}还需巩固</button>
          <button type="button" data-mastery="mastered" data-id="${id}">${mastery === 'mastered' ? '✓ ' : ''}已经掌握</button>
          <button type="button" data-action="hide-answer">收起答案</button>
        </p>
      </section>

      <p class="pager">
        ${previous ? `<a href="#/question/${previous.id}" data-question="${previous.id}">← ${previous.id} 上一题</a>` : '← 已是第一题'}
        · <a href="#/random" data-action="random-question">随机</a> ·
        ${next ? `<a href="#/question/${next.id}" data-question="${next.id}">下一题 ${next.id} →</a>` : '已是最后一题 →'}
      </p>
    </article>
  `;
  main.focus({ preventScroll: true });
  if (state.answerVisible) loadAnswer(question);
}

function renderProgress() {
  const mastered = masteredCount();
  const learning = state.questions.filter((question) => state.study.mastery[question.id] === 'learning').length;
  main.innerHTML = `
    <p><a href="#/">首页</a> &gt; 学习进度</p>
    <h2>学习进度</h2>
    <p>已掌握 ${mastered} 题，待巩固 ${learning} 题，其余 ${state.data.total - mastered - learning} 题未标记。</p>
    <p><progress value="${mastered}" max="${state.data.total}">${mastered} / ${state.data.total}</progress> ${Math.round(mastered / state.data.total * 100)}%</p>
    <table>
      <thead><tr><th>章节</th><th>已掌握</th><th>进度</th></tr></thead>
      <tbody>${state.data.sections.map((section) => {
        const questions = state.questions.filter((question) => question.section === section.name);
        const count = masteredCount(questions);
        return `<tr><td><a href="#/library" data-section="${escapeHtml(section.name)}">${escapeHtml(section.name)}</a></td><td>${count} / ${questions.length}</td><td><progress value="${count}" max="${questions.length}"></progress></td></tr>`;
      }).join('')}</tbody>
    </table>
    <p><small>记录只保存在浏览器的 localStorage 中。清除浏览器数据后会归零。</small></p>
  `;
}

function render() {
  if (!state.data) return;
  const route = currentRoute();
  if (route.name !== 'question') state.answerVisible = false;
  if (route.name === 'question') renderQuestion(route.id);
  else if (route.name === 'library') renderLibrary();
  else if (route.name === 'progress') renderProgress();
  else renderHome();
  main.setAttribute('aria-busy', 'false');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function randomQuestion(pool = state.questions) {
  if (!pool.length) return showNotice('当前条件下没有题目。');
  const currentId = currentRoute().id;
  const choices = pool.length > 1 ? pool.filter((item) => item.id !== currentId) : pool;
  const question = choices[Math.floor(Math.random() * choices.length)];
  state.answerVisible = false;
  navigate(`question/${question.id}`);
}

function setMastery(id, value) {
  if (state.study.mastery[id] === value) delete state.study.mastery[id];
  else state.study.mastery[id] = value;
  saveStudy();
  showNotice(value === 'mastered' ? '已更新：掌握状态。' : '已更新：待巩固状态。');
  renderQuestion(id);
}

function toggleStar(id) {
  const index = state.study.starred.indexOf(id);
  if (index >= 0) state.study.starred.splice(index, 1);
  else state.study.starred.push(id);
  saveStudy();
  showNotice(index >= 0 ? '已取消收藏。' : '已收藏此题。');
  renderQuestion(id);
}

function showNotice(message) {
  notice.textContent = message;
  notice.hidden = false;
  clearTimeout(showNotice.timer);
  showNotice.timer = setTimeout(() => { notice.hidden = true; }, 1800);
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

function revealAnswer() {
  state.answerVisible = true;
  const answer = document.querySelector('#answer');
  if (answer) answer.hidden = false;
  const question = state.byId.get(currentRoute().id);
  if (question) loadAnswer(question);
}

document.addEventListener('click', async (event) => {
  const target = event.target.closest('a, button');
  if (!target) return;
  if (target.matches('a[data-action="random-question"], a[data-action="random-filtered"]')) event.preventDefault();
  if (target.dataset.question) {
    state.answerVisible = false;
  } else if (target.dataset.section) {
    state.section = target.dataset.section;
    state.filter = 'all';
    state.query = '';
    searchInput.value = '';
    if (currentRoute().name === 'library') renderLibrary();
  } else if (target.dataset.filter) {
    state.filter = target.dataset.filter;
    if (currentRoute().name === 'library') renderLibrary();
  }

  if (target.dataset.mastery) setMastery(target.dataset.id, target.dataset.mastery);
  else if (target.dataset.action === 'random-question') randomQuestion();
  else if (target.dataset.action === 'random-filtered') randomQuestion(filteredQuestions());
  else if (target.dataset.action === 'reveal-answer') revealAnswer();
  else if (target.dataset.action === 'hide-answer') {
    state.answerVisible = false;
    document.querySelector('#answer')?.setAttribute('hidden', '');
  } else if (target.dataset.action === 'toggle-star') toggleStar(target.dataset.id);
  else if (target.dataset.action === 'copy-link') {
    await navigator.clipboard?.writeText(location.href);
    showNotice('题目链接已复制。');
  } else if (target.dataset.action === 'clear-filters') {
    state.section = '';
    state.filter = 'all';
    state.query = '';
    searchInput.value = '';
    if (currentRoute().name === 'library') renderLibrary();
  }
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  state.query = searchInput.value;
  state.section = '';
  state.filter = 'all';
  navigate('library');
  if (currentRoute().name === 'library') renderLibrary();
});

searchInput.addEventListener('input', () => {
  if (!searchInput.value && state.query) {
    state.query = '';
    if (currentRoute().name === 'library') renderLibrary();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
  const route = currentRoute();
  if (event.code === 'Space' && route.name === 'question') {
    event.preventDefault();
    revealAnswer();
  } else if (event.key === 'ArrowLeft' && route.name === 'question') {
    const index = state.questions.findIndex((item) => item.id === route.id);
    if (state.questions[index - 1]) navigate(`question/${state.questions[index - 1].id}`);
  } else if (event.key === 'ArrowRight' && route.name === 'question') {
    const index = state.questions.findIndex((item) => item.id === route.id);
    if (state.questions[index + 1]) navigate(`question/${state.questions[index + 1].id}`);
  } else if (event.key.toLowerCase() === 'm' && route.name === 'question') setMastery(route.id, 'mastered');
  else if (event.key.toLowerCase() === 's' && route.name === 'question') toggleStar(route.id);
  else if (event.key.toLowerCase() === 'r') randomQuestion();
});

window.addEventListener('hashchange', () => {
  state.answerVisible = false;
  render();
});

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
