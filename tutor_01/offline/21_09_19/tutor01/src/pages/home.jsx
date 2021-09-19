import React from "react";
import styled from "styled-components";

class Home extends React.Component {
  render() {
    return <Container>Hello Home page</Container>;
  }
}

export default Home;

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: red;
`;
