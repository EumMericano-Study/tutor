import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Card from "./Card";

function Home() {
    const [dicList, setDicList] = React.useState([
        {
            title: "안녕",
            desc: "인사하는 말",
            time: new Date(),
        },
        {
            title: "hello",
            desc: "인사하는 말",
            time: new Date(),
        },
        {
            title: "ni hao",
            desc: "인사하는 말",
            time: new Date(),
        },
    ]);
    return (
        <Container>
            <Header />
            <CardContainer>
                {dicList.map((dic, index) => {
                    return (
                        <Card key={index}>
                            {dic.title} {dic.desc}
                        </Card>
                    );
                })}
            </CardContainer>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`;
