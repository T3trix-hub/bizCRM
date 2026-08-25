/* ============================================
   BizCRM — Основное приложение
   ============================================ */

'use strict';

// ============ ЛОКАЛИЗАЦИЯ ============
const i18n = {
  ru: {
    'auth.title': 'Добро пожаловать',
    'auth.sub': 'Войдите в свой аккаунт',
    'auth.login': 'Логин',
    'auth.password': 'Пароль',
    'auth.btn': 'Войти',
    'auth.error': 'Неверный логин или пароль',
    'auth.hint': 'Демо: admin / admin123',
    'nav.dashboard': 'Дашборд',
    'nav.clients': 'Клиенты',
    'nav.deals': 'Сделки',
    'nav.tasks': 'Задачи',
    'nav.calendar': 'Календарь',
    'nav.analytics': 'Аналитика',
    'user.role': 'Руководитель',
    'dash.clients': 'Клиентов',
    'dash.deals': 'Активных сделок',
    'dash.revenue': 'Выручка (мес.)',
    'dash.tasks': 'Задач сегодня',
    'dash.revenue_chart': 'Доходы по месяцам',
    'dash.funnel': 'Воронка продаж',
    'dash.activity': 'Последние активности',
    'clients.search': 'Поиск клиентов...',
    'clients.all': 'Все статусы',
    'status.active': 'Активный',
    'status.potential': 'Потенциальный',
    'status.archive': 'Архив',
    'col.name': 'Имя',
    'col.company': 'Компания',
    'col.phone': 'Телефон',
    'col.email': 'Email',
    'col.status': 'Статус',
    'col.city': 'Город',
    'col.actions': 'Действия',
    'action.add': '+ Добавить',
    'action.export': 'Экспорт CSV',
    'action.import': 'Импорт',
    'action.export_json': 'Экспорт базы (JSON)',
    'action.import_json': 'Импорт базы (JSON)',
    'deal.new': 'Новая',
    'deal.working': 'В работе',
    'deal.review': 'На проверке',
    'deal.won': 'Закрыта (выиграна)',
    'deal.lost': 'Закрыта (проиграна)',
    'deal.add': '+ Добавить сделку',
    'tasks.search': 'Поиск задач...',
    'tasks.all_priorities': 'Все приоритеты',
    'tasks.all_statuses': 'Все',
    'tasks.active': 'Активные',
    'tasks.done': 'Выполненные',
    'priority.high': 'Высокий',
    'priority.medium': 'Средний',
    'priority.low': 'Низкий',
    'cal.month': 'Месяц',
    'cal.week': 'Неделя',
    'analytics.monthly': 'Выручка по месяцам',
    'analytics.funnel': 'Конверсия воронки',
    'analytics.top_clients': 'Топ клиентов по сделкам',
    'analytics.activity': 'Активность по дням',
    'modal.add_client': 'Новый клиент',
    'modal.edit_client': 'Редактировать клиента',
    'modal.add_deal': 'Новая сделка',
    'modal.edit_deal': 'Редактировать сделку',
    'modal.add_task': 'Новая задача',
    'modal.edit_task': 'Редактировать задачу',
    'modal.client_detail': 'Карточка клиента',
    'modal.deal_detail': 'Карточка сделки',
    'btn.save': 'Сохранить',
    'btn.cancel': 'Отмена',
    'btn.delete': 'Удалить',
    'btn.edit': 'Редактировать',
    'btn.add_history': '+ Добавить запись',
    'toast.saved': 'Сохранено',
    'toast.deleted': 'Удалено',
    'toast.imported': 'Импортировано',
    'toast.exported': 'Экспортировано',
  },
  en: {
    'auth.title': 'Welcome back',
    'auth.sub': 'Sign in to your account',
    'auth.login': 'Login',
    'auth.password': 'Password',
    'auth.btn': 'Sign in',
    'auth.error': 'Invalid login or password',
    'auth.hint': 'Demo: admin / admin123',
    'nav.dashboard': 'Dashboard',
    'nav.clients': 'Clients',
    'nav.deals': 'Deals',
    'nav.tasks': 'Tasks',
    'nav.calendar': 'Calendar',
    'nav.analytics': 'Analytics',
    'user.role': 'Manager',
    'dash.clients': 'Clients',
    'dash.deals': 'Active Deals',
    'dash.revenue': 'Revenue (mo.)',
    'dash.tasks': "Today's Tasks",
    'dash.revenue_chart': 'Monthly Revenue',
    'dash.funnel': 'Sales Funnel',
    'dash.activity': 'Recent Activity',
    'clients.search': 'Search clients...',
    'clients.all': 'All statuses',
    'status.active': 'Active',
    'status.potential': 'Potential',
    'status.archive': 'Archive',
    'col.name': 'Name',
    'col.company': 'Company',
    'col.phone': 'Phone',
    'col.email': 'Email',
    'col.status': 'Status',
    'col.city': 'City',
    'col.actions': 'Actions',
    'action.add': '+ Add',
    'action.export': 'Export CSV',
    'action.import': 'Import',
    'action.export_json': 'Export DB (JSON)',
    'action.import_json': 'Import DB (JSON)',
    'deal.new': 'New',
    'deal.working': 'In Progress',
    'deal.review': 'Under Review',
    'deal.won': 'Closed (Won)',
    'deal.lost': 'Closed (Lost)',
    'deal.add': '+ Add deal',
    'tasks.search': 'Search tasks...',
    'tasks.all_priorities': 'All priorities',
    'tasks.all_statuses': 'All',
    'tasks.active': 'Active',
    'tasks.done': 'Done',
    'priority.high': 'High',
    'priority.medium': 'Medium',
    'priority.low': 'Low',
    'cal.month': 'Month',
    'cal.week': 'Week',
    'analytics.monthly': 'Monthly Revenue',
    'analytics.funnel': 'Funnel Conversion',
    'analytics.top_clients': 'Top Clients by Deals',
    'analytics.activity': 'Activity by Days',
    'modal.add_client': 'New Client',
    'modal.edit_client': 'Edit Client',
    'modal.add_deal': 'New Deal',
    'modal.edit_deal': 'Edit Deal',
    'modal.add_task': 'New Task',
    'modal.edit_task': 'Edit Task',
    'modal.client_detail': 'Client Card',
    'modal.deal_detail': 'Deal Card',
    'btn.save': 'Save',
    'btn.cancel': 'Cancel',
    'btn.delete': 'Delete',
    'btn.edit': 'Edit',
    'btn.add_history': '+ Add entry',
    'toast.saved': 'Saved',
    'toast.deleted': 'Deleted',
    'toast.imported': 'Imported',
    'toast.exported': 'Exported',
  },
};

