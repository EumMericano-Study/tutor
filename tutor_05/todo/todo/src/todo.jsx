import styled from "styled-components";

const Todo = ({ todo }) => {
  return (
    <Container>
      <button>🙇‍♂️</button>
      <h2>{todo.content}</h2>
    </Container>
  );
};

export default Todo;

const Container = styled.div``;
