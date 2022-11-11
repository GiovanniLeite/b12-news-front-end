import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium} 0;
    font-family: 'Open Sans', sans-serif;

    @media only screen and (max-width: 1050px) {
      padding: ${theme.spacings.large};
    }

    @media only screen and (max-width: 700px) {
      padding: ${theme.spacings.extraSmall};
    }

    @media only screen and (max-width: 600px) {
      padding-top: 90px;
    }

    div.warningLogin {
      height: 600px;
      overflow: hidden;
    }

    div.commentsContainer {
      max-width: 100rem;
      margin: 0 auto;
    }
  `}
`;

export const TitleHeader = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.gray};
    color: ${theme.colors.darkGray};
    max-width: 100rem;

    @media only screen and (max-width: 1050px) {
      margin: ${theme.spacings.small};
    }

    h2 {
      font-size: 280%;
      margin-bottom: ${theme.spacings.large};
      line-height: 1.2;

      @media only screen and (max-width: 1050px) {
        font-size: 200%;
      }

      @media only screen and (max-width: 700px) {
        font-size: 160%;
        margin-bottom: ${theme.spacings.small};
      }
    }

    h4 {
      margin-bottom: ${theme.spacings.large};

      @media only screen and (max-width: 1050px) {
        font-size: 90%;
      }
    }

    p {
      @media only screen and (max-width: 1050px) {
        font-size: 80%;
      }
    }

    p span {
      font-size: 80%;
      font-weight: bold;
      color: #333;
    }
  `}
`;

export const NewsContent = styled.article`
  ${({ theme }) => css`
    max-width: 70rem;
    margin: 0 auto;
    margin-bottom: 70px;
    padding-top: 40px;

    @media only screen and (max-width: 700px) {
      margin: ${theme.spacings.small};
      padding-top: 0;
    }

    div.cover {
      margin-bottom: ${theme.spacings.large};

      @media only screen and (max-width: 750px) {
        padding: ${theme.spacings.small};
      }

      img {
        width: 100%;
      }

      p {
        font-size: 70%;
      }
    }

    div.articleContent {
      h1 {
        padding: ${theme.spacings.small};
        font-size: 120%;
        letter-spacing: 1px;
      }

      h2 {
        letter-spacing: 1px;
        margin: ${theme.spacings.small};
        font-size: 115%;
        font-weight: bold;
      }

      p {
        padding: ${theme.spacings.small};
        text-align: justify;
      }

      ol,
      ul {
        margin-left: 30px;
      }

      pre {
        ${({ theme }) => css`
          width: 100%;
          overflow-x: auto;
          background: ${theme.colors.lightGray};
          color: ${theme.colors.darkGray};
          padding: ${theme.spacings.small};
          margin: ${theme.spacings.small};
          line-height: 1.5;
          font-size: ${theme.font.sizes.medium};
        `}
      }
    }
  `}
`;

export const Top10 = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: 70px;
    background-color: ${theme.colors.lightGray};
    border-radius: 3px;
    max-width: 100rem;

    @media only screen and (max-width: 560px) {
      margin: ${theme.spacings.small};
      margin-bottom: 40px;
    }

    h2 {
      margin-left: ${theme.spacings.extraSmall};
      margin-bottom: ${theme.spacings.small};
      color: ${theme.colors.darkGray};
    }

    div.emphasis {
      display: grid;
      grid-template-columns: 33% 33% 33%;

      @media only screen and (max-width: 1050px) {
        grid-template-columns: 33% 33% 33%;
      }

      @media only screen and (max-width: 800px) {
        grid-template-columns: 50% 50%;
      }

      @media only screen and (max-width: 560px) {
        grid-template-columns: 100%;
        padding-bottom: ${theme.spacings.extraSmall};
      }
    }

    div.Card {
      display: grid;
      grid-template-columns: 35% 65%;
      margin: ${theme.spacings.extraSmall};
      padding: ${theme.spacings.extraSmall};
      border: 1px solid rgba(199, 199, 199);
      border-radius: 3px;
      background-color: #fff;
      color: ${theme.colors.darkGray};
      min-height: 110px;

      @media only screen and (max-width: 560px) {
        grid-template-columns: 25% 75%;
        margin-bottom: 0;
      }

      @media only screen and (max-width: 400px) {
        grid-template-columns: 35% 65%;
      }

      div.divImg {
        img {
          height: 100%;
          width: 100%;
        }
      }

      div.divImg + div {
        padding-left: 5px;
      }

      span.textAbove {
        font-size: 70%;
        color: ${theme.colors.darkBlue};
      }

      a {
        text-decoration: none;
        display: block;
        font-size: 80%;
        color: ${theme.colors.darkGray};

        &:hover {
          color: rgb(114, 114, 114);
        }
      }
    }

    div.Card.noImage {
      grid-template-columns: 100%;

      a {
        margin-top: 10px;
      }
    }
  `}
`;

export const BlockScreen = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
    overflow: hidden;

    div.blackScreen {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, 0.9);

      div.warning {
        position: fixed;
        height: 200px;
        width: 320px;
        top: 50%;
        margin-top: -160px;
        left: 50%;
        margin-left: -160px;
        background-color: #fff;
        border-radius: 3px;
        padding: ${theme.spacings.extraSmall};
        font-family: 'Raleway', sans-serif;
      }

      h2 {
        color: ${theme.colors.darkBlue};
        text-align: center;
        margin-bottom: ${theme.spacings.small};
      }

      h5 {
        line-height: 1;
        color: ${theme.colors.darkGray};
        margin-bottom: ${theme.spacings.small};
      }

      a {
        text-decoration: none;

        &:hover {
          svg,
          p {
            color: ${theme.colors.darkBlue};
          }
        }
      }

      div.login {
        display: grid;
        grid-template-columns: 15% 85%;
        color: ${theme.colors.primary};
        font-weight: bold;
        font-size: 80%;
        margin-top: 20px;
        border: 1px solid ${theme.colors.darkBlue};

        div.loginZ {
          /* to align icon */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        p {
          line-height: 1;
        }

        span {
          color: ${theme.colors.darkGray};
          font-weight: 400;
          font-size: 80%;
        }
      }
    }
  `}
`;