let currentLang = 'ru';

function t(key) { return (i18n[currentLang] || i18n.ru)[key] || key; }

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT') el.placeholder = t(key);
    else el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.getElementById('lang-toggle').textContent = currentLang === 'ru' ? 'EN' : 'RU';
}

// ============ AUTH ============
const CREDENTIALS = { login: 'admin', password: 'admin123' };

function checkAuth() {
  return localStorage.getItem('bizcrm_auth') === '1';
}

function initAuth() {
  const btn = document.getElementById('auth-btn');
  const loginInp = document.getElementById('auth-login');
  const passInp = document.getElementById('auth-pass');
  const errEl = document.getElementById('auth-error');

  const doLogin = () => {
    if (loginInp.value === CREDENTIALS.login && passInp.value === CREDENTIALS.password) {
      localStorage.setItem('bizcrm_auth', '1');
      document.getElementById('auth-screen').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      initApp();
    } else {
      errEl.classList.remove('hidden');
      passInp.value = '';
      passInp.focus();
    }
  };

  btn.addEventListener('click', doLogin);
  [loginInp, passInp].forEach(el => el.addEventListener('keydown', e => e.key === 'Enter' && doLogin()));
}

// ============ CHARTS (pure Canvas) ============

function drawLineChart(canvasId, labels, values, color = '#6366f1') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth || canvas.parentElement.offsetWidth || 600;
  const h = canvas.height || 220;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#666677' : '#888899';

  const pad = { top: 20, right: 20, bottom: 36, left: 54 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;
  const max = Math.max(...values) * 1.15;
  const min = 0;

  ctx.clearRect(0, 0, w, h);

  // Grid
  const gridLines = 5;
  for (let i = 0; i <= gridLines; i++) {
    const y = pad.top + ch - (ch * i / gridLines);
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cw, y); ctx.stroke();
    const val = Math.round(min + (max - min) * i / gridLines);
    ctx.fillStyle = textColor;
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(val >= 1000 ? (val / 1000).toFixed(0) + 'k' : val, pad.left - 6, y + 4);
  }

  const xStep = cw / (labels.length - 1);
  const pts = values.map((v, i) => ({
    x: pad.left + i * xStep,
    y: pad.top + ch - ((v - min) / (max - min)) * ch,
  }));

  // Area
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + ch);
  grad.addColorStop(0, color + '44');
  grad.addColorStop(1, color + '00');
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.slice(1).forEach((p, i) => {
    const prev = pts[i];
    const cpx = (prev.x + p.x) / 2;
    ctx.bezierCurveTo(cpx, prev.y, cpx, p.y, p.x, p.y);
  });
  ctx.lineTo(pts[pts.length - 1].x, pad.top + ch);
  ctx.lineTo(pts[0].x, pad.top + ch);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.slice(1).forEach((p, i) => {
    const prev = pts[i];
    const cpx = (prev.x + p.x) / 2;
    ctx.bezierCurveTo(cpx, prev.y, cpx, p.y, p.x, p.y);
  });
  ctx.stroke();

  // Dots
  pts.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = isDark ? '#16161a' : '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // X labels
  labels.forEach((l, i) => {
    ctx.fillStyle = textColor;
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(l, pad.left + i * xStep, pad.top + ch + 20);
  });
}

function drawBarChart(canvasId, labels, values, color = '#6366f1') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth || canvas.parentElement.offsetWidth || 400;
  const h = canvas.height || 240;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#666677' : '#888899';

  const pad = { top: 20, right: 20, bottom: 48, left: 54 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;
  const max = Math.max(...values) * 1.2 || 1;

  ctx.clearRect(0, 0, w, h);

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + ch - (ch * i / 4);
    ctx.strokeStyle = gridColor; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cw, y); ctx.stroke();
    const val = Math.round(max * i / 4);
    ctx.fillStyle = textColor; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(val >= 1000 ? (val/1000).toFixed(0)+'k' : val, pad.left - 6, y + 4);
  }

  const bw = Math.max((cw / labels.length) * 0.5, 8);
  const gap = cw / labels.length;

  labels.forEach((l, i) => {
    const x = pad.left + i * gap + gap / 2;
    const bh = (values[i] / max) * ch;
    const by = pad.top + ch - bh;

    // Bar with rounded top
    ctx.fillStyle = color + 'cc';
    ctx.beginPath();
    const r = 4;
    ctx.moveTo(x - bw / 2, by + r);
    ctx.arcTo(x - bw/2, by, x - bw/2 + r, by, r);
    ctx.lineTo(x + bw/2 - r, by);
    ctx.arcTo(x + bw/2, by, x + bw/2, by + r, r);
    ctx.lineTo(x + bw/2, pad.top + ch);
    ctx.lineTo(x - bw/2, pad.top + ch);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = textColor; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(l, x, pad.top + ch + 16);
  });
}

// ============ TOAST ============
function toast(msg, type = 'info') {
  const tc = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  tc.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(20px)'; el.style.transition = '0.3s'; setTimeout(() => el.remove(), 300); }, 2800);
}

// ============ MODAL ============
let modalSaveCallback = null;

function openModal(title, bodyHTML, saveLabel, onSave) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  const footer = document.getElementById('modal-footer');
  footer.innerHTML = '';
  if (onSave) {
    const saveBtn = document.createElement('button');
    saveBtn.className = 'btn btn-primary';
    saveBtn.textContent = saveLabel || t('btn.save');
    saveBtn.addEventListener('click', onSave);
    footer.appendChild(saveBtn);
  }
  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'btn btn-outline';
  cancelBtn.textContent = t('btn.cancel');
  cancelBtn.addEventListener('click', closeModal);
  footer.appendChild(cancelBtn);
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ============ NAVIGATION ============
let currentPage = 'dashboard';

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page)?.classList.add('active');
  document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
  document.getElementById('page-title').textContent = t('nav.' + page);
  currentPage = page;
  renderPage(page);
  // Закрыть sidebar на мобиле
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

