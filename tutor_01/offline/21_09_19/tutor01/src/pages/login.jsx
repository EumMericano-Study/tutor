import React from "react";
import styled from "styled-components";

class Login extends React.Component {
  state = {
    id: "",
    password: "",
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "id") this.setState({ id: value });
    if (name === "password") this.setState({ password: value });
  };

  handleSubmit = () => {
    const { id, password } = this.state;
    if (id === "opwer032" && password === "password") {
      window.location.href = "/home";
    }
  };

  render() {
    return (
      <Container>
        <LoginBox>
          <Title>로그인</Title>
          <InputContainer>
            <Input
              type="text"
              placeholder="ID"
              name="id"
              value={this.state.id}
              onChange={this.handleInput}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <CheckContainer>
              <CheckBox type="checkbox" />
              <h2>로그인 상태 유지</h2>
            </CheckContainer>
          </InputContainer>
          <Button onClick={this.handleSubmit}>Login</Button>
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
`;

const LoginBox = styled.div`
  width: 30%;
  height: 70%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  padding: 4em 3em;
  border: 2px solid red;
`;

const Title = styled.h2`
  font-family: "Black Han Sans", sans-serif;
  font-size: 3rem;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 2em;

  font-size: 2rem;

  background-color: rgba(0, 0, 0, 0.1);

  transition: all 0.2s;

  padding-left: 0.3em;
  margin-bottom: 0.5em;
  border: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  :focus {
    background-color: transparent;
    border: 2px solid black;
  }
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  width: 2em;
  height: 2em;

  margin-right: 0.7em;

  transition: all 0.2s;
  border: none;
`;

const Button = styled.button`
  width: 5em;
  height: 5em;

  border-radius: 1em;
`;
