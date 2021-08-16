function handleKeyPress(e) {
  if (e.keyCode === 13) handleClick();
}

function handleClick() {
  const inputEl = document.querySelector(".input-container input");
  if (inputEl.value === "") return;
  makeTodo(inputEl.value);
  inputEl.value = "";
}

function makeTodo(text) {
  const ulEl = document.querySelector(".list");
  const liEl = document.createElement("li");

  liEl.innerText = text;
  ulEl.appendChild(liEl);
}
