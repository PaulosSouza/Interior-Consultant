import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 10px;
    height: 100%;
    margin: 0;
  }

  *,
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background-color: ${props => props.theme.colors.background};
    font-size: 100%;
    color: #fff;
  }

  html,body, #root {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
