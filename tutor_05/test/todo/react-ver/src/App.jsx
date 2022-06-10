import { useState, useEffect } from "react";
import styled from "styled-components";
import Todo from "./todo";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos") || [
      { index: 1, content: "인사하기", checked: false, createdAt: new Date() },
      { index: 2, content: "인사하기", checked: false, createdAt: new Date() },
      { index: 3, content: "인사하기", checked: false, createdAt: new Date() },
    ]
  );
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setTodoValue(e.target.value);
  };

  return (
    <Container>
      <h2>todoList</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
        <input type="text" onChange={handleInputChange} />
      </form>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
