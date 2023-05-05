import { createGlobalStyle, css } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: 'Raleway', sans-serif;
      font-size: ${theme.font.sizes.medium};
    }

    a {
      text-decoration: none;
    }
  `}
`;
