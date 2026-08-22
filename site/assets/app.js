const STORAGE_KEY = 'llm-interview-study-v1';
const THEME_KEY = 'llm-interview-theme';

const state = {
  data: null,
  questions: [],
  byId: new Map(),
  answers: new Map(),
  selectedSection: '',
  filter: 'all',
  query: '',
  answerVisible: false,
  study: loadStudy(),
};

const main = document.querySelector('#main-content');
const searchInput = document.querySelector('#search-input');
const toast = document.querySelector('#toast');

function loadStudy() {
  try {
    return { mastery: {}, starred: [], views: {}, lastViewed: '', ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
  } catch {
    return { mastery: {}, starred: [], views: {}, lastViewed: '' };
  }
}

function saveStudy() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.study));
  updateGlobalProgress();
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function highlight(value) {
  const safe = escapeHtml(value);
  const query = state.query.trim();
  if (!query) return safe;
  const pattern = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(`(${pattern})`, 'ig'), '<mark>$1</mark>');
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

function masteredCount() {
  return state.questions.filter((question) => state.study.mastery[question.id] === 'mastered').length;
}

function updateGlobalProgress() {
  if (!state.data) return;
  const mastered = masteredCount();
  const starred = state.study.starred.filter((id) => state.byId.has(id)).length;
  document.querySelector('#progress-label').textContent = `${mastered} / ${state.data.total} 已掌握`;
  document.querySelector('#nav-starred').textContent = starred;
  document.querySelector('#nav-unmastered').textContent = state.data.total - mastered;
  document.querySelector('#progress-chip').style.setProperty('--progress', `${(mastered / state.data.total) * 100}%`);
}

function buildSectionNav() {
  const container = document.querySelector('#section-nav');
  container.innerHTML = state.data.sections.map((section, index) => `
    <button class="section-link" type="button" data-section="${escapeHtml(section.name)}">
      <span class="section-number">${String(index + 1).padStart(2, '0')}</span>
      <span>${escapeHtml(section.name)}</span>
      <small>${section.count}</small>
    </button>
  `).join('');
}

function filteredQuestions() {
  const query = state.query.trim().toLowerCase();
  return state.questions.filter((question) => {
    if (state.selectedSection && question.section !== state.selectedSection) return false;
    const mastery = state.study.mastery[question.id];
    if (state.filter === 'mastered' && mastery !== 'mastered') return false;
    if (state.filter === 'unmastered' && mastery === 'mastered') return false;
    if (state.filter === 'starred' && !state.study.starred.includes(question.id)) return false;
    if (!query) return true;
    return `${question.id} ${question.title} ${question.section} ${question.bank}`.toLowerCase().includes(query);
  });
}

function questionStatus(question) {
  const mastery = state.study.mastery[question.id];
  if (mastery === 'mastered') return '<span class="status status-mastered">已掌握</span>';
  if (mastery === 'learning') return '<span class="status status-learning">需巩固</span>';
  return '<span class="status">未开始</span>';
}

function renderQuestionRows(questions, limit = questions.length) {
  if (!questions.length) {
    return `<div class="empty-state"><span>⌕</span><h3>没有找到匹配的题目</h3><p>换一个关键词或清除筛选条件试试。</p><button class="button secondary" data-action="clear-filters">清除筛选</button></div>`;
  }
  return `<div class="question-list">${questions.slice(0, limit).map((question) => `
    <button class="question-row" type="button" data-question="${question.id}">
      <span class="question-index">${question.id}</span>
      <span class="question-copy"><strong>${highlight(question.title)}</strong><small>${escapeHtml(question.section)}</small></span>
      ${questionStatus(question)}
      <span class="row-arrow">↗</span>
    </button>
  `).join('')}</div>`;
}

function greeting() {
  const hour = new Date().getHours();
  if (hour < 6) return '夜深了，少量复习也算进步';
  if (hour < 12) return '早上好，先唤醒一个知识点';
  if (hour < 18) return '下午好，来一轮主动回忆';
  return '晚上好，把今天学过的再说一遍';
}

