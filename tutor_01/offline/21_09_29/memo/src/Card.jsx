import React from "react";
import styled from "styled-components";

function Card(props) {
    const { children } = props;
    return <Container>{children}</Container>;
}

export default Card;

const Container = styled.div`
    width: 80%;
    height: 5em;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    padding: 2em;
    margin: 2em;
    border: 2px solid pink;
    border-radius: 2em;
`;
