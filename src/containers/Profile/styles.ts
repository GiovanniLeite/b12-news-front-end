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
        margin: 0 auto;

        div {
          padding-top: ${theme.spacings.small};
        }
      }
    }
  `,
);
