// 待辦清單資料儲存在瀏覽器的 localStorage。
const STORAGE_KEY = 'd11516131-todo-items';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const remainingCount = document.getElementById('remaining-count');

let todos = loadTodos();

// 讀取本機資料；資料不存在或格式錯誤時以空清單開始。
function loadTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((todo) =>
      todo && typeof todo.id === 'string' &&
      typeof todo.text === 'string' &&
      typeof todo.completed === 'boolean'
    );
  } catch (error) {
    console.warn('讀取待辦清單失敗，將以空清單開始。', error);
    return [];
  }
}

// 將目前清單寫回本機儲存空間。
function saveTodos() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.warn('儲存待辦清單失敗。', error);
  }
}

// 依照目前資料更新清單、空狀態與未完成數量。
function render() {
  list.replaceChildren();

  todos.forEach((todo) => {
    const item = document.createElement('li');
    item.className = todo.completed ? 'todo-item completed' : 'todo-item';
    item.dataset.id = todo.id;

    const checkbox = document.createElement('input');
    checkbox.className = 'todo-checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.setAttribute('aria-label', `標記「${todo.text}」為完成`);

    const text = document.createElement('span');
    text.className = 'todo-text';
    text.textContent = todo.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn-delete';
    deleteButton.type = 'button';
    deleteButton.textContent = '×';
    deleteButton.setAttribute('aria-label', `刪除「${todo.text}」`);

    item.append(checkbox, text, deleteButton);
    list.append(item);
  });

  emptyState.hidden = todos.length > 0;
  const remaining = todos.filter((todo) => !todo.completed).length;
  remainingCount.textContent = `未完成:${remaining} 項`;
}

// 產生每筆待辦事項使用的唯一識別碼。
function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  todos.push({ id: createId(), text, completed: false });
  saveTodos();
  render();
  form.reset();
  input.focus();
});

// 以事件委派處理勾選與刪除。
list.addEventListener('click', (event) => {
  const item = event.target.closest('.todo-item');
  if (!item) return;

  const todo = todos.find((entry) => entry.id === item.dataset.id);
  if (!todo) return;

  if (event.target.matches('.todo-checkbox')) {
    todo.completed = event.target.checked;
  } else if (event.target.matches('.btn-delete')) {
    todos = todos.filter((entry) => entry.id !== todo.id);
  } else {
    return;
  }

  saveTodos();
  render();
});

render();