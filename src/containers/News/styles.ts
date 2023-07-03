import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
    .mainSection {
      max-width: 100rem;
      color: ${theme.colors.text};

      @media only screen and (max-width: 1000px) {
        padding: ${theme.spacings.large} ${theme.spacings.small};
      }

      @media only screen and (max-width: 768px) {
        padding: ${theme.spacings.medium} ${theme.spacings.small};
      }

      &.loggedOut {
        height: 60vh;
        overflow: hidden;
      }

      .error404 {
        text-align: center;
      }
    }
  `,
);

export const Title = styled.div(
  ({ theme }) => css`
    padding-bottom: ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.gray2};
    margin-bottom: ${theme.spacings.medium};

    h2 {
      font-size: ${theme.font.sizes.extraLarge};
      line-height: 1.2;
      margin-bottom: ${theme.spacings.large};

      @media only screen and (max-width: 1050px) {
        font-size: 3.6rem;
      }

      @media only screen and (max-width: 768px) {
        font-size: 2.9rem;
        margin-bottom: ${theme.spacings.small};
      }
    }

    h4 {
      margin-bottom: ${theme.spacings.large};

      @media only screen and (max-width: 1050px) {
        font-size: 1.6rem;
      }

      @media only screen and (max-width: 768px) {
        margin-bottom: ${theme.spacings.small};
      }
    }

    p {
      @media only screen and (max-width: 1050px) {
        font-size: 1.4rem;
      }

      span {
        font-size: ${theme.font.sizes.small};
        font-weight: bold;
        color: ${theme.colors.text};
      }
    }
  `,
);

export const Content = styled.article(
  ({ theme }) => css`
    max-width: 70rem;
    margin: 0 auto ${theme.spacings.medium};

    .articleCover {
      margin-bottom: ${theme.spacings.medium};

      img {
        width: 100%;
        vertical-align: middle;
      }

      p {
        font-size: ${theme.font.sizes.small};
      }
    }

    .articleContent {
      h1 {
        font-size: 2.5rem;
        letter-spacing: 1px;
        margin: ${theme.spacings.medium} 0;
      }

      h2 {
        font-size: ${theme.font.sizes.medium};
        letter-spacing: 1px;
        margin: ${theme.spacings.small} 0;
      }

      p {
        text-align: justify;
        margin: ${theme.spacings.small} 0;
      }

      ol,
      ul {
        margin-left: ${theme.spacings.medium};
      }

      pre {
        width: 100%;
        margin: ${theme.spacings.small} 0;
        padding: ${theme.spacings.small};
        overflow-x: auto;
        font-size: ${theme.font.sizes.medium};
        line-height: 1.5;
        background-color: ${theme.colors.gray1};
        color: ${theme.colors.darkGray};
      }
    }
  `,
);

export const OverLay = styled.section(
  ({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: ${theme.spacings.small};
    z-index: 3;
    background: ${theme.colors.blackScreen};
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .overlayModal {
      max-width: 320px;
      padding: ${theme.spacings.extraSmall};
      border-radius: 3px;
      background-color: ${theme.colors.white};

      h2 {
        text-align: center;
        font-family: 'Raleway', sans-serif;
        color: ${theme.colors.primary};
      }

      h5 {
        line-height: 1;
        text-align: center;
        color: ${theme.colors.text};
        margin-bottom: ${theme.spacings.small};
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${theme.colors.primary};
        font-size: 2.4rem;
        color: ${theme.colors.primary};

        &:hover {
          color: ${theme.colors.darkBlue};
          border-color: ${theme.colors.darkBlue};
        }

        svg {
          margin-right: ${theme.spacings.extraSmall};
        }

        p {
          line-height: 1;
          font-weight: bold;
        }

        span {
          display: block;
          padding-bottom: ${theme.spacings.extraSmall};
          font-size: 1.9rem;
          font-weight: 400;
          color: ${theme.colors.text};
        }
      }
    }
  `,
);
