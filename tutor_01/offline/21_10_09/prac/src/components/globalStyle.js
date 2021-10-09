import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        min-height: 100vh;
        box-sizing: border-box;
        border: 3px solid red;
    }
`;

export default GlobalStyle;
