import styled from "styled-components";

const Todo = ({ todo, todos, setTodos }) => {
  const handleCheck = (e) => {
    console.log(todo.index);
  };
  const handleRemove = () => {};

  return (
    <Container>
      <button onClick={handleCheck}>✔</button>
      <h2>{todo.content}</h2>
      <button>🍎</button>
    </Container>
  );
};

export default Todo;

const Container = styled.li`
  width: 100%;
  height: 100%;

  border: 1px solid green;
`;
