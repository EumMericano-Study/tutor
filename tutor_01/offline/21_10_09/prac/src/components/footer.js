import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      ㈜인서타그램 &nbsp;이용약관 &nbsp;개인정보처리방침 &nbsp;페이스북연결
      &nbsp;계정찾기 &nbsp;비밀번호찾기
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
