import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
    .mainSection {
      @media only screen and (max-width: 1000px) {
        padding: ${theme.spacings.large} ${theme.spacings.small};
      }

      @media only screen and (max-width: 350px) {
        padding: ${theme.spacings.small};
      }

      form {
        max-width: 320px;
        margin: 0 auto;
        padding: ${theme.spacings.small};
        background-color: ${theme.colors.white};
        border-top: 10px solid ${theme.colors.primary};
        box-shadow: 0 0 10px ${theme.colors.text};
        color: ${theme.colors.text};
        text-align: center;

        h2 {
          padding: ${theme.spacings.medium} 0 ${theme.spacings.large};
        }

        input {
          width: 100%;
          padding: ${theme.spacings.small};
          margin-bottom: ${theme.spacings.small};
          background-color: ${theme.colors.gray1};
          border: 1px solid ${theme.colors.gray1};
          text-align: center;

          &.error {
            border-color: ${theme.colors.red};
          }
        }

        div {
          padding-top: ${theme.spacings.small};
        }
      }
    }
  `,
);
