import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;

    div {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, 0.8);
    }

    span {
      z-index: 2;
      animation: is-rotating 1s infinite;
      border: 6px solid #e5e5e5;
      border-radius: 50%;
      border-top-color: ${theme.colors.darkBlue};
      height: 50px;
      width: 50px;
      margin: 0 auto;
    }

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  `}
`;
