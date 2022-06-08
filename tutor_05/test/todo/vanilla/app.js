const todos_ul = document.querySelector(".todo-list");
const TODOS_LOCAL_STORAGE = "TODOS_LOCAL_STORAGE";

let todos = [
  { index: 1, content: "코딩", checked: false, createdAt: new Date() },
  { index: 2, content: "아이디어 기획", checked: false, createdAt: new Date() },
  { index: 3, content: "손 씻기", checked: false, createdAt: new Date() },
];

const draw = () => {
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-thing";
    li.dataset.index = todo.index;

    const content = document.createElement("h2");
    content.innerText = todo.content;

    li.appendChild(content);
    todos_ul.appendChild(li);
  });
};

const checkTodo = () => {
  return localStorage.getItem(TODOS_LOCAL_STORAGE) || [];
};

const init = () => {
  checkTodo();
  draw();
};

init();
