import React, { useState } from "react";
import styled from "styled-components";

import phone from "assets/phone.png";

function Login() {
  const [id, setId] = useState("");
  const [passowrd, setPassword] = useState("");

  function handleInput(event) {
    const { name, value } = event.target;
    if (name === "id") setId(value);
    if (name === "password") setPassword(value);
  }

  return (
    <Container>
      <BlockAlign>
        <Block>
          <Img src={phone} />
        </Block>
        <Block>
          <LoginContainer>
            <AuthContainer>
              <Title>Insutagram</Title>
              <Input
                placeholder="id"
                name="id"
                value={id}
                onChange={handleInput}
              />
              <Input
                placeholder="password"
                name="password"
                type="password"
                value={passowrd}
                onChange={handleInput}
              />
              <Button>로그인</Button>
            </AuthContainer>
          </LoginContainer>
        </Block>
      </BlockAlign>
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
`;

const Block = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  padding: 0 10px;
  :nth-child(2) {
    justify-content: flex-start;
  }
`;

const LoginContainer = styled.div`
  width: 80%;
  max-width: 400px;
  height: 90%;

  display: flex;
  justify-content: center;

  border: 1px solid red;
`;

const Img = styled.img`
  height: 90%;
`;

const AuthContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
`;

const Title = styled.h1`
  font-size: 30px;

  margin: 30px 0;
`;

const Input = styled.input`
  width: 80%;
  height: 2rem;

  background-color: rgb(200, 200, 200);
  box-sizing: border-box;

  padding: 0 7px;
  margin-bottom: 7px;
  border: none;
`;

const Button = styled.button`
  width: 80%;
  height: 1.75rem;
  padding: 0;
  border: none;
`;
