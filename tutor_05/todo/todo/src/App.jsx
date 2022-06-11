import { useState } from "react";
import styled from "styled-components";
import Todo from "./todo";

function App() {
  const [todos, setTodo] = useState([
    { index: 0, content: "손 씻기", checked: false, createAt: new Date() },
    { index: 1, content: "코딩 하기", checked: false, createAt: new Date() },
    { index: 2, content: "잠 자기", checked: false, createAt: new Date() },
  ]);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.index} todo={todo} />
      ))}
    </div>
  );
}

export default App;

const Container = styled.div``;
