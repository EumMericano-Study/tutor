import styled from "styled-components";

const Todo = ({ todo, todos, setTodos }) => {
  const handleCheck = (e) => {
    const newTodos = todos.map((item) => {
      if (item.index === todo.index) return { ...item, checked: !item.checked };
      return item;
    });
    setTodos(newTodos);
  };

  const handleRemove = () => {
    setTodos(todos.filter((item) => item.index !== todo.index));
  };
  return (
    <Container checked={todo.checked}>
      <button onClick={handleCheck}>✔</button>
      <h2>{todo.content}</h2>
      <button onClick={handleRemove}>🍎</button>
    </Container>
  );
};

export default Todo;

const Container = styled.li`
  width: 100%;
  height: 100%;

  background-color: ${(props) => (props.checked ? "gray" : "white")};
  border: 1px solid green;
`;
