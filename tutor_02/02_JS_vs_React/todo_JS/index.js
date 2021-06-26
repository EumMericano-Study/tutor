let currentId = 1;
let todoList = [];
function onAdd() {
  const inputEl = document.querySelector(".desc");
  const todo = { id: currentId, desc: inputEl.value };
  todoList.push(todo);
  currentId += 1;
  inputEl.value = "";
  const elemList = document.querySelector(".list");
  const liEl = makeTodoElement(todo);
  elemList.appendChild(liEl);
}

function makeTodoElement(todo) {
  const liEl = document.createElement("li");
  const spanEl = document.createElement("span");
  const buttonEl = document.createElement("button");

  spanEl.innerHTML = todo.desc;
  buttonEl.innerHTML = "삭제 ❌";
  buttonEl.dataset.id = todo.id;
  buttonEl.onclick = onDelete;
  liEl.appendChild(spanEl);
  liEl.appendChild(buttonEl);

  return liEl;
}

function onDelete(event) {
  const id = Number(event.target.dataset.id);
  todoList = todoList.filter((elem) => {
    return elem.id !== id;
  });

  const elemList = document.querySelector(".list");
  const liEl = event.target.parentNode;
  elemList.removeChild(liEl);
}
