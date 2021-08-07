const section = document.querySelector("section");
const ul = section.querySelector("ul");

function handleInput() {
  const input = section.querySelector(".textInput");
  handleSubmit(input.value);
}

function handleSubmit(text) {
  for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
  }
}
