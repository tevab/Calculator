import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Ubuntu', Arial;
    background-color: #d8daea;
    @media only screen and (max-width: 450px) {
      background-color: #cfe2f3;
    }
  }
`;
 
export default GlobalStyle;