function renderPage(page) {
  switch (page) {
    case 'dashboard': renderDashboard(); break;
    case 'clients': renderClients(); break;
    case 'deals': renderDeals(); break;
    case 'tasks': renderTasks(); break;
    case 'calendar': renderCalendar(); break;
    case 'analytics': renderAnalytics(); break;
  }
}

// ============ DASHBOARD ============
function renderDashboard() {
  const clients = DB.getClients();
  const deals = DB.getDeals();
  const tasks = DB.getTasks();
  const today = new Date().toISOString().slice(0, 10);

  const activeDeals = deals.filter(d => d.status === 'working' || d.status === 'new' || d.status === 'review');
  const todayTasks = tasks.filter(t => !t.done && t.deadline === today);
  const wonDeals = deals.filter(d => d.status === 'won');
  const monthRevenue = wonDeals.reduce((s, d) => s + (d.amount || 0), 0);

  document.getElementById('dash-clients').textContent = clients.length;
  document.getElementById('dash-deals').textContent = activeDeals.length;
  document.getElementById('dash-revenue').textContent = formatMoney(monthRevenue || 1870000);
  document.getElementById('dash-tasks').textContent = todayTasks.length;

  updateNavBadges();

  // Revenue chart
  const rev = DB.getMonthlyRevenue();
  setTimeout(() => drawLineChart('revenue-chart', rev.labels, rev.values), 50);

  // Funnel
  renderFunnel(deals);

  // Activity
  renderActivityFeed();
}

function renderFunnel(deals) {
  const el = document.getElementById('funnel-chart');
  if (!el) return;
  const stages = [
    { key: 'new', label: t('deal.new'), color: '#3b82f6' },
    { key: 'working', label: t('deal.working'), color: '#f59e0b' },
    { key: 'review', label: t('deal.review'), color: '#6366f1' },
    { key: 'won', label: t('deal.won'), color: '#22c55e' },
  ];
  const counts = stages.map(s => deals.filter(d => d.status === s.key).length);
  const maxCount = Math.max(...counts, 1);
  el.innerHTML = stages.map((s, i) => `
    <div class="funnel-stage">
      <div class="funnel-label">${s.label}</div>
      <div class="funnel-bar-wrap">
        <div class="funnel-bar" style="width:${Math.max(10, (counts[i] / maxCount) * 100)}%;background:${s.color}">
          ${counts[i] > 0 ? counts[i] : ''}
        </div>
      </div>
      <div class="funnel-count">${counts[i]}</div>
    </div>
  `).join('');
}

function renderActivityFeed() {
  const feed = document.getElementById('activity-feed');
  if (!feed) return;
  const acts = DB.getActivities().slice(0, 7);
  const dotClass = { call: 'dot-call', meeting: 'dot-meeting', email: 'dot-email', deal: 'dot-deal', task: 'dot-task' };
  feed.innerHTML = acts.map(a => `
    <div class="activity-item">
      <div class="activity-dot ${dotClass[a.type] || 'dot-task'}"></div>
      <div class="activity-content">
        <div class="activity-text">${a.text}</div>
        <div class="activity-time">${a.time || ''}</div>
      </div>
    </div>
  `).join('');
}

function updateNavBadges() {
  const clients = DB.getClients();
  const deals = DB.getDeals();
  const tasks = DB.getTasks();
  const overdue = tasks.filter(t => !t.done && t.deadline < new Date().toISOString().slice(0, 10)).length;
  document.getElementById('clients-count').textContent = clients.length;
  document.getElementById('deals-count').textContent = deals.filter(d => ['new','working','review'].includes(d.status)).length;
  document.getElementById('tasks-count').textContent = overdue || '';
  document.getElementById('tasks-count').classList.toggle('danger', overdue > 0);
}

// ============ CLIENTS ============
let clientSort = { field: 'name', dir: 1 };

