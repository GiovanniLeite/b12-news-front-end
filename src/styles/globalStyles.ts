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
      font-family: 'Open Sans', sans-serif;
      font-size: ${theme.font.sizes.medium};
    }

    main {
      width: 100%;
      background-color: ${theme.colors.background};

      @media only screen and (max-width: 768px) {
        padding-top: 7.8rem;
      }

      // Footer bottom
      min-height: calc(100vh - 392px);
    }

    .mainSection {
      max-width: 120rem;
      margin: 0 auto;
      padding: ${theme.spacings.large} ${theme.spacings.small};

      @media only screen and (max-width: 1000px) {
        padding: ${theme.spacings.small};
      }
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
      width: 100%;
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.darkBlue};
        border-color: ${theme.colors.darkBlue};
      }
    }

    .buttonLoadMore {
      padding: 1.5rem;
      border-radius: 3px;
      font-weight: bold;
    }

    .buttonForm {
      padding: ${theme.spacings.small};
    }
  `}
`;
