import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --branco: #FFFFFF;
    --acessibilidade: #64CF60;
    --verdesecundaria: #6EF269;
    --azulprimaria: #003B63;
    --azul: #081150;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "UniNeue", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 700px) {
      font-size: 87.5%;
    }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  a{
    color:inherit;
    text-decoration:none;
    
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
