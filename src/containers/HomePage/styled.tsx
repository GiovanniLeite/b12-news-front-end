import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.small};
    padding-top: 30px;
    font-family: 'Open Sans', sans-serif;

    @media only screen and (max-width: 1205px) {
      padding-top: 20px;
    }

    @media only screen and (max-width: 1000px) {
      margin-top: 0;
      padding-top: 0;
    }

    @media only screen and (max-width: 600px) {
      padding-top: 95px;
    }

    div.mainContent {
      display: grid;
      grid-template-columns: 50% 50%;
      color: #fff;

      @media only screen and (max-width: 1000px) {
        grid-template-columns: 100%;
      }

      a {
        text-decoration: none;
        color: #fff;
      }

      h2:hover,
      h3:hover {
        color: rgba(255, 255, 255, 0.7);
      }

      div.leftContent {
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
        background-position: top center;
      }

      div.leftContent {
        min-height: 600px;
        padding: ${theme.spacings.small};
        margin-right: ${theme.spacings.small};
        border: 1px solid ${theme.colors.white2};
        border-radius: 3px;

        @media only screen and (max-width: 1000px) {
          margin-right: 0;
        }

        @media only screen and (max-width: 600px) {
          min-height: 400px;
        }

        @media only screen and (max-width: 380px) {
          min-height: 300px;
        }

        h2 {
          margin-top: 170px;
          font-size: 250%;

          @media only screen and (max-width: 600px) {
            font-size: 200%;
          }

          @media only screen and (max-width: 380px) {
            font-size: 120%;
          }
        }

        h3 {
          margin-top: 10px;
          font-weight: 400;

          @media only screen and (max-width: 600px) {
            margin-bottom: 10px;
          }

          @media only screen and (max-width: 380px) {
            font-size: 80%;
          }
        }
      }

      div.rightContent {
        display: grid;
        grid-template-columns: 100%;
        min-height: 600px;
        gap: ${theme.spacings.small};

        @media only screen and (max-width: 1000px) {
          display: none;
        }

        @media only screen and (max-width: 600px) {
          min-height: 400px;
        }

        @media only screen and (max-width: 380px) {
          min-height: 300px;
        }

        div {
          padding: ${theme.spacings.small};
          border: 1px solid ${theme.colors.lightGray};
          border-radius: 3px;

          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: cover;
          background-position: top center;
        }

        h2 {
          margin-top: 30px;
        }

        h3 {
          margin-top: 10px;
          font-size: 90%;
          font-weight: 400;
        }
      }

      .noImage {
        background-color: #fff;
        color: ${theme.colors.darkGray};
        border: 1px solid ${theme.colors.lightGray};

        span.category {
          color: ${theme.colors.darkBlue};
        }

        h2 {
          color: ${theme.colors.darkBlue};
        }

        h2:hover,
        h3:hover {
          color: rgba(0, 53, 128, 0.7);
        }

        a {
          color: ${theme.colors.darkGray};
        }
      }
    }
  `}
`;

export const BottomContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 75% 25%;
    margin: ${theme.spacings.medium} 0;
    color: ${theme.colors.darkGray};

    @media only screen and (max-width: 1000px) {
      grid-template-columns: 100%;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.darkBlue};
    }

    div.regularNews {
      margin-right: ${theme.spacings.verySmall};

      div.newsCard {
        display: grid;
        grid-template-columns: 40% 60%;
        padding-top: ${theme.spacings.small};
        padding-bottom: ${theme.spacings.verySmall};
        border-bottom: 1px solid rgb(199, 199, 199);

        div.imgNews {
          padding-right: ${theme.spacings.verySmall};

          @media only screen and (max-width: 600px) {
            display: none;
          }

          img {
            width: 100%;
            border-radius: 2px;
          }
        }

        h2,
        p {
          line-height: 1;
          margin: 5px 0;
        }

        h2:hover {
          color: rgba(0, 53, 128, 0.7);
        }

        span.feedPostDateTime {
          font-size: 70%;
        }

        @media only screen and (max-width: 1100px) {
          h2 {
            font-size: 120%;
          }
          p {
            font-size: 90%;
          }
        }

        @media only screen and (max-width: 600px) {
          grid-template-columns: 100%;

          span {
            font-size: 70%;
          }
        }
      }

      div.newsCard.noImageRegularNews {
        grid-template-columns: 100%;

        div.imgNews {
          display: none;
        }
      }

      button {
        background-color: ${theme.colors.darkBlue};
        padding: 15px;
        color: #fff;
        border: none;
        width: 100%;
        font-weight: bold;
        border-radius: 3px;
      }

      button:hover {
        background-color: rgba(0, 53, 128, 0.9);
        cursor: pointer;
      }
    }

    div.emphasis {
      font-weight: bold;

      @media only screen and (max-width: 1000px) {
        margin-top: ${theme.spacings.medium};
        margin-bottom: ${theme.spacings.medium};
      }

      div {
        background-color: #fff;
        padding: ${theme.spacings.verySmall};
        border-radius: 3px;
      }

      h3 {
        border-bottom: 1px solid rgb(199, 199, 199);
        padding-left: ${theme.spacings.verySmall};
        padding-bottom: ${theme.spacings.verySmall};
      }

      ul {
        list-style: none;
      }

      ul a li {
        font-size: 90%;
        padding-top: ${theme.spacings.small};
        padding-bottom: ${theme.spacings.small};
        border-bottom: 1px solid rgb(199, 199, 199);
        line-height: 1.3;

        /* align */
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 1000px) {
          justify-content: left;
          align-items: left;
        }
      }

      ul a li:hover {
        color: rgba(0, 53, 128, 0.7);
      }

      ul a li span {
        color: rgb(114, 114, 114);
        padding: 15px;
        font-size: 130%;
      }

      .noBorder {
        border: none;
      }
    }
  `}
`;
