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
            <input
              type="text"
              placeholder="id를 입력해주세요"
              name="id"
              value={this.state.id}
              onChange={this.handleInput}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <CheckContainer>
              <input type="checkbox" />
              <h4>로그인 상태 유지</h4>
            </CheckContainer>
          </InputContainer>
          <button onClick={this.handleSubmit}>-)</button>
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

  padding: 4em 3em;
  border: 2px solid red;
`;

const Title = styled.h2`
  font-family: "Black Han Sans", sans-serif;
  font-size: 3rem;
  text-align: center;

  margin-bottom: 1em;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckContainer = styled.div`
  display: flex;
`;
