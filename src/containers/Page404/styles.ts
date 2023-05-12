import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    padding: 100px 0 30px;

    h1 {
      text-align: center;
      color: ${theme.colors.darkBlue};
    }
  `}
`;
