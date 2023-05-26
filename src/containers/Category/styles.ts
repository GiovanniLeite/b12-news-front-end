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
      font-family: 'Open Sans', sans-serif;
      background-color: #eee;
      max-width: 120rem;
      margin: 0 auto;
      padding: ${theme.spacings.small};
      padding-top: 30px;

      @media only screen and (max-width: 1205px) {
        padding-top: 20px;
      }

      @media only screen and (max-width: 600px) {
        padding-top: 90px;
      }

      div.mainContent {
        & > h2 {
          font-weight: bold;
          margin-bottom: ${theme.spacings.small};
          padding-left: ${theme.spacings.extraSmall};

          @media only screen and (max-width: 600px) {
            padding: 0;
          }
        }

        div.mainNews {
          display: grid;
          grid-template-columns: 50% 50%;
          color: #fff;
          padding: ${theme.spacings.extraSmall};

          @media only screen and (max-width: 700px) {
            grid-template-columns: 100%;
          }

          @media only screen and (max-width: 600px) {
            padding: 0;
          }

          div {
            padding: ${theme.spacings.small};
            background-repeat: no-repeat;
            background-attachment: scroll;
            background-size: cover;
            background-position: top center;
            border-radius: 3px;

            @media only screen and (max-width: 700px) {
              min-height: 500px;
            }

            @media only screen and (max-width: 500px) {
              min-height: 0;
            }

            & + div {
              margin-left: ${theme.spacings.extraSmall};

              @media only screen and (max-width: 700px) {
                display: none;
              }
            }

            &.noImage {
              background-color: #fff;
              color: ${theme.colors.darkGray};
              border: 1px solid rgba(199, 199, 199);

              span.textAbove {
                color: ${theme.colors.darkBlue};
              }

              a {
                color: ${theme.colors.darkGray};

                h2 {
                  color: ${theme.colors.darkBlue};
                }
              }
            }

            a {
              text-decoration: none;
              color: #fff;

              h2 {
                margin-top: 170px;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;

                @media only screen and (max-width: 960px) {
                  margin-top: 100px;
                  font-size: 110%;
                }

                @media only screen and (max-width: 700px) {
                  margin-top: 290px;
                  font-size: 130%;
                }

                @media only screen and (max-width: 500px) {
                  margin-top: 190px;
                }

                @media only screen and (max-width: 400px) {
                  margin-top: 150px;
                }

                @media only screen and (max-width: 350px) {
                  font-size: 90%;
                }

                &:hover {
                  opacity: 0.8;
                }
              }

              h3 {
                font-weight: 400;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;

                @media only screen and (max-width: 1000px) {
                  margin-bottom: ${theme.spacings.small};
                }

                @media only screen and (max-width: 960px) {
                  font-size: 90%;
                }
              }
            }
          }
        }
      }
    }
  `}
`;

export const RegularNews = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.small};

    @media only screen and (max-width: 1000px) {
      margin-top: ${theme.spacings.extraSmall};
    }

    div.newsCardContainer {
      display: grid;
      grid-template-columns: 33% 34% 33%;

      @media only screen and (max-width: 700px) {
        grid-template-columns: 50% 50%;
      }

      @media only screen and (max-width: 600px) {
        grid-template-columns: 100%;
      }

      div {
        margin: ${theme.spacings.extraSmall};
        padding: ${theme.spacings.small};
        padding-top: 130px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
        background-position: top center;

        @media only screen and (max-width: 800px) {
          padding-top: 100px;
        }

        @media only screen and (max-width: 700px) {
          padding-top: 140px;
        }

        @media only screen and (max-width: 600px) {
          min-height: 300px;
          margin: 0;
          margin-bottom: ${theme.spacings.extraSmall};
        }

        &.desktopOff {
          display: none;

          @media only screen and (max-width: 700px) {
            display: block;
          }
        }

        &.noImage {
          background-color: #fff;
          border: 1px solid rgb(199, 199, 199);

          a {
            color: ${theme.colors.darkBlue};

            &:hover {
              opacity: 0.8;
            }

            & + span {
              color: ${theme.colors.darkGray};
            }
          }
        }

        span {
          font-size: 80%;
          color: #fff;

          &.textAbove {
            padding: 5px;
            background-color: ${theme.colors.darkBlue};
            border-radius: 2px;
            font-size: 60%;
            text-transform: uppercase;

            @media only screen and (max-width: 870px) {
              padding: 2px;
            }
          }
        }

        a {
          text-decoration: none;
          color: #fff;
          font-size: 110%;
          font-weight: bold;
          margin: ${theme.spacings.small} 0;

          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;

          @media only screen and (max-width: 870px) {
            font-size: 80%;
          }

          @media only screen and (max-width: 600px) {
            font-size: 110%;
          }

          &:hover {
            opacity: 0.8;
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
      margin-top: ${theme.spacings.small};

      &:hover {
        opacity: 0.8;
      }
    }
  `}
`;

export const EmphasisContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    background-color: ${theme.colors.lightGray};
    border-radius: 3px;

    h2 {
      margin-left: ${theme.spacings.extraSmall};
      margin-bottom: ${theme.spacings.small};
    }

    div.emphasis {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;

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

      div.card {
        display: grid;
        grid-template-columns: 35% 65%;
        margin: ${theme.spacings.extraSmall};
        padding: ${theme.spacings.extraSmall};
        border-radius: 3px;
        border: 1px solid rgba(199, 199, 199);
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
          font-size: 80%;
          color: ${theme.colors.darkGray};

          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;

          &:hover {
            opacity: 0.8;
          }
        }

        &.noImage {
          grid-template-columns: 100%;

          div.divImg {
            display: none;
          }

          a {
            margin-top: 10px;
          }
        }
      }
    }
  `}
`;
