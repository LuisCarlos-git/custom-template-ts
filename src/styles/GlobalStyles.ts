import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;

    &::after,&::before {
      box-sizing: inherit;
    }
  }

  html {
      font-size: 62.5%;
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.6rem;
      
      }
`;
