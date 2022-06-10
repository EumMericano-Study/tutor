import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Todo from "./todo";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos") || [
      { index: 1, content: "인사하기", checked: false, createdAt: new Date() },
      { index: 2, content: "손씻기", checked: false, createdAt: new Date() },
      { index: 3, content: "코딩하기", checked: false, createdAt: new Date() },
    ]
  );
  const [todoValue, setTodoValue] = useState("");
  const maxIndex = useRef(0);

  const getMaxIndex = async () => {
    maxIndex.current = 0;
    await Promise.all(
      todos.map((todo) => {
        maxIndex.current =
          maxIndex.current > todo.index ? maxIndex.current : todo.index + 1;
      })
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await getMaxIndex();
    console.log(maxIndex.current);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setTodoValue(e.target.value);
  };

  return (
    <Container>
      <h2>todoList</h2>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
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
