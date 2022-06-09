const todoUl = document.querySelector("ul.todo-list"),
  todoInput = document.querySelector("input.todo-input"),
  todoForm = document.querySelector("form");
const TODOS_LOCAL_STORAGE = "TODOS_LOCAL_STORAGE";

let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(todos));
};

const handleRemoveBtn = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;
  todos = todos.filter((todo) => todo.index !== parseInt(li.dataset.index));

  todoUl.removeChild(li);
  saveTodos();
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

const getMaxIndex = async () => {
  let max = 0;
  await Promise.all(
    todos.map((todo) => {
      max = max > todo.index ? max : todo.index + 1;
    })
  );
  return max;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const content = todoInput.value;
  const newTodo = {
    index: await getMaxIndex(),
    content,
    checked: false,
    createdAt: new Date(),
  };
  todos.push(newTodo);
  todoInput.value = "";

  todoUl.appendChild(makeTodo(newTodo));
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
  deleteBtn.addEventListener("click", handleRemoveBtn);

  li.append(checkBtn);
  li.append(content);
  li.append(deleteBtn);
  return li;
};

const draw = () => {
  todos.forEach((todo) => todoUl.appendChild(makeTodo(todo)));
};

const loadTodos = () => {
  todos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE)) || [];
};

const init = () => {
  loadTodos();
  draw();
  todoForm.addEventListener("submit", handleSubmit);
};

init();
