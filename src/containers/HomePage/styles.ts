import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    background-color: #eee;

    @media only screen and (max-width: 768px) {
      padding-top: 100px;
    }

    @media only screen and (max-width: 600px) {
      padding-top: 0;
    }

    @media only screen and (max-width: 460px) {
      padding-top: 45px;
    }

    section {
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

      @media only screen and (max-width: 460px) {
        padding-top: 50px;
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

        div.leftContent {
          min-height: 600px;
          padding: ${theme.spacings.small};
          margin-right: ${theme.spacings.small};
          border: 1px solid ${theme.colors.white2};
          border-radius: 3px;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-size: cover;
          background-position: top center;

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
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            @media only screen and (max-width: 600px) {
              font-size: 200%;
            }

            @media only screen and (max-width: 380px) {
              font-size: 120%;
            }

            &:hover {
              opacity: 0.7;
            }
          }

          h3 {
            margin-top: 10px;
            font-weight: 400;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

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

            h2 {
              margin-top: 30px;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;

              &:hover {
                opacity: 0.7;
              }
            }

            h3 {
              margin-top: 10px;
              font-size: 90%;
              font-weight: 400;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }

        .noImage {
          background-color: #fff;
          color: ${theme.colors.darkGray};
          border: 1px solid ${theme.colors.lightGray};

          span.category {
            color: ${theme.colors.darkBlue};
          }

          a {
            color: ${theme.colors.darkGray};

            h2 {
              color: ${theme.colors.darkBlue};
            }
          }
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

    div.regularNews {
      margin-right: ${theme.spacings.extraSmall};

      div.newsCard {
        display: grid;
        grid-template-columns: 40% 60%;
        padding-top: ${theme.spacings.small};
        padding-bottom: ${theme.spacings.extraSmall};
        border-bottom: 1px solid rgb(199, 199, 199);

        @media only screen and (max-width: 600px) {
          grid-template-columns: 100%;
        }

        a {
          text-decoration: none;
          color: ${theme.colors.darkBlue};
        }

        div.imgNews {
          padding-right: ${theme.spacings.extraSmall};

          @media only screen and (max-width: 600px) {
            display: none;
          }

          img {
            width: 100%;
            border-radius: 2px;
          }
        }

        &.noImageNewsCard {
          grid-template-columns: 100%;

          div.imgNews {
            display: none;
          }
        }

        div {
          span {
            @media only screen and (max-width: 600px) {
              font-size: 70%;
            }

            &.feedPostDateTime {
              font-size: 70%;
            }
          }

          h2 {
            line-height: 1;
            margin: 5px 0;
            padding-bottom: 2px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            @media only screen and (max-width: 1100px) {
              font-size: 120%;
            }

            &:hover {
              color: rgba(0, 53, 128, 0.7);
            }
          }

          p {
            line-height: 1;
            margin: 5px 0;
            margin-top: 15px;
            padding-bottom: 1px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            @media only screen and (max-width: 1100px) {
              font-size: 90%;
            }
          }
        }
      }

      button {
        cursor: pointer;
        background-color: ${theme.colors.darkBlue};
        padding: 15px;
        color: #fff;
        border: none;
        width: 100%;
        font-weight: bold;
        border-radius: 3px;

        &:hover {
          background-color: rgba(0, 53, 128, 0.9);
        }
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
        padding: ${theme.spacings.extraSmall};
        border-radius: 3px;

        h3 {
          border-bottom: 1px solid rgb(199, 199, 199);
          padding-left: ${theme.spacings.extraSmall};
          padding-bottom: ${theme.spacings.extraSmall};
        }

        ul {
          list-style: none;

          li {
            font-size: 90%;
            padding-top: ${theme.spacings.small};
            padding-bottom: ${theme.spacings.small};
            border-bottom: 1px solid rgb(199, 199, 199);
            line-height: 1.3;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
              color: rgba(0, 53, 128, 0.7);
            }

            &.noBorder {
              border: none;
            }

            @media only screen and (max-width: 1000px) {
              justify-content: left;
              align-items: left;
            }

            a {
              display: flex;
              align-items: center;

              span {
                color: rgb(114, 114, 114);
                padding: 15px;
                font-size: 130%;
              }

              p {
                color: ${theme.colors.darkBlue};
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  `}
`;
