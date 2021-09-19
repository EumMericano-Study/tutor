import React from "react";
import styled from "styled-components";

class Login extends React.Component {
  render() {
    return (
      <Container>
        <LoginBox>
          <Title>로그인</Title>
          <InputContainer>
            <input type="text" />
            <input type="text" />
            <CheckContainer>
              <input type="checkbox" />
              <h4>로그인 상태 유지</h4>
            </CheckContainer>
          </InputContainer>
          <button>-)</button>
        </LoginBox>
      </Container>
    );
  }
}
export default Login;

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 5px solid blue;
`;

const LoginBox = styled.div`
  width: 30%;
  height: 70%;

  padding: 4em 3em;
  border: 2px solid red;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2em;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckContainer = styled.div`
  display: flex;
`;
