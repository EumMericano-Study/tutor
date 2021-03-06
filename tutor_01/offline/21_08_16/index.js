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
  const ulTag = document.querySelector(".list");
  const liTag = document.createElement("li");

  liTag.innerText = text;
  ulTag.appendChild(liTag);
}