function renderClients() {
  const search = document.getElementById('clients-search')?.value?.toLowerCase() || '';
  const filterStatus = document.getElementById('clients-filter')?.value || '';
  let clients = DB.getClients();

  if (search) clients = clients.filter(c =>
    c.name?.toLowerCase().includes(search) ||
    c.company?.toLowerCase().includes(search) ||
    c.email?.toLowerCase().includes(search) ||
    c.city?.toLowerCase().includes(search)
  );
  if (filterStatus) clients = clients.filter(c => c.status === filterStatus);

  clients.sort((a, b) => {
    const av = (a[clientSort.field] || '').toString().toLowerCase();
    const bv = (b[clientSort.field] || '').toString().toLowerCase();
    return av < bv ? -clientSort.dir : av > bv ? clientSort.dir : 0;
  });

  const statusLabel = { active: t('status.active'), potential: t('status.potential'), archive: t('status.archive') };
  const statusClass = { active: 'status-active', potential: 'status-potential', archive: 'status-archive' };

  const tbody = document.getElementById('clients-tbody');
  if (!tbody) return;
  tbody.innerHTML = clients.map(c => `
    <tr>
      <td><span class="bold">${esc(c.name)}</span></td>
      <td>${esc(c.company || '—')}</td>
      <td>${esc(c.phone || '—')}</td>
      <td><a href="mailto:${esc(c.email)}" style="color:var(--accent)">${esc(c.email || '—')}</a></td>
      <td><span class="status-badge ${statusClass[c.status] || ''}">${statusLabel[c.status] || c.status}</span></td>
      <td>${esc(c.city || '—')}</td>
      <td>
        <div class="action-btns">
          <button class="icon-btn" title="Карточка" onclick="showClientDetail('${c.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="icon-btn" title="Редактировать" onclick="showClientForm('${c.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="icon-btn" title="Удалить" onclick="deleteClient('${c.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--text3)">Клиентов не найдено</td></tr>';

  // Sort headers
  document.querySelectorAll('#clients-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const f = th.getAttribute('data-sort');
      if (clientSort.field === f) clientSort.dir *= -1;
      else { clientSort.field = f; clientSort.dir = 1; }
      renderClients();
    });
  });
}

function showClientForm(id) {
  const c = id ? DB.getClient(id) : {};
  const clients = DB.getClients();
  const body = `
    <div class="field"><label>${t('col.name')}</label><input id="cf-name" type="text" value="${esc(c?.name||'')}"></div>
    <div class="field"><label>${t('col.company')}</label><input id="cf-company" type="text" value="${esc(c?.company||'')}"></div>
    <div class="field"><label>${t('col.phone')}</label><input id="cf-phone" type="text" value="${esc(c?.phone||'')}"></div>
    <div class="field"><label>${t('col.email')}</label><input id="cf-email" type="email" value="${esc(c?.email||'')}"></div>
    <div class="field"><label>${t('col.city')}</label><input id="cf-city" type="text" value="${esc(c?.city||'')}"></div>
    <div class="field"><label>${t('col.status')}</label>
      <select id="cf-status">
        <option value="active" ${c?.status==='active'?'selected':''}>${t('status.active')}</option>
        <option value="potential" ${c?.status==='potential'?'selected':''}>${t('status.potential')}</option>
        <option value="archive" ${c?.status==='archive'?'selected':''}>${t('status.archive')}</option>
      </select>
    </div>
    <div class="field"><label>Заметки</label><textarea id="cf-notes">${esc(c?.notes||'')}</textarea></div>
  `;
  openModal(id ? t('modal.edit_client') : t('modal.add_client'), body, t('btn.save'), () => {
    const data = {
      name: document.getElementById('cf-name').value.trim(),
      company: document.getElementById('cf-company').value.trim(),
      phone: document.getElementById('cf-phone').value.trim(),
      email: document.getElementById('cf-email').value.trim(),
      city: document.getElementById('cf-city').value.trim(),
      status: document.getElementById('cf-status').value,
      notes: document.getElementById('cf-notes').value.trim(),
    };
    if (!data.name) return toast('Введите имя клиента', 'error');
    if (id) DB.updateClient(id, data);
    else DB.addClient(data);
    closeModal();
    renderClients();
    updateNavBadges();
    toast(t('toast.saved'), 'success');
  });
}

function showClientDetail(id) {
  const c = DB.getClient(id);
  if (!c) return;
  const deals = DB.getDeals().filter(d => d.clientId === id);
  const statusLabel = { active: t('status.active'), potential: t('status.potential'), archive: t('status.archive') };
  const typeIcons = { call: '📞', meeting: '🤝', email: '✉️' };

  const histHTML = (c.history || []).slice(0, 8).map(h => `
    <div class="history-item">
      <div class="history-type-icon">${typeIcons[h.type] || '📌'}</div>
      <div class="history-body">
        <div class="history-text">${esc(h.text)}</div>
        <div class="history-date">${h.date || ''}</div>
      </div>
    </div>
  `).join('') || '<div class="text-muted text-sm">Нет записей</div>';

  const dealsHTML = deals.length ? deals.map(d => `
    <div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--border)">
      <span style="flex:1;font-size:13px;font-weight:600">${esc(d.title)}</span>
      <span style="font-size:13px;font-weight:800;color:var(--success)">${formatMoney(d.amount)}</span>
    </div>
  `).join('') : '<div class="text-muted text-sm">Нет сделок</div>';

  const body = `
    <div class="client-detail-section">
      <h4>Контактная информация</h4>
      <div class="client-info-grid">
        <div class="info-row"><div class="info-label">Телефон</div><div class="info-value">${esc(c.phone||'—')}</div></div>
        <div class="info-row"><div class="info-label">Email</div><div class="info-value">${esc(c.email||'—')}</div></div>
        <div class="info-row"><div class="info-label">Компания</div><div class="info-value">${esc(c.company||'—')}</div></div>
        <div class="info-row"><div class="info-label">Город</div><div class="info-value">${esc(c.city||'—')}</div></div>
        <div class="info-row"><div class="info-label">Статус</div><div class="info-value">${statusLabel[c.status]||c.status}</div></div>
        <div class="info-row"><div class="info-label">Создан</div><div class="info-value">${c.createdAt||'—'}</div></div>
      </div>
      ${c.notes ? `<div style="margin-top:12px;padding:10px;background:var(--bg3);border-radius:6px;font-size:13px;color:var(--text2)">${esc(c.notes)}</div>` : ''}
    </div>
    <div class="client-detail-section">
      <h4>Сделки (${deals.length})</h4>
      ${dealsHTML}
    </div>
    <div class="client-detail-section">
      <h4>История взаимодействий</h4>
      <div class="history-list">${histHTML}</div>
      <button class="btn btn-sm btn-outline mt-8" onclick="addHistoryEntry('${id}')">${t('btn.add_history')}</button>
    </div>
  `;

  openModal(c.name, body, t('btn.edit'), () => { closeModal(); showClientForm(id); });
}

function addHistoryEntry(clientId) {
  const body = `
    <div class="field"><label>Тип</label>
      <select id="hist-type">
        <option value="call">📞 Звонок</option>
        <option value="meeting">🤝 Встреча</option>
        <option value="email">✉️ Письмо</option>
      </select>
    </div>
    <div class="field"><label>Дата</label><input type="date" id="hist-date" value="${new Date().toISOString().slice(0,10)}"></div>
    <div class="field"><label>Комментарий</label><textarea id="hist-text" rows="3"></textarea></div>
  `;
  openModal('Добавить запись', body, 'Добавить', () => {
    const entry = {
      type: document.getElementById('hist-type').value,
      date: document.getElementById('hist-date').value,
      text: document.getElementById('hist-text').value.trim(),
    };
    if (!entry.text) return toast('Введите комментарий', 'error');
    DB.addHistory(clientId, entry);
    DB.addActivity({ type: entry.type, text: `${typeNames[entry.type]||'Запись'} — ${DB.getClient(clientId)?.name}`, time: 'только что' });
    closeModal();
    toast(t('toast.saved'), 'success');
  });
}

const typeNames = { call: '📞 Звонок', meeting: '🤝 Встреча', email: '✉️ Письмо' };

function deleteClient(id) {
  if (!confirm('Удалить клиента?')) return;
  DB.deleteClient(id);
  renderClients();
  updateNavBadges();
  toast(t('toast.deleted'));
}

// CSV Export/Import
function exportClientsCSV() {
  const csv = DB.exportCSV();
  downloadFile('clients.csv', csv, 'text/csv');
  toast(t('toast.exported'), 'success');
}

// ============ DEALS (KANBAN) ============
let draggedDeal = null;

function renderDeals() {
  const deals = DB.getDeals();
  const cols = ['new', 'working', 'review', 'won', 'lost'];
  cols.forEach(status => {
    const col = document.getElementById('col-' + status);
    if (!col) return;
    const colDeals = deals.filter(d => d.status === status);
    document.getElementById('col-count-' + status).textContent = colDeals.length;
    col.innerHTML = colDeals.map(d => renderDealCard(d)).join('');
    col.querySelectorAll('.deal-card').forEach(el => setupDragCard(el));
    setupDropZone(col, status);
  });
  document.querySelectorAll('.add-card-btn').forEach(btn => {
    btn.onclick = () => showDealForm(null, btn.getAttribute('data-col'));
  });
}

function renderDealCard(d) {
  const today = new Date().toISOString().slice(0, 10);
  const dClass = !d.deadline ? '' : d.deadline < today ? 'overdue' : d.deadline <= addDays(today, 3) ? 'soon' : 'ok';
  const tags = (d.tags || []).map(t => `<span class="deal-tag">${esc(t)}</span>`).join('');
  return `
    <div class="deal-card" data-id="${d.id}" draggable="true" onclick="showDealDetail('${d.id}')">
      <div class="deal-card-title">${esc(d.title)}</div>
      <div class="deal-card-amount">${formatMoney(d.amount)}</div>
      <div class="deal-card-meta">
        <span class="priority-dot priority-${d.priority}"></span>
        <span class="deal-client">${esc(d.clientName || '—')}</span>
        ${tags}
        ${d.deadline ? `<span class="deal-deadline ${dClass}">${d.deadline}</span>` : ''}
      </div>
    </div>
  `;
}

function setupDragCard(el) {
  // Desktop drag
  el.addEventListener('dragstart', e => {
    draggedDeal = el.getAttribute('data-id');
    el.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  el.addEventListener('dragend', () => el.classList.remove('dragging'));

  // Touch drag для мобильных (iOS/Android не поддерживают HTML5 DnD)
  let touchStartX, touchStartY, touchClone, touchMoved = false;

  el.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchMoved = false;
    draggedDeal = el.getAttribute('data-id');
  }, { passive: true });

  el.addEventListener('touchmove', e => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX);
    const dy = Math.abs(e.touches[0].clientY - touchStartY);
    if (dx < 6 && dy < 6) return; // ещё не начали тащить

    touchMoved = true;
    e.preventDefault(); // блокируем скролл только при реальном перетаскивании

    // Создаём клон-призрак один раз
    if (!touchClone) {
      touchClone = el.cloneNode(true);
      touchClone.style.cssText = `
        position:fixed;opacity:0.85;pointer-events:none;z-index:9999;
        width:${el.offsetWidth}px;border-radius:8px;
        box-shadow:0 8px 24px rgba(0,0,0,0.3);transform:rotate(2deg);
        transition:none;
      `;
      document.body.appendChild(touchClone);
      el.classList.add('dragging');
    }

    const x = e.touches[0].clientX - el.offsetWidth / 2;
    const y = e.touches[0].clientY - 30;
    touchClone.style.left = x + 'px';
    touchClone.style.top  = y + 'px';

    // Подсвечиваем колонку под пальцем
    document.querySelectorAll('.kanban-cards').forEach(c => c.classList.remove('drag-target'));
    const target = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    const col = target?.closest('.kanban-cards');
    if (col) col.classList.add('drag-target');
  }, { passive: false });

  el.addEventListener('touchend', e => {
    if (touchClone) { touchClone.remove(); touchClone = null; }
    el.classList.remove('dragging');
    document.querySelectorAll('.kanban-cards').forEach(c => c.classList.remove('drag-target'));

    if (!touchMoved || !draggedDeal) { draggedDeal = null; return; }

    // Определяем целевую колонку
    const target = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    const col = target?.closest('.kanban-col');
    if (col) {
      const status = col.getAttribute('data-status');
      if (status) {
        DB.updateDeal(draggedDeal, { status });
        DB.addActivity({ type: 'deal', text: `Сделка перемещена в <strong>${t('deal.'+status)}</strong>`, time: 'только что' });
        renderDeals();
      }
    }
    draggedDeal = null;
    touchMoved = false;
  });
}

function setupDropZone(col, status) {
  col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('drag-target'); });
  col.addEventListener('dragleave', () => col.classList.remove('drag-target'));
  col.addEventListener('drop', e => {
    e.preventDefault();
    col.classList.remove('drag-target');
    if (!draggedDeal) return;
    DB.updateDeal(draggedDeal, { status });
    DB.addActivity({ type: 'deal', text: `Сделка перемещена в <strong>${t('deal.'+status)}</strong>`, time: 'только что' });
    renderDeals();
    draggedDeal = null;
  });
}

function showDealForm(id, defaultStatus) {
  const d = id ? DB.getDeals().find(x => x.id === id) : {};
  const clients = DB.getClients();
  const statusOpts = ['new','working','review','won','lost'].map(s => `<option value="${s}" ${(d?.status||defaultStatus||'new')===s?'selected':''}>${t('deal.'+s)}</option>`).join('');
  const clientOpts = clients.map(c => `<option value="${c.id}" ${d?.clientId===c.id?'selected':''}>${esc(c.name)}</option>`).join('');

  const body = `
    <div class="field"><label>Название</label><input id="df-title" type="text" value="${esc(d?.title||'')}"></div>
    <div class="field"><label>Клиент</label><select id="df-client"><option value="">— не выбран —</option>${clientOpts}</select></div>
    <div class="field"><label>Сумма (₽)</label><input id="df-amount" type="number" value="${d?.amount||''}"></div>
    <div class="field"><label>Статус</label><select id="df-status">${statusOpts}</select></div>
    <div class="field"><label>Приоритет</label>
      <select id="df-priority">
        <option value="high" ${d?.priority==='high'?'selected':''}>${t('priority.high')}</option>
        <option value="medium" ${d?.priority==='medium'?'selected':''}>${t('priority.medium')}</option>
        <option value="low" ${d?.priority==='low'?'selected':''}>${t('priority.low')}</option>
      </select>
    </div>
    <div class="field"><label>Дедлайн</label><input id="df-deadline" type="date" value="${d?.deadline||''}"></div>
    <div class="field"><label>Теги (через запятую)</label><input id="df-tags" type="text" value="${(d?.tags||[]).join(', ')}"></div>
    <div class="field"><label>Заметки</label><textarea id="df-notes">${esc(d?.notes||'')}</textarea></div>
  `;
  openModal(id ? t('modal.edit_deal') : t('modal.add_deal'), body, t('btn.save'), () => {
    const clientId = document.getElementById('df-client').value;
    const client = clients.find(c => c.id === clientId);
    const data = {
      title: document.getElementById('df-title').value.trim(),
      clientId, clientName: client?.name || '',
      amount: parseFloat(document.getElementById('df-amount').value) || 0,
      status: document.getElementById('df-status').value,
      priority: document.getElementById('df-priority').value,
      deadline: document.getElementById('df-deadline').value,
      tags: document.getElementById('df-tags').value.split(',').map(s => s.trim()).filter(Boolean),
      notes: document.getElementById('df-notes').value.trim(),
    };
    if (!data.title) return toast('Введите название сделки', 'error');
    if (id) DB.updateDeal(id, data);
    else DB.addDeal(data);
    closeModal();
    renderDeals();
    toast(t('toast.saved'), 'success');
  });
}

function showDealDetail(id) {
  const d = DB.getDeals().find(x => x.id === id);
  if (!d) return;
  const prioLabel = { high: t('priority.high'), medium: t('priority.medium'), low: t('priority.low') };
  const body = `
    <div class="client-info-grid" style="margin-bottom:16px">
      <div class="info-row"><div class="info-label">Сумма</div><div class="info-value" style="color:var(--success);font-size:18px">${formatMoney(d.amount)}</div></div>
      <div class="info-row"><div class="info-label">Статус</div><div class="info-value">${t('deal.'+d.status)}</div></div>
      <div class="info-row"><div class="info-label">Клиент</div><div class="info-value">${esc(d.clientName||'—')}</div></div>
      <div class="info-row"><div class="info-label">Приоритет</div><div class="info-value">${prioLabel[d.priority]||'—'}</div></div>
      <div class="info-row"><div class="info-label">Дедлайн</div><div class="info-value">${d.deadline||'—'}</div></div>
      <div class="info-row"><div class="info-label">Создан</div><div class="info-value">${d.createdAt||'—'}</div></div>
    </div>
    ${d.tags?.length ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px">${d.tags.map(t=>`<span class="deal-tag">${esc(t)}</span>`).join('')}</div>` : ''}
    ${d.notes ? `<div style="padding:10px;background:var(--bg3);border-radius:6px;font-size:13px">${esc(d.notes)}</div>` : ''}
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="btn btn-danger btn-sm" onclick="deleteDeal('${id}');closeModal()">Удалить сделку</button>
    </div>
  `;
  openModal(d.title, body, t('btn.edit'), () => { closeModal(); showDealForm(id); });
}

function deleteDeal(id) {
  DB.deleteDeal(id);
  renderDeals();
  toast(t('toast.deleted'));
}

// ============ TASKS ============
function renderTasks() {
  const search = document.getElementById('tasks-search')?.value?.toLowerCase() || '';
  const priority = document.getElementById('tasks-filter-priority')?.value || '';
  const statusF = document.getElementById('tasks-filter-status')?.value || '';
  let tasks = DB.getTasks();

  if (search) tasks = tasks.filter(t => t.title?.toLowerCase().includes(search));
  if (priority) tasks = tasks.filter(t => t.priority === priority);
  if (statusF === 'active') tasks = tasks.filter(t => !t.done);
  if (statusF === 'done') tasks = tasks.filter(t => t.done);

  const today = new Date().toISOString().slice(0, 10);
  tasks.sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    const prioOrder = { high: 0, medium: 1, low: 2 };
    return (prioOrder[a.priority] || 1) - (prioOrder[b.priority] || 1);
  });

  const list = document.getElementById('tasks-list');
  if (!list) return;
  list.innerHTML = tasks.map(task => {
    const overdueClass = !task.done && task.deadline < today ? 'style="color:var(--danger)"' : task.deadline === today ? 'style="color:var(--warning)"' : '';
    const prioClass = { high: 'badge-high', medium: 'badge-medium', low: 'badge-low' }[task.priority] || '';
    const prioLabel = { high: t('priority.high'), medium: t('priority.medium'), low: t('priority.low') }[task.priority] || '';
    return `
      <div class="task-item ${task.done ? 'done' : ''}">
        <div class="task-check ${task.done ? 'checked' : ''}" onclick="toggleTask('${task.id}')"></div>
        <div class="task-body">
          <div class="task-title">${esc(task.title)}</div>
          <div class="task-meta">
            <span class="task-badge ${prioClass}">${prioLabel}</span>
            ${task.deadline ? `<span class="task-date" ${overdueClass}>${task.deadline}</span>` : ''}
            ${task.clientName ? `<span class="task-link">${esc(task.clientName)}</span>` : ''}
            ${task.dealName ? `<span class="task-link">· ${esc(task.dealName)}</span>` : ''}
          </div>
        </div>
        <div class="task-actions">
          <button class="icon-btn" onclick="showTaskForm('${task.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="icon-btn" onclick="deleteTask('${task.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('') || '<div style="padding:32px;text-align:center;color:var(--text3)">Задач не найдено</div>';
}

function toggleTask(id) {
  DB.toggleTask(id);
  renderTasks();
  updateNavBadges();
}

function showTaskForm(id) {
  const task = id ? DB.getTasks().find(t => t.id === id) : {};
  const clients = DB.getClients();
  const deals = DB.getDeals();
  const clientOpts = clients.map(c => `<option value="${c.id}" ${task?.clientId===c.id?'selected':''}>${esc(c.name)}</option>`).join('');
  const dealOpts = deals.map(d => `<option value="${d.id}" ${task?.dealId===d.id?'selected':''}>${esc(d.title)}</option>`).join('');
  const body = `
    <div class="field"><label>Задача</label><input id="tf-title" type="text" value="${esc(task?.title||'')}"></div>
    <div class="field"><label>Приоритет</label>
      <select id="tf-priority">
        <option value="high" ${task?.priority==='high'?'selected':''}>${t('priority.high')}</option>
        <option value="medium" ${task?.priority==='medium'?'selected':''}>${t('priority.medium')}</option>
        <option value="low" ${task?.priority==='low'?'selected':''}>${t('priority.low')}</option>
      </select>
    </div>
    <div class="field"><label>Дедлайн</label><input id="tf-deadline" type="date" value="${task?.deadline||''}"></div>
    <div class="field"><label>Клиент</label><select id="tf-client"><option value="">— не выбран —</option>${clientOpts}</select></div>
    <div class="field"><label>Сделка</label><select id="tf-deal"><option value="">— не выбрана —</option>${dealOpts}</select></div>
  `;
  openModal(id ? t('modal.edit_task') : t('modal.add_task'), body, t('btn.save'), () => {
    const clientId = document.getElementById('tf-client').value;
    const dealId = document.getElementById('tf-deal').value;
    const client = clients.find(c => c.id === clientId);
    const deal = deals.find(d => d.id === dealId);
    const data = {
      title: document.getElementById('tf-title').value.trim(),
      priority: document.getElementById('tf-priority').value,
      deadline: document.getElementById('tf-deadline').value,
      clientId, clientName: client?.name || '',
      dealId, dealName: deal?.title || '',
      done: task?.done || false,
    };
    if (!data.title) return toast('Введите название задачи', 'error');
    if (id) DB.updateTask(id, data);
    else DB.addTask(data);
    closeModal();
    renderTasks();
    updateNavBadges();
    toast(t('toast.saved'), 'success');
  });
}

function deleteTask(id) {
  if (!confirm('Удалить задачу?')) return;
  DB.deleteTask(id);
  renderTasks();
  updateNavBadges();
  toast(t('toast.deleted'));
}

// ============ CALENDAR ============
let calDate = new Date();
let calView = 'month';

function renderCalendar() {
  const DAYS_RU = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
  const MONTHS_RU = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
  const DAYS_EN = ['Mo','Tu','We','Th','Fr','Sa','Su'];
  const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DAYS = currentLang === 'ru' ? DAYS_RU : DAYS_EN;
  const MONTHS = currentLang === 'ru' ? MONTHS_RU : MONTHS_EN;

  document.getElementById('cal-title').textContent = `${MONTHS[calDate.getMonth()]} ${calDate.getFullYear()}`;

  const tasks = DB.getTasks();
  const deals = DB.getDeals().filter(d => d.deadline);

  const grid = document.getElementById('cal-grid');
  if (!grid) return;

  if (calView === 'week') {
    renderWeekView(grid, tasks, deals, DAYS);
    return;
  }

  // Месячный вид
  const year = calDate.getFullYear();
  const month = calDate.getMonth();
  const firstDay = new Date(year, month, 1);
  let startDOW = firstDay.getDay() - 1; if (startDOW < 0) startDOW = 6;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();
  const today = new Date().toISOString().slice(0, 10);

  const cells = [];
  for (let i = startDOW - 1; i >= 0; i--) cells.push({ day: prevDays - i, cur: false });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, cur: true });
  while (cells.length % 7 !== 0) cells.push({ day: cells.length - daysInMonth - startDOW + 1, cur: false });

  grid.innerHTML = `
    <div class="cal-weekdays">${DAYS.map(d => `<div class="cal-weekday">${d}</div>`).join('')}</div>
    <div class="cal-days">
      ${cells.map(cell => {
        const dateStr = cell.cur ? `${year}-${String(month+1).padStart(2,'0')}-${String(cell.day).padStart(2,'0')}` : '';
        const isToday = dateStr === today;
        const cellTasks = tasks.filter(t => t.deadline === dateStr && !t.done);
        const cellDeals = deals.filter(d => d.deadline === dateStr);
        const evHTML = [
          ...cellTasks.slice(0,2).map(t => `<div class="cal-event cal-event-task">${esc(t.title)}</div>`),
          ...cellDeals.slice(0,1).map(d => `<div class="cal-event cal-event-deal">${esc(d.title)}</div>`),
        ].join('');
        return `
          <div class="cal-day${cell.cur ? '' : ' other-month'}${isToday ? ' today' : ''}" onclick="${cell.cur ? `calDayClick('${dateStr}')` : ''}">
            <div class="cal-day-num">${cell.day}</div>
            <div class="cal-day-events">${evHTML}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderWeekView(grid, tasks, deals, DAYS) {
  const startOfWeek = new Date(calDate);
  const dow = startOfWeek.getDay() || 7;
  startOfWeek.setDate(startOfWeek.getDate() - dow + 1);
  const weekDays = Array.from({length:7}, (_,i) => {
    const d = new Date(startOfWeek); d.setDate(d.getDate()+i); return d;
  });
  const today = new Date().toISOString().slice(0,10);

  grid.innerHTML = `
    <div class="cal-weekdays">
      ${weekDays.map((d,i) => `<div class="cal-weekday">${DAYS[i]} ${d.getDate()}</div>`).join('')}
    </div>
    <div class="cal-days" style="grid-template-columns:repeat(7,1fr)">
      ${weekDays.map(d => {
        const dateStr = d.toISOString().slice(0,10);
        const isToday = dateStr === today;
        const ct = tasks.filter(t => t.deadline === dateStr && !t.done);
        const cd = deals.filter(x => x.deadline === dateStr);
        const evHTML = [
          ...ct.map(t => `<div class="cal-event cal-event-task">${esc(t.title)}</div>`),
          ...cd.map(x => `<div class="cal-event cal-event-deal">${esc(x.title)}</div>`),
        ].join('');
        return `<div class="cal-day${isToday?' today':''}" onclick="calDayClick('${dateStr}')">
          <div class="cal-day-num">${d.getDate()}</div>
          <div class="cal-day-events">${evHTML}</div>
        </div>`;
      }).join('')}
    </div>
  `;
}

function calDayClick(dateStr) {
  showTaskForm(null);
  setTimeout(() => {
    const inp = document.getElementById('tf-deadline');
    if (inp) inp.value = dateStr;
  }, 50);
}

// ============ ANALYTICS ============
function renderAnalytics() {
  const rev = DB.getMonthlyRevenue();
  setTimeout(() => {
    drawLineChart('analytics-revenue', rev.labels, rev.values, '#6366f1');
    renderFunnelBar();
    renderTopClients();
    renderActivityChart();
  }, 50);
}

function renderFunnelBar() {
  const deals = DB.getDeals();
  const stages = ['new','working','review','won','lost'];
  const counts = stages.map(s => deals.filter(d => d.status === s).length);
  drawBarChart('analytics-funnel', stages.map(s => t('deal.'+s).slice(0,6)), counts, '#6366f1');
}

function renderTopClients() {
  const top = DB.getTopClients(5);
  const el = document.getElementById('top-clients-list');
  if (!el) return;
  const rankClass = ['gold','silver','bronze','',''];
  el.innerHTML = top.map((c, i) => `
    <div class="top-client-item">
      <div class="top-client-rank ${rankClass[i]||''}">${i+1}</div>
      <div class="top-client-name">${esc(c.name)}</div>
      <div class="top-client-amount">${formatMoney(c.amount)}</div>
    </div>
  `).join('') || '<div class="text-muted text-sm" style="padding:12px">Нет данных</div>';
}

function renderActivityChart() {
  const days = Array.from({length:14}, (_,i) => {
    const d = new Date(); d.setDate(d.getDate()-13+i);
    return d.toISOString().slice(0,10);
  });
  const tasks = DB.getTasks();
  const vals = days.map(d => tasks.filter(t => t.createdAt?.slice(0,10) === d).length + Math.floor(Math.random()*3));
  const labels = days.map(d => d.slice(5));
  drawBarChart('analytics-activity', labels, vals, '#22c55e');
}

// ============ UTILITIES ============
function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function formatMoney(n) {
  return new Intl.NumberFormat('ru-RU', { style:'currency', currency:'RUB', maximumFractionDigits:0 }).format(n || 0);
}

function addDays(dateStr, n) {
  const d = new Date(dateStr); d.setDate(d.getDate() + n); return d.toISOString().slice(0,10);
}

function downloadFile(name, content, type = 'text/plain') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = name;
  a.click();
}

