import styled, { css } from 'styled-components';

export const Container = styled.section(
  ({ theme }) => css`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: ${theme.colors.blackScreen};
    }

    span {
      z-index: 2;
      animation: is-rotating 1s infinite;
      border: 6px solid ${theme.colors.gray1};
      border-radius: 50%;
      border-top-color: ${theme.colors.primary};
      height: ${theme.spacings.extraLarge};
      width: ${theme.spacings.extraLarge};
      margin: 0 auto;
    }

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  `,
);
