import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
    .mainSection {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.spacings.small};

      @media only screen and (max-width: 1000px) {
        padding: ${theme.spacings.large} ${theme.spacings.small};
      }

      @media only screen and (max-width: 768px) {
        grid-template-columns: 100%;
        gap: ${theme.spacings.medium};
      }

      @media only screen and (max-width: 350px) {
        padding: ${theme.spacings.small};
        gap: ${theme.spacings.small};
      }

      form {
        @media only screen and (max-width: 768px) {
          margin: 0 auto;
        }

        &:first-of-type {
          margin-left: auto;
          align-self: start;
        }
      }
    }
  `,
);
