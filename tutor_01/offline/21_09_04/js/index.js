const InputEl = document.querySelector("#todo-input");
const ulEl = document.querySelector(".todo_list");

let currentId = 0;

function onSubmit() {
  const inputValue = InputEl.value;
  if (inputValue === "") return;
  InputEl.value = "";

  const liEl = document.createElement("li");
  liEl.innerHTML = inputValue;
  liEl.dataset.seung = currentId;
  currentId += 1;

  const deleteButtonEl = document.createElement("button");
  deleteButtonEl.innerHTML = "🙌";
  deleteButtonEl.onclick = yeop;
  liEl.appendChild(deleteButtonEl);

  ulEl.appendChild(liEl);
}

function yeop(event) {
  const target = event.target;
  const liEl = target.parentNode;
  const ulEl = liEl.parentNode;

  ulEl.removeChild(liEl);
}