// ============ TOPBAR ADD BUTTON ============
function handleTopbarAdd() {
  switch (currentPage) {
    case 'clients': showClientForm(); break;
    case 'deals': showDealForm(); break;
    case 'tasks': showTaskForm(); break;
    default: break;
  }
}

// ============ THEME ============
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  DB.setSetting('theme', theme);
}

// ============ INIT ============
function initApp() {
  DB.init();
  applyI18n();

  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(item.getAttribute('data-page'));
    });
  });

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });

  // Lang toggle
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    DB.setSetting('lang', currentLang);
    applyI18n();
    renderPage(currentPage);
  });

  // Logout
  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('bizcrm_auth');
    location.reload();
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });

  // Topbar add
  document.getElementById('topbar-add-btn').addEventListener('click', handleTopbarAdd);

  // Clients search/filter
  document.getElementById('clients-search')?.addEventListener('input', renderClients);
  document.getElementById('clients-filter')?.addEventListener('change', renderClients);
  document.getElementById('clients-export-btn')?.addEventListener('click', exportClientsCSV);
  document.getElementById('clients-import-btn')?.addEventListener('click', () => document.getElementById('clients-import-input').click());
  document.getElementById('clients-import-input')?.addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const lines = ev.target.result.split('\n').slice(1);
      lines.forEach(line => {
        const parts = line.split(',').map(v => v.replace(/^"|"$/g,'').trim());
        if (!parts[0]) return;
        DB.addClient({ name:parts[0], company:parts[1], phone:parts[2], email:parts[3], city:parts[4], status:parts[5]==='Активный'?'active':parts[5]==='Потенциальный'?'potential':'archive', notes:parts[6] });
      });
      renderClients(); toast(t('toast.imported'), 'success');
    };
    reader.readAsText(file); e.target.value='';
  });

  // Tasks search/filter
  document.getElementById('tasks-search')?.addEventListener('input', renderTasks);
  document.getElementById('tasks-filter-priority')?.addEventListener('change', renderTasks);
  document.getElementById('tasks-filter-status')?.addEventListener('change', renderTasks);

  // Calendar nav
  document.getElementById('cal-prev')?.addEventListener('click', () => {
    if (calView === 'month') calDate.setMonth(calDate.getMonth()-1);
    else calDate.setDate(calDate.getDate()-7);
    renderCalendar();
  });
  document.getElementById('cal-next')?.addEventListener('click', () => {
    if (calView === 'month') calDate.setMonth(calDate.getMonth()+1);
    else calDate.setDate(calDate.getDate()+7);
    renderCalendar();
  });
  document.getElementById('cal-month-btn')?.addEventListener('click', () => {
    calView = 'month';
    document.getElementById('cal-month-btn').classList.add('active');
    document.getElementById('cal-week-btn').classList.remove('active');
    renderCalendar();
  });
  document.getElementById('cal-week-btn')?.addEventListener('click', () => {
    calView = 'week';
    document.getElementById('cal-week-btn').classList.add('active');
    document.getElementById('cal-month-btn').classList.remove('active');
    renderCalendar();
  });

  // JSON export/import
  document.getElementById('export-json-btn')?.addEventListener('click', () => {
    downloadFile('bizcrm-backup.json', DB.exportJSON(), 'application/json');
    toast(t('toast.exported'), 'success');
  });
  document.getElementById('import-json-btn')?.addEventListener('click', () => document.getElementById('import-json-input').click());
  document.getElementById('import-json-input')?.addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try { DB.importJSON(ev.target.result); renderPage(currentPage); updateNavBadges(); toast(t('toast.imported'), 'success'); }
      catch { toast('Ошибка импорта', 'error'); }
    };
    reader.readAsText(file); e.target.value='';
  });

  // Burger / sidebar mobile
  document.getElementById('burger-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar-overlay').classList.add('active');
  });
  document.getElementById('sidebar-close').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');
  });
  document.getElementById('sidebar-overlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');
  });

  // Restore settings
  const settings = DB.getSettings();
  if (settings.theme) applyTheme(settings.theme);
  if (settings.lang) { currentLang = settings.lang; applyI18n(); }

  // Initial page
  navigateTo('dashboard');

  // Redraw charts on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => renderPage(currentPage), 200);
  });

  // Keyboard shortcut Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// ============ BOOT ============
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  if (checkAuth()) {
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    initApp();
  }
});
