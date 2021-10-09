import React from "react";
import styled from "styled-components";

function Header() {
    return <Container>나만의 사전</Container>;
}

export default Header;

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Black Han Sans", sans-serif;
    font-size: 2rem;

    padding: 1em 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;
