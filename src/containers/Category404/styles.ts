import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    section {
      p {
        padding: ${theme.spacings.small};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        text-align: center;
      }

      @media only screen and (max-width: 350px) {
        padding: 8rem ${theme.spacings.small};
      }
    }
  `,
);
