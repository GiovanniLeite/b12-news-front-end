import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    background-color: #eee;

    section {
      max-width: 120rem;
      margin: 0 auto;
      padding: 30px ${theme.spacings.small} ${theme.spacings.extraLarge}
        ${theme.spacings.small};

      @media only screen and (max-width: 600px) {
        padding-top: 95px;
      }

      div#profileContent {
        overflow: hidden;
        padding-bottom: 5px;

        div#profile {
          width: 320px;
          margin: 0 auto;

          background-color: #fff;
          padding: ${theme.spacings.small};
          text-align: center;
          border-top: 10px solid ${theme.colors.darkBlue};
          box-shadow: 0 0 10px #333;
          color: #333;

          h2 {
            padding-top: ${theme.spacings.medium};
            padding-bottom: ${theme.spacings.large};
          }

          input {
            width: 100%;
            padding: ${theme.spacings.small};
            display: block;
            margin-bottom: ${theme.spacings.small};
            text-align: center;
            background-color: ${theme.colors.lightGray};
            border: none;

            &:hover {
              outline: none;
            }
          }

          button {
            cursor: pointer;
            background-color: ${theme.colors.darkBlue};
            padding: 10px;
            color: #fff;
            border: none;
            margin: 0 auto;
            width: 100%;

            &:hover {
              opacity: 0.9;
            }
          }
        }
      }
    }
  `}
`;