function getResumeQuestion() {
  if (state.study.lastViewed && state.byId.has(state.study.lastViewed)) return state.byId.get(state.study.lastViewed);
  return state.questions.find((question) => state.study.mastery[question.id] !== 'mastered') || state.questions[0];
}

function renderHome() {
  const mastered = masteredCount();
  const reviewed = Object.keys(state.study.views).length;
  const percent = Math.round((mastered / state.data.total) * 100);
  const resume = getResumeQuestion();
  const recommended = state.questions.filter((question) => state.study.mastery[question.id] !== 'mastered').slice(0, 5);
  const topSections = state.data.sections.slice(0, 8);

  main.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${greeting()}</p>
        <h1>把“看过”，<br>变成<span>“能说出口”。</span></h1>
        <p class="hero-description">一套围绕 LLM、Agent 与工程基础构建的面试复习系统。先回忆，再核对；少一点收藏，多一次真正作答。</p>
        <div class="hero-actions">
          <button class="button primary" type="button" data-question="${resume.id}">继续背题 <span>→</span></button>
          <button class="button secondary" type="button" data-action="random-question">随机抽一题 <span>↝</span></button>
        </div>
        <div class="shortcut-line"><span><kbd>Space</kbd> 显示答案</span><span><kbd>←</kbd><kbd>→</kbd> 切换题目</span><span><kbd>M</kbd> 标记掌握</span></div>
      </div>
      <div class="hero-card-wrap" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="hero-study-card">
          <div class="card-top"><span>${resume.id}</span><span>${escapeHtml(resume.section)}</span></div>
          <p>${escapeHtml(resume.title)}</p>
          <div class="memory-bars"><i></i><i></i><i></i><i></i></div>
          <small>先在脑中组织答案，然后翻面。</small>
        </div>
      </div>
    </section>

    <section class="dashboard-strip">
      <article><span class="metric-icon warm">✓</span><div><strong>${mastered}</strong><small>已掌握</small></div></article>
      <article><span class="metric-icon cool">◔</span><div><strong>${state.data.total - mastered}</strong><small>待复习</small></div></article>
      <article><span class="metric-icon green">◎</span><div><strong>${reviewed}</strong><small>已浏览</small></div></article>
      <article class="progress-metric"><div class="ring" style="--value:${percent * 3.6}deg"><span>${percent}%</span></div><div><strong>总体进度</strong><small>每一次开口都算数</small></div></article>
    </section>

    <section class="content-section">
      <div class="section-title"><div><p class="eyebrow">TODAY'S REVIEW</p><h2>从这几题开始</h2></div><button class="text-button" data-route="library">查看全部 ${state.data.total} 题 →</button></div>
      ${renderQuestionRows(recommended, 5)}
    </section>

    <section class="content-section section-explore">
      <div class="section-title"><div><p class="eyebrow">KNOWLEDGE MAP</p><h2>按知识领域探索</h2></div></div>
      <div class="category-grid">${topSections.map((section, index) => `
        <button class="category-card tone-${(index % 4) + 1}" type="button" data-section="${escapeHtml(section.name)}">
          <span class="category-seq">${String(index + 1).padStart(2, '0')}</span>
          <h3>${escapeHtml(section.name)}</h3>
          <p>${section.prefixes.join(' · ')}</p>
          <span class="category-count">${section.count} 题 <b>→</b></span>
        </button>
      `).join('')}</div>
    </section>
  `;
  setActiveNav('home');
}

function renderLibrary() {
  const questions = filteredQuestions();
  const title = state.query ? `“${escapeHtml(state.query)}” 的搜索结果` : state.selectedSection || ({ all: '全部题目', mastered: '已掌握', unmastered: '待掌握', starred: '我的收藏' }[state.filter]);
  main.innerHTML = `
    <section class="library-header">
      <div><p class="eyebrow">QUESTION LIBRARY</p><h1>${title}</h1><p>共找到 ${questions.length} 道题，点击题目开始主动回忆。</p></div>
      <button class="button primary compact" type="button" data-action="random-filtered" ${questions.length ? '' : 'disabled'}>从结果中随机抽题 ↝</button>
    </section>
    <div class="filter-bar">
      ${[['all','全部'],['unmastered','待掌握'],['mastered','已掌握'],['starred','已收藏']].map(([key, label]) => `<button type="button" class="filter-pill ${state.filter === key ? 'active' : ''}" data-filter="${key}">${label}</button>`).join('')}
      ${(state.selectedSection || state.query) ? '<button class="filter-pill clear" type="button" data-action="clear-filters">清除条件 ×</button>' : ''}
    </div>
    ${renderQuestionRows(questions)}
  `;
  setActiveNav('library');
}

function renderQuestion(id) {
  const question = state.byId.get(id);
  if (!question) return navigate('library');
  const index = state.questions.findIndex((item) => item.id === id);
  const previous = state.questions[index - 1];
  const next = state.questions[index + 1];
  const isStarred = state.study.starred.includes(id);
  const mastery = state.study.mastery[id];
  state.study.lastViewed = id;
  state.study.views[id] = (state.study.views[id] || 0) + 1;
  saveStudy();

  main.innerHTML = `
    <article class="study-page">
      <div class="study-breadcrumb"><button type="button" data-route="library">题库</button><span>/</span><button type="button" data-section="${escapeHtml(question.section)}">${escapeHtml(question.section)}</button><span>/</span><strong>${question.id}</strong></div>
      <header class="question-header">
        <div class="question-meta"><span>${question.id}</span><span>${escapeHtml(question.section)}</span>${questionStatus(question)}</div>
        <div class="question-tools">
          <button class="icon-button ${isStarred ? 'active' : ''}" type="button" data-action="toggle-star" data-id="${id}" aria-label="${isStarred ? '取消收藏' : '收藏'}">${isStarred ? '★' : '☆'}</button>
          <button class="icon-button" type="button" data-action="copy-link" aria-label="复制题目链接">↗</button>
        </div>
        <h1>${escapeHtml(question.title)}</h1>
        <p class="recall-prompt">先别急着看答案。给自己 30 秒，在脑中按“定义—机制—权衡—实践”组织一次回答。</p>
      </header>

      <section class="answer-shell ${state.answerVisible ? 'revealed' : ''}" id="answer-shell">
        <div class="answer-cover">
          <div class="answer-cover-mark">?</div>
          <h2>准备好核对了吗？</h2>
          <p>重点不是逐字背诵，而是检查自己的答案是否覆盖了关键机制与工程边界。</p>
          <button class="button primary" type="button" data-action="reveal-answer">显示参考答案 <span>Space</span></button>
        </div>
        <div class="answer-content">
          <div class="answer-label"><span>REFERENCE ANSWER</span><button type="button" data-action="hide-answer">收起答案 ↑</button></div>
          <div class="markdown-body" id="answer-body">${state.answers.get(id) || '<div class="answer-loading"><span class="loader"></span><p>正在载入参考答案…</p></div>'}</div>
          <div class="self-rating">
            <div><p class="eyebrow">SELF CHECK</p><h3>这道题，你现在能独立说清楚吗？</h3></div>
            <div class="rating-actions">
              <button class="rating-button learning ${mastery === 'learning' ? 'selected' : ''}" type="button" data-mastery="learning" data-id="${id}"><span>↻</span><strong>还有点模糊</strong><small>放回待复习</small></button>
              <button class="rating-button mastered ${mastery === 'mastered' ? 'selected' : ''}" type="button" data-mastery="mastered" data-id="${id}"><span>✓</span><strong>已经掌握</strong><small>下次降低频率</small></button>
            </div>
          </div>
        </div>
      </section>

      <footer class="study-footer">
        <button type="button" ${previous ? `data-question="${previous.id}"` : 'disabled'}><span>← 上一题</span><strong>${previous ? previous.id : '已经是第一题'}</strong></button>
        <button class="random-round" type="button" data-action="random-question" aria-label="随机抽题">↝</button>
        <button type="button" class="next" ${next ? `data-question="${next.id}"` : 'disabled'}><span>下一题 →</span><strong>${next ? next.id : '已经是最后一题'}</strong></button>
      </footer>
    </article>
  `;
  setActiveNav('');
  main.focus({ preventScroll: true });
  if (state.answerVisible) loadAnswer(question);
}

function renderProgress() {
  const mastered = masteredCount();
  const learning = state.questions.filter((question) => state.study.mastery[question.id] === 'learning').length;
  const untouched = state.data.total - mastered - learning;
  const sectionRows = state.data.sections.map((section) => {
    const items = state.questions.filter((question) => question.section === section.name);
    const count = items.filter((question) => state.study.mastery[question.id] === 'mastered').length;
    const percent = Math.round((count / items.length) * 100);
    return `<button class="progress-row" type="button" data-section="${escapeHtml(section.name)}"><span><strong>${escapeHtml(section.name)}</strong><small>${count} / ${items.length}</small></span><i><b style="width:${percent}%"></b></i><em>${percent}%</em></button>`;
  }).join('');
  main.innerHTML = `
    <section class="library-header progress-header"><div><p class="eyebrow">YOUR PROGRESS</p><h1>复习进度</h1><p>进度只保存在当前浏览器，不需要登录，也不会上传。</p></div></section>
    <section class="progress-overview">
      <div class="big-ring" style="--value:${Math.round(mastered / state.data.total * 360)}deg"><span><strong>${Math.round(mastered / state.data.total * 100)}%</strong><small>总体掌握</small></span></div>
      <div class="progress-summary"><article><strong>${mastered}</strong><span>已掌握</span></article><article><strong>${learning}</strong><span>需巩固</span></article><article><strong>${untouched}</strong><span>未开始</span></article></div>
    </section>
    <section class="content-section"><div class="section-title"><div><p class="eyebrow">BY CATEGORY</p><h2>知识领域掌握度</h2></div></div><div class="progress-list">${sectionRows}</div></section>
  `;
  setActiveNav('progress');
}

function setActiveNav(name) {
  document.querySelectorAll('[data-route]').forEach((button) => button.classList.toggle('active', button.dataset.route === name));
  document.querySelectorAll('.section-link').forEach((button) => button.classList.toggle('active', button.dataset.section === state.selectedSection));
}

function render() {
  if (!state.data) return;
  const route = currentRoute();
  state.answerVisible = route.name === 'question' ? state.answerVisible : false;
  if (route.name === 'question') renderQuestion(route.id);
  else if (route.name === 'library') renderLibrary();
  else if (route.name === 'progress') renderProgress();
  else renderHome();
  document.querySelector('#app').setAttribute('aria-busy', 'false');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function randomQuestion(pool = state.questions) {
  if (!pool.length) return;
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
  showToast(value === 'mastered' ? '已标记为掌握 ✓' : '已加入待巩固列表');
  renderQuestion(id);
}

function toggleStar(id) {
  const index = state.study.starred.indexOf(id);
  if (index >= 0) state.study.starred.splice(index, 1);
  else state.study.starred.push(id);
  saveStudy();
  showToast(index >= 0 ? '已取消收藏' : '已加入收藏 ☆');
  renderQuestion(id);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function queueMath() {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetClear?.([document.querySelector('.markdown-body')]);
    window.MathJax.typesetPromise([document.querySelector('.markdown-body')]).catch(() => {});
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
      answerHtml = '<div class="error-inline">答案加载失败，请刷新页面后重试。</div>';
    }
  }
  const answerBody = document.querySelector('#answer-body');
  if (answerBody && currentRoute().id === question.id) {
    answerBody.innerHTML = answerHtml;
    queueMath();
  }
}

function revealAnswer() {
  state.answerVisible = true;
  const shell = document.querySelector('#answer-shell');
  shell?.classList.add('revealed');
  const question = state.byId.get(currentRoute().id);
  if (question) loadAnswer(question);
  setTimeout(() => shell?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
}

document.addEventListener('click', async (event) => {
  const target = event.target.closest('button, a');
  if (!target) return;
  if (target.dataset.route) {
    state.answerVisible = false;
    navigate(target.dataset.route);
  } else if (target.dataset.question) {
    state.answerVisible = false;
    navigate(`question/${target.dataset.question}`);
  } else if (target.dataset.section) {
    state.selectedSection = target.dataset.section;
    state.filter = 'all';
    state.query = '';
    searchInput.value = '';
    navigate('library');
    if (currentRoute().name === 'library') render();
  } else if (target.dataset.filter) {
    state.filter = target.dataset.filter;
    navigate('library');
    if (currentRoute().name === 'library') render();
  } else if (target.dataset.mastery) {
    setMastery(target.dataset.id, target.dataset.mastery);
  } else if (target.dataset.action === 'reveal-answer') {
    revealAnswer();
  } else if (target.dataset.action === 'hide-answer') {
    state.answerVisible = false;
    document.querySelector('#answer-shell')?.classList.remove('revealed');
  } else if (target.dataset.action === 'random-question') {
    randomQuestion();
  } else if (target.dataset.action === 'random-filtered') {
    randomQuestion(filteredQuestions());
  } else if (target.dataset.action === 'toggle-star') {
    toggleStar(target.dataset.id);
  } else if (target.dataset.action === 'copy-link') {
    await navigator.clipboard?.writeText(location.href);
    showToast('题目链接已复制');
  } else if (target.dataset.action === 'show-progress') {
    navigate('progress');
  } else if (target.dataset.action === 'toggle-theme') {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
  } else if (target.dataset.action === 'clear-filters' || target.id === 'clear-section') {
    state.selectedSection = '';
    state.filter = 'all';
    state.query = '';
    searchInput.value = '';
    navigate('library');
    if (currentRoute().name === 'library') render();
  }
});

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  if (state.query) navigate('library');
  if (currentRoute().name === 'library') renderLibrary();
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
    if (!state.answerVisible) revealAnswer();
  } else if (event.key === 'ArrowLeft' && route.name === 'question') {
    const index = state.questions.findIndex((item) => item.id === route.id);
    if (state.questions[index - 1]) navigate(`question/${state.questions[index - 1].id}`);
  } else if (event.key === 'ArrowRight' && route.name === 'question') {
    const index = state.questions.findIndex((item) => item.id === route.id);
    if (state.questions[index + 1]) navigate(`question/${state.questions[index + 1].id}`);
  } else if (event.key.toLowerCase() === 'm' && route.name === 'question') {
    setMastery(route.id, 'mastered');
  } else if (event.key.toLowerCase() === 's' && route.name === 'question') {
    toggleStar(route.id);
  } else if (event.key.toLowerCase() === 'r') {
    randomQuestion();
  }
});

window.addEventListener('hashchange', () => {
  state.answerVisible = false;
  render();
});

async function init() {
  const preferredTheme = localStorage.getItem(THEME_KEY) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = preferredTheme;
  try {
    const response = await fetch('./data/questions.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.data = await response.json();
    state.questions = state.data.questions;
    state.byId = new Map(state.questions.map((question) => [question.id, question]));
    document.querySelector('#nav-total').textContent = state.data.total;
    buildSectionNav();
    updateGlobalProgress();
    render();
  } catch (error) {
    main.innerHTML = `<div class="error-state"><span>!</span><h1>知识卡片加载失败</h1><p>${escapeHtml(error.message)}</p><button class="button primary" onclick="location.reload()">重新加载</button></div>`;
  }
}

init();
