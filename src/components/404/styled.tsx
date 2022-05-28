import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    p {
      margin: 0 auto;
      margin-top: 200px;
      margin-bottom: 200px;
      max-width: 225px;
      padding: 10px;
      background-color: ${theme.colors.darkBlue};
      color: #fff;
      font-weight: bold;
    }
  `}
`;
