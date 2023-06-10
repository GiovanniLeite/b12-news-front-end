import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.background};

    @media only screen and (max-width: 768px) {
      padding-top: 100px;
    }

    @media only screen and (max-width: 600px) {
      padding-top: 0;
    }

    @media only screen and (max-width: 460px) {
      padding-top: 45px;
    }

    section {
      max-width: 120rem;
      margin: 0 auto;
      padding: 30px ${theme.spacings.small} ${theme.spacings.extraLarge};

      @media only screen and (max-width: 600px) {
        padding-top: 95px;
      }

      #profileContent {
        overflow: hidden;
        padding-bottom: 5px;

        form {
          width: 320px;
          margin: 0 auto;
          padding: ${theme.spacings.small};
          background-color: #fff;
          border-top: 10px solid ${theme.colors.darkBlue};
          box-shadow: 0 0 10px ${theme.colors.primary};
          color: ${theme.colors.primary};
          text-align: center;

          h2 {
            padding: ${theme.spacings.medium} 0 ${theme.spacings.large};
          }

          input {
            display: block;
            width: 100%;
            padding: ${theme.spacings.small};
            margin-bottom: ${theme.spacings.small};
            background-color: ${theme.colors.lightGray};
            border: 1px solid ${theme.colors.lightGray};
            outline: none;
            text-align: center;

            &.error {
              border-color: #ff0000;
            }
          }

          button {
            cursor: pointer;
            background-color: ${theme.colors.darkBlue};
            border: 1px solid ${theme.colors.darkBlue};
            padding: 10px;
            margin: 0 auto;
            width: 100%;
            color: #fff;

            &:hover {
              opacity: 0.8;
            }
          }

          div {
            padding-top: ${theme.spacings.small};
          }
        }
      }
    }
  `,
);
