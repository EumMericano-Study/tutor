const todos_ul = document.querySelector(".todo-list");
const TODOS_LOCAL_STORAGE = "TODOS_LOCAL_STORAGE";

let todos = [
  { index: 1, content: "코딩", checked: false, createdAt: new Date() },
  { index: 2, content: "아이디어 기획", checked: false, createdAt: new Date() },
  { index: 3, content: "손 씻기", checked: false, createdAt: new Date() },
];

const saveTodos = () => {
  // TODO
  // Localstrage에 저장
};

const handleCheckBtn = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;

  const checkedTodo = todos.find(
    (todo) => todo.index === parseInt(li.dataset.index)
  );
  checkedTodo.checked = !checkedTodo.checked;

  if (checkedTodo.checked) li.classList.add("checked");
  else li.classList.remove("checked");
  saveTodos();
};

const makeTodo = (todo) => {
  const checked = todo.checked;
  const li = document.createElement("li");
  li.className = "todo-thing";
  li.dataset.index = todo.index;
  if (checked) li.classList.add(`checked`);

  const content = document.createElement("h2");
  content.innerText = todo.content;
  content.classList = "content";

  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✔";
  checkBtn.classList = "check";
  checkBtn.addEventListener("click", handleCheckBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.classList = "remove";

  li.append(checkBtn);
  li.append(content);
  li.append(deleteBtn);
  return li;
};

const draw = () => {
  todos.forEach((todo) => todos_ul.appendChild(makeTodo(todo)));
};

const checkTodo = () => {
  return localStorage.getItem(TODOS_LOCAL_STORAGE) || [];
};

const init = () => {
  checkTodo();
  draw();
};

init();
