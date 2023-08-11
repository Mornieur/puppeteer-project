import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;

  }

  img {
    image-rendering: auto;
  }

  body {
    width:100%;
    height:100%;
    scrollbar-width: thin;
  }

  html {
    @media (min-width: 1600px){
      font-size: 18px;
    }
    @media (min-width:600px){
      font-size:16px;
    }
    @media (max-height:720px){
      font-size:14px;
    }
    @media (max-width:480px){
      font-size:14px;
    }

  }

  li, ul {
    list-style: none;
  }

  button {
    cursor:pointer;
  }

  p, span, label {
    font-weight: var(--medium);
  }

  h1, h2 {
    font-weight: var(--bold);
    font-family: var(--titillium);
  }

  h3, h4, h5 {
    font-weight: var(--semibold);
    font-family: var(--titillium);
    color: var(--grey-700)
  }

  h1{
    color: var(--blue-dark-title)
  }

  h2{
    color: var(--blue-dark)
  }

  scroll-behavior: smooth;
  overflow-x: hidden;

  :root {


    // FONTS
    --montserrat: 'Montserrat', sans-serif;
    --titillium: 'Titillium Web', sans-serif;

    // FONTS WEIGHT 
    --light: 300;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;

    // FONTS
    --montserrat: 'Montserrat', sans-serif;
    --titillium: 'Titillium Web', sans-serif;

    // FONTS WEIGHT 
    --light: 300;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;

    
    --default-box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
    --radius: 5px;

    //GREEN COLORS
    ---primary-darkest: #1a8870;
    ---primary-light: #29d5b0;

    // BLACK COLORS
    --gray-800: #444950;
    --gray-900: #1c1e21;
  }
`;
