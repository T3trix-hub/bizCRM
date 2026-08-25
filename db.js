/* ============================================
   BizCRM — Слой данных (LocalStorage + демо-данные)
   ============================================ */

const DB = (() => {
  // Ключи хранилища
  const KEYS = {
    clients: 'bizcrm_clients',
    deals: 'bizcrm_deals',
    tasks: 'bizcrm_tasks',
    activities: 'bizcrm_activities',
    settings: 'bizcrm_settings',
    initialized: 'bizcrm_initialized',
  };

  // Утилиты хранилища
  const get = k => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch { return []; } };
  const set = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  const getObj = k => { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch { return {}; } };

  // Генератор ID
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  // ============ ДЕМО-ДАННЫЕ ============

  const demoClients = [
    { id: uid(), name: 'Алексей Морозов', phone: '+7 (916) 234-55-12', email: 'morozov.alex@gmail.com', company: 'ООО «АльфаСтрой»', city: 'Москва', status: 'active', notes: 'Ключевой клиент, заинтересован в долгосрочном сотрудничестве. Предпочитает общение по телефону.', createdAt: '2024-03-15', history: [
      { type: 'call', date: '2024-11-20', text: 'Звонок по вопросу поставки материалов на Q1 2025' },
      { type: 'meeting', date: '2024-10-05', text: 'Встреча в офисе клиента, обсудили условия контракта' },
      { type: 'email', date: '2024-09-18', text: 'Отправили КП на поставку строительных материалов' },
    ]},
    { id: uid(), name: 'Екатерина Смирнова', phone: '+7 (962) 778-33-01', email: 'kate.smirnova@yandex.ru', company: 'ИП Смирнова Е.В.', city: 'Санкт-Петербург', status: 'active', notes: 'Владелец сети кофеен. Регулярные заказы каждый квартал.', createdAt: '2024-01-22', history: [
      { type: 'meeting', date: '2024-11-12', text: 'Деловой завтрак, обсудили расширение сотрудничества' },
      { type: 'email', date: '2024-10-30', text: 'Направлен обновлённый прайс-лист' },
    ]},
    { id: uid(), name: 'Дмитрий Козлов', phone: '+7 (903) 456-78-90', email: 'dkozlov@mail.ru', company: 'ООО «ТехМаш»', city: 'Новосибирск', status: 'potential', notes: 'Познакомились на выставке. Интересуется автоматизацией производства.', createdAt: '2024-06-10', history: [
      { type: 'call', date: '2024-11-08', text: 'Первичный звонок после выставки «Автоматизация-2024»' },
    ]},
    { id: uid(), name: 'Ольга Петрова', phone: '+7 (925) 111-22-33', email: 'o.petrova@gmail.com', company: 'ООО «МедТех Групп»', city: 'Казань', status: 'active', notes: 'Работаем с 2022 года. Всегда платит вовремя.', createdAt: '2022-08-01', history: [
      { type: 'email', date: '2024-11-15', text: 'Подтверждение заказа №847 на медицинское оборудование' },
      { type: 'call', date: '2024-10-22', text: 'Обсудили график поставок на следующий год' },
      { type: 'meeting', date: '2024-09-01', text: 'Ежегодная встреча по итогам сотрудничества' },
    ]},
    { id: uid(), name: 'Сергей Николаев', phone: '+7 (985) 654-32-10', email: 'sergey.n@yandex.ru', company: 'ИП Николаев С.К.', city: 'Екатеринбург', status: 'potential', notes: 'Перспективный клиент. Нужна встреча для демонстрации продукта.', createdAt: '2024-09-03', history: [
      { type: 'call', date: '2024-11-01', text: 'Входящий звонок, запрос о сотрудничестве' },
    ]},
    { id: uid(), name: 'Наталья Волкова', phone: '+7 (917) 888-44-55', email: 'n.volkova@mail.ru', company: 'ООО «ВолгаТрейд»', city: 'Нижний Новгород', status: 'active', notes: 'Крупный дистрибьютор. Работаем с 2021 года.', createdAt: '2021-05-20', history: [
      { type: 'meeting', date: '2024-10-28', text: 'Квартальная встреча по планированию поставок' },
      { type: 'email', date: '2024-10-01', text: 'Направлен счёт на оплату за октябрь' },
    ]},
    { id: uid(), name: 'Андрей Захаров', phone: '+7 (909) 321-65-87', email: 'a.zaharov@gmail.com', company: 'ООО «ДигиталСофт»', city: 'Москва', status: 'active', notes: 'IT-компания. Заказывают разработку и поддержку ПО.', createdAt: '2023-11-14', history: [
      { type: 'call', date: '2024-11-18', text: 'Звонок по техническому заданию нового проекта' },
      { type: 'email', date: '2024-11-05', text: 'Отправлен договор на разработку CRM-модуля' },
    ]},
    { id: uid(), name: 'Марина Лебедева', phone: '+7 (963) 777-00-11', email: 'marina.leb@yandex.ru', company: 'ИП Лебедева М.А.', city: 'Краснодар', status: 'archive', notes: 'Сотрудничество приостановлено по инициативе клиента в 2023 году.', createdAt: '2020-03-08', history: [
      { type: 'call', date: '2023-12-01', text: 'Клиент сообщил о временной паузе в работе' },
    ]},
    { id: uid(), name: 'Иван Семёнов', phone: '+7 (910) 555-66-77', email: 'ivan.semenov@mail.ru', company: 'ООО «УралМеталл»', city: 'Челябинск', status: 'active', notes: 'Металлургическая компания. Крупные заказы.', createdAt: '2023-04-17', history: [
      { type: 'email', date: '2024-11-10', text: 'КП на поставку металлоконструкций для нового объекта' },
      { type: 'meeting', date: '2024-10-15', text: 'Выезд на производственную площадку клиента' },
    ]},
    { id: uid(), name: 'Татьяна Фёдорова', phone: '+7 (926) 222-33-44', email: 'fed.tatiana@gmail.com', company: 'ООО «СитиМаркет»', city: 'Ростов-на-Дону', status: 'potential', notes: 'Сеть розничных магазинов. Рассматривают автоматизацию учёта.', createdAt: '2024-08-21', history: [
      { type: 'meeting', date: '2024-09-25', text: 'Презентация нашего решения для ритейла' },
    ]},
    { id: uid(), name: 'Павел Кузнецов', phone: '+7 (967) 444-88-99', email: 'p.kuznetsov@yandex.ru', company: 'ООО «АгроПром»', city: 'Воронеж', status: 'active', notes: 'Агрохолдинг. Сезонные закупки весной и осенью.', createdAt: '2022-02-14', history: [
      { type: 'call', date: '2024-10-30', text: 'Согласование объёмов закупок на весну 2025' },
      { type: 'email', date: '2024-10-10', text: 'Направлен аналитический отчёт по рынку удобрений' },
    ]},
    { id: uid(), name: 'Юлия Романова', phone: '+7 (906) 133-77-52', email: 'romanova.j@mail.ru', company: 'ИП Романова Ю.С.', city: 'Самара', status: 'active', notes: 'Дизайн-студия. Постоянные заказы на полиграфию.', createdAt: '2023-07-03', history: [
      { type: 'email', date: '2024-11-19', text: 'Заявка на тираж фирменных материалов' },
    ]},
    { id: uid(), name: 'Николай Орлов', phone: '+7 (912) 888-55-66', email: 'n.orlov@gmail.com', company: 'ООО «СибирьЛес»', city: 'Красноярск', status: 'potential', notes: 'Лесозаготовительная компания. Первый контакт через сайт.', createdAt: '2024-10-12', history: [] },
    { id: uid(), name: 'Светлана Миронова', phone: '+7 (903) 211-99-30', email: 's.mironova@yandex.ru', company: 'ООО «НордФуд»', city: 'Мурманск', status: 'active', notes: 'Производство замороженных продуктов. Партнёры по логистике.', createdAt: '2023-01-25', history: [
      { type: 'meeting', date: '2024-11-04', text: 'Совместное обсуждение логистики нового сезона' },
      { type: 'call', date: '2024-10-20', text: 'Уточнение сроков поставок на ноябрь' },
    ]},
    { id: uid(), name: 'Артём Белов', phone: '+7 (975) 666-22-11', email: 'artem.belov@mail.ru', company: 'ООО «КлаудТех»', city: 'Москва', status: 'active', notes: 'Стартап в сфере облачных технологий. Растущий клиент.', createdAt: '2024-04-30', history: [
      { type: 'call', date: '2024-11-21', text: 'Обсуждение расширения пакета услуг' },
      { type: 'email', date: '2024-11-07', text: 'Счёт на оплату абонентского обслуживания за ноябрь' },
    ]},
  ];

  // Генерируем сделки на основе клиентов
  const buildDeals = (clients) => {
    const cl = clients;
    return [
      { id: uid(), title: 'Поставка офисной мебели', clientId: cl[0]?.id, clientName: cl[0]?.name, amount: 320000, status: 'working', priority: 'high', deadline: '2024-12-15', tags: ['мебель', 'офис'], notes: 'Поставка 30 рабочих мест, переговорная комната', createdAt: '2024-10-01' },
      { id: uid(), title: 'Разработка корпоративного сайта', clientId: cl[6]?.id, clientName: cl[6]?.name, amount: 180000, status: 'review', priority: 'medium', deadline: '2024-12-20', tags: ['веб', 'разработка'], notes: 'Сайт на React, CMS на базе Strapi', createdAt: '2024-09-15' },
      { id: uid(), title: 'Абонентское IT-обслуживание', clientId: cl[14]?.id, clientName: cl[14]?.name, amount: 75000, status: 'won', priority: 'low', deadline: '2024-11-30', tags: ['IT', 'абонент'], notes: 'Ежемесячное обслуживание на 12 месяцев', createdAt: '2024-08-01' },
      { id: uid(), title: 'Поставка медицинского оборудования', clientId: cl[3]?.id, clientName: cl[3]?.name, amount: 490000, status: 'working', priority: 'high', deadline: '2025-01-20', tags: ['медтех'], notes: 'УЗИ-аппараты и расходники', createdAt: '2024-11-01' },
      { id: uid(), title: 'Автоматизация складского учёта', clientId: cl[9]?.id, clientName: cl[9]?.name, amount: 210000, status: 'new', priority: 'medium', deadline: '2025-02-10', tags: ['автоматизация', 'ритейл'], notes: 'Внедрение WMS-системы', createdAt: '2024-11-15' },
      { id: uid(), title: 'Разработка CRM-модуля', clientId: cl[6]?.id, clientName: cl[6]?.name, amount: 145000, status: 'new', priority: 'medium', deadline: '2025-01-15', tags: ['CRM', 'разработка'], notes: 'Интеграция с 1С', createdAt: '2024-11-10' },
      { id: uid(), title: 'Металлоконструкции для склада', clientId: cl[8]?.id, clientName: cl[8]?.name, amount: 430000, status: 'review', priority: 'high', deadline: '2024-12-30', tags: ['металл', 'строй'], notes: 'Стеллажная система 1200 кв.м.', createdAt: '2024-10-20' },
      { id: uid(), title: 'Полиграфия для выставки', clientId: cl[11]?.id, clientName: cl[11]?.name, amount: 58000, status: 'won', priority: 'low', deadline: '2024-11-25', tags: ['полиграфия'], notes: 'Баннеры, буклеты, визитки', createdAt: '2024-11-05' },
      { id: uid(), title: 'Логистика сезонных грузов', clientId: cl[13]?.id, clientName: cl[13]?.name, amount: 165000, status: 'working', priority: 'medium', deadline: '2024-12-10', tags: ['логистика'], notes: 'Маршруты Мурманск—Москва', createdAt: '2024-10-28' },
      { id: uid(), title: 'Агро-удобрения весенний сезон', clientId: cl[10]?.id, clientName: cl[10]?.name, amount: 380000, status: 'new', priority: 'high', deadline: '2025-03-01', tags: ['агро', 'сезон'], notes: 'Комплекс минеральных удобрений', createdAt: '2024-11-18' },
      { id: uid(), title: 'Облачная инфраструктура', clientId: cl[14]?.id, clientName: cl[14]?.name, amount: 95000, status: 'lost', priority: 'low', deadline: '2024-10-31', tags: ['облако', 'IT'], notes: 'Проигран в пользу конкурента', createdAt: '2024-09-01' },
      { id: uid(), title: 'Поставка кофейного оборудования', clientId: cl[1]?.id, clientName: cl[1]?.name, amount: 260000, status: 'working', priority: 'medium', deadline: '2024-12-05', tags: ['кофе', 'оборудование'], notes: 'Кофемашины для 5 новых точек', createdAt: '2024-11-02' },
    ];
  };

  // Генерируем задачи
  const buildTasks = (clients, deals) => {
    const now = new Date();
    const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x.toISOString().slice(0,10); };
    return [
      { id: uid(), title: 'Отправить КП по поставке мебели', clientId: clients[0]?.id, clientName: clients[0]?.name, dealId: deals[0]?.id, dealName: deals[0]?.title, priority: 'high', deadline: addDays(now, 1), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Согласовать договор с МедТех Групп', clientId: clients[3]?.id, clientName: clients[3]?.name, dealId: deals[3]?.id, dealName: deals[3]?.title, priority: 'high', deadline: addDays(now, 0), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Провести демонстрацию WMS для СитиМаркет', clientId: clients[9]?.id, clientName: clients[9]?.name, priority: 'medium', deadline: addDays(now, 3), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Выставить счёт — абонент КлаудТех', clientId: clients[14]?.id, clientName: clients[14]?.name, dealId: deals[2]?.id, dealName: deals[2]?.title, priority: 'medium', deadline: addDays(now, 0), done: true, createdAt: now.toISOString() },
      { id: uid(), title: 'Обзвон потенциальных клиентов по базе', priority: 'low', deadline: addDays(now, 5), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Обновить ценовое предложение для АгроПром', clientId: clients[10]?.id, clientName: clients[10]?.name, dealId: deals[9]?.id, dealName: deals[9]?.title, priority: 'high', deadline: addDays(now, 2), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Согласовать макеты полиграфии', clientId: clients[11]?.id, clientName: clients[11]?.name, priority: 'low', deadline: addDays(now, -1), done: true, createdAt: now.toISOString() },
      { id: uid(), title: 'Встреча с командой по проекту ДигиталСофт', clientId: clients[6]?.id, clientName: clients[6]?.name, priority: 'medium', deadline: addDays(now, 4), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Проверить отгрузку металлоконструкций', clientId: clients[8]?.id, clientName: clients[8]?.name, dealId: deals[6]?.id, dealName: deals[6]?.title, priority: 'high', deadline: addDays(now, 1), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Подписать акт выполненных работ — полиграфия', clientId: clients[11]?.id, clientName: clients[11]?.name, priority: 'medium', deadline: addDays(now, 6), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Уточнить сроки поставки НордФуд', clientId: clients[13]?.id, clientName: clients[13]?.name, priority: 'medium', deadline: addDays(now, 2), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Подготовить квартальный отчёт', priority: 'low', deadline: addDays(now, 10), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Написать follow-up Николаю Орлову (СибирьЛес)', clientId: clients[12]?.id, clientName: clients[12]?.name, priority: 'medium', deadline: addDays(now, 3), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Обновить CRM после встречи с АльфаСтрой', clientId: clients[0]?.id, clientName: clients[0]?.name, priority: 'low', deadline: addDays(now, 7), done: true, createdAt: now.toISOString() },
      { id: uid(), title: 'Отправить договор на оказание услуг — КлаудТех', clientId: clients[14]?.id, clientName: clients[14]?.name, priority: 'high', deadline: addDays(now, 0), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Согласовать ТЗ на разработку сайта', clientId: clients[6]?.id, clientName: clients[6]?.name, dealId: deals[1]?.id, dealName: deals[1]?.title, priority: 'high', deadline: addDays(now, 1), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Подготовить сравнительную таблицу конкурентов', priority: 'low', deadline: addDays(now, 14), done: false, createdAt: now.toISOString() },
      { id: uid(), title: 'Позвонить Сергею Николаеву (Екатеринбург)', clientId: clients[4]?.id, clientName: clients[4]?.name, priority: 'medium', deadline: addDays(now, 2), done: false, createdAt: now.toISOString() },
    ];
  };

  // Активности для дашборда
  const demoActivities = [
    { id: uid(), type: 'call', text: '<strong>Алексей Морозов</strong> — звонок по вопросу поставки мебели', time: '10 минут назад' },
    { id: uid(), type: 'deal', text: 'Сделка <strong>«Полиграфия для выставки»</strong> переведена в «Закрыта (выиграна)»', time: '1 час назад' },
    { id: uid(), type: 'meeting', text: '<strong>Ольга Петрова</strong> — встреча в Казани подтверждена', time: '3 часа назад' },
    { id: uid(), type: 'email', text: 'Отправлено КП на <strong>«Металлоконструкции для склада»</strong>', time: '5 часов назад' },
    { id: uid(), type: 'task', text: 'Задача <strong>«Выставить счёт КлаудТех»</strong> выполнена', time: 'вчера' },
    { id: uid(), type: 'deal', text: 'Новая сделка <strong>«Агро-удобрения весенний сезон»</strong> добавлена', time: 'вчера' },
    { id: uid(), type: 'call', text: '<strong>Артём Белов</strong> — входящий звонок о расширении пакета услуг', time: '2 дня назад' },
  ];

  // ============ ПУБЛИЧНОЕ API ============

  return {
    uid,

    init() {
      if (localStorage.getItem(KEYS.initialized)) return;
      const clients = demoClients;
      set(KEYS.clients, clients);
      const deals = buildDeals(clients);
      set(KEYS.deals, deals);
      const tasks = buildTasks(clients, deals);
      set(KEYS.tasks, tasks);
      set(KEYS.activities, demoActivities);
      localStorage.setItem(KEYS.initialized, '1');
    },

    // Clients
    getClients: () => get(KEYS.clients),
    saveClients: (arr) => set(KEYS.clients, arr),
    addClient(c) { const arr = get(KEYS.clients); arr.unshift({ ...c, id: uid(), createdAt: new Date().toISOString().slice(0,10), history: [] }); set(KEYS.clients, arr); },
    updateClient(id, data) { const arr = get(KEYS.clients).map(c => c.id === id ? { ...c, ...data } : c); set(KEYS.clients, arr); },
    deleteClient(id) { set(KEYS.clients, get(KEYS.clients).filter(c => c.id !== id)); },
    getClient: (id) => get(KEYS.clients).find(c => c.id === id),
    addHistory(clientId, entry) {
      const arr = get(KEYS.clients).map(c => c.id === clientId ? { ...c, history: [entry, ...(c.history||[])] } : c);
      set(KEYS.clients, arr);
    },

    // Deals
    getDeals: () => get(KEYS.deals),
    addDeal(d) { const arr = get(KEYS.deals); arr.unshift({ ...d, id: uid(), createdAt: new Date().toISOString().slice(0,10) }); set(KEYS.deals, arr); },
    updateDeal(id, data) { const arr = get(KEYS.deals).map(d => d.id === id ? { ...d, ...data } : d); set(KEYS.deals, arr); },
    deleteDeal(id) { set(KEYS.deals, get(KEYS.deals).filter(d => d.id !== id)); },

    // Tasks
    getTasks: () => get(KEYS.tasks),
    addTask(t) { const arr = get(KEYS.tasks); arr.unshift({ ...t, id: uid(), createdAt: new Date().toISOString() }); set(KEYS.tasks, arr); },
    updateTask(id, data) { const arr = get(KEYS.tasks).map(t => t.id === id ? { ...t, ...data } : t); set(KEYS.tasks, arr); },
    deleteTask(id) { set(KEYS.tasks, get(KEYS.tasks).filter(t => t.id !== id)); },
    toggleTask(id) {
      const arr = get(KEYS.tasks).map(t => t.id === id ? { ...t, done: !t.done } : t);
      set(KEYS.tasks, arr);
    },

    // Activities
    getActivities: () => get(KEYS.activities),
    addActivity(a) { const arr = get(KEYS.activities); arr.unshift({ ...a, id: uid() }); if (arr.length > 50) arr.splice(50); set(KEYS.activities, arr); },

    // Settings
    getSettings: () => getObj(KEYS.settings),
    setSetting(k, v) { const s = getObj(KEYS.settings); s[k] = v; localStorage.setItem(KEYS.settings, JSON.stringify(s)); },

    // Export / Import
    exportJSON() {
      return JSON.stringify({
        clients: get(KEYS.clients),
        deals: get(KEYS.deals),
        tasks: get(KEYS.tasks),
        activities: get(KEYS.activities),
        exportedAt: new Date().toISOString(),
      }, null, 2);
    },
    importJSON(json) {
      const data = JSON.parse(json);
      if (data.clients) set(KEYS.clients, data.clients);
      if (data.deals) set(KEYS.deals, data.deals);
      if (data.tasks) set(KEYS.tasks, data.tasks);
      if (data.activities) set(KEYS.activities, data.activities);
    },

    // CSV export clients
    exportCSV() {
      const clients = get(KEYS.clients);
      const header = ['Имя', 'Компания', 'Телефон', 'Email', 'Город', 'Статус', 'Заметки', 'Создан'];
      const rows = clients.map(c => [
        c.name, c.company, c.phone, c.email, c.city,
        { active: 'Активный', potential: 'Потенциальный', archive: 'Архив' }[c.status] || c.status,
        (c.notes || '').replace(/,/g, ';'), c.createdAt,
      ]);
      return [header, ...rows].map(r => r.map(v => `"${v || ''}"`).join(',')).join('\n');
    },

    // Аналитика — выручка по месяцам (фейковая)
    getMonthlyRevenue() {
      const months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
      // Реальные данные из закрытых сделок + синтетика
      const base = [210,185,310,270,340,390,310,420,480,510,490,385];
      return { labels: months, values: base };
    },

    // Топ клиентов по сумме сделок
    getTopClients(n = 5) {
      const clients = get(KEYS.clients);
      const deals = get(KEYS.deals);
      const map = {};
      deals.forEach(d => {
        if (!d.clientId) return;
        map[d.clientId] = (map[d.clientId] || 0) + (d.amount || 0);
      });
      return Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map(([id, amount]) => ({ name: clients.find(c => c.id === id)?.name || '—', amount }));
    },
  };
})();
