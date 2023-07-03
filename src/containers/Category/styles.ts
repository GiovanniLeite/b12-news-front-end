import styled, { css } from 'styled-components';

export const Container = styled.main``;

export const MainNews = styled.section(
  ({ theme }) => css`
    & > h2 {
      color: ${theme.colors.text};
      font-weight: bold;
      margin-bottom: ${theme.spacings.extraSmall};
    }

    .upperNews {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: ${theme.spacings.small};

      @media only screen and (max-width: 700px) {
        grid-template-columns: 100%;
      }

      /** START Component PostCard */
      .postCard {
        &:nth-child(2) {
          @media only screen and (max-width: 700px) {
            display: none;
          }
        }

        h2 {
          -webkit-line-clamp: 3;
          margin-top: 17rem;
          font-size: 3rem;

          @media only screen and (max-width: 960px) {
            margin-top: 10rem;
            font-size: ${theme.font.sizes.large};
          }

          @media only screen and (max-width: 700px) {
            margin-top: 15rem;
            font-size: 2.3rem;
          }

          @media only screen and (max-width: 350px) {
            font-size: 1.6rem;
          }
        }
      }
      /** END Component PostCard */
    }
  `,
);

export const NewsFeed = styled.section(
  ({ theme }) => css`
    .newsCardContainer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: ${theme.spacings.small};
      padding: ${theme.spacings.small} 0;

      @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media only screen and (max-width: 360px) {
        grid-template-columns: 100%;
      }

      /** START Component PostCard */
      .postCard .content {
        padding-top: 13rem;

        @media only screen and (max-width: 1000px) {
          padding-top: 10rem;
        }

        @media only screen and (max-width: 840px) {
          padding-top: 7rem;
        }

        @media only screen and (max-width: 730px) {
          padding-top: ${theme.spacings.extraLarge};
        }

        @media only screen and (max-width: 700px) {
          padding-top: 8rem;
        }

        @media only screen and (max-width: 580px) {
          padding-top: ${theme.spacings.extraLarge};
        }

        span {
          font-size: 1.4rem;

          &.topic {
            position: relative;
            display: inline-block;
            margin-bottom: 2.5rem;
            padding: ${theme.spacings.extraSmall};
            background-color: ${theme.colors.primary};
            border-radius: 2px;
            font-size: 1.08rem;
            text-transform: uppercase;

            @media only screen and (max-width: 900px) {
              font-size: 1rem;
              padding: 0.4rem;
            }
          }

          &.elapsedTime {
            @media only screen and (max-width: 900px) {
              font-size: 1.2rem;
            }
          }
        }

        &.noImage {
          .topic {
            color: ${theme.colors.white};
          }
        }

        h2 {
          -webkit-line-clamp: 3;
          font-size: ${theme.font.sizes.large};
          margin: 0;

          @media only screen and (max-width: 900px) {
            font-size: 1.4rem;
          }
        }

        h3 {
          display: none;
        }
      }
      /** END Component PostCard */
    }

    .buttonLoadMore {
      margin-bottom: ${theme.spacings.small};
    }
  `,
);
