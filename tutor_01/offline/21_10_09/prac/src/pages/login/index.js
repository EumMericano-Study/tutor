import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <BlockAlign></BlockAlign>
      {/* <Block></Block>
      <Block></Block> */}
    </Container>
  );
}
export default Login;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockAlign = styled.div`
  width: 100%;
  max-width: 800px;
  height: 85%;

  display: flex;
  border: 1px solid red;
`;

const Block = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;
