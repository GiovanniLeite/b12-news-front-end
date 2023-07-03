import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    section {
      @media only screen and (max-width: 450px) {
        padding: 8rem ${theme.spacings.small};
      }

      h1 {
        text-align: center;
        color: ${theme.colors.primary};
      }
    }
  `}
`;
