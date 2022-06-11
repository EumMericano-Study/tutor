const todoUl = document.querySelector(".todo-list"),
  todoForm = document.querySelector("form"),
  todoInput = document.querySelector("input");

let todos = [];

const saveStorage = () => {
  localStorage.setItem("TODOS", JSON.stringify(todos));
};

const loadStorage = () => {
  todos = JSON.parse(localStorage.getItem("TODOS")) || [];
};

const findMaxIndex = () => {
  let max = 0;
  todos.forEach((todo) => {
    max = max <= todo.index ? todo.index + 1 : max;
  });

  return max;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const index = findMaxIndex();
  const content = todoInput.value;

  const newTodo = {
    index,
    content,
    checked: false,
    createdAt: new Date(),
  };

  todos.push(newTodo);
  saveStorage();
  makeLi(newTodo);

  todoInput.value = "";
};

const handleDelete = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;
  const index = li.dataset.index;

  const newTodos = todos.filter((todo) => todo.index !== parseInt(index));
  todos = newTodos;
  saveStorage();

  todoUl.removeChild(li);
};

const handleCheck = (event) => {
  event.preventDefault();
  const li = event.target.parentNode;
  const index = li.dataset.index;

  const newTodos = todos.map((todo) => {
    if (todo.index === parseInt(index)) {
      if (!todo.checked) li.classList.add("checked");
      else li.classList.remove("checked");
      return { ...todo, checked: !todo.checked };
    }
    return todo;
  });
  todos = newTodos;
  saveStorage();
};

const makeLi = (todo) => {
  const li = document.createElement("li");
  li.dataset.index = todo.index;
  li.classList.add("todo");

  if (todo.checked) li.classList.add("checked");

  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✔";
  checkBtn.addEventListener("click", handleCheck);

  const content = document.createElement("h2");
  content.innerText = todo.content;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "␡";
  deleteBtn.addEventListener("click", handleDelete);

  li.appendChild(checkBtn);
  li.appendChild(content);
  li.appendChild(deleteBtn);

  todoUl.appendChild(li);
};

const draw = () => todos.forEach((todo) => makeLi(todo));

const init = () => {
  loadStorage();
  draw();
  todoForm.addEventListener("submit", handleSubmit);
};

init();
