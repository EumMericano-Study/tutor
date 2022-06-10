import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Todo from "./todo";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [inputValue, setInputValue] = useState("");
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
    const newTodo = {
      index: maxIndex.current,
      content: inputValue,
      checked: false,
      createdAt: new Date(),
    };
    setInputValue("");
    setTodos([...todos, newTodo]);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
        <input type="text" onChange={handleInputChange} value={inputValue} />
      </form>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
