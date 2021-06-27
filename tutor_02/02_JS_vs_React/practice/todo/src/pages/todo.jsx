import React, { useState } from "react";
import styled from "styled-components";

function Todo() {
  const [todoList, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  function handleInputChange(event) {
    setText(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const newList = [...todoList, { index, desc: text }];
    setList(newList);
    setIndex(index + 1);
  };

  const HandleRemove = (event) => {
    const index = event.target.dataset.index;
    const newList = todoList.filter((todo) => todo.index !== Number(index));
    console.log(newList);
    setList(newList);
  };

  return (
    <Container>
      <h3>To do list</h3>
      <input type="text" onChange={handleInputChange} value={text} />
      <button onClick={onSubmit}>추가</button>
      {todoList.map((todo, index) => {
        return (
          <div key={index}>
            <span>{todo.desc}</span>
            <button onClick={HandleRemove} data-index={todo.index}>
              삭제 ❌
            </button>
          </div>
        );
      })}
    </Container>
  );
}

export default Todo;

const Container = styled.div`
  width: 50vw;
  height: 50vh;

  border: thin solid red;
  margin: auto;
`;
