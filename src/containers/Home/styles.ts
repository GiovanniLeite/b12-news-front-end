import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
    h1 {
      text-align: center;
      color: ${theme.colors.text};
    }
  `,
);

export const MainNews = styled.section(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.spacings.small};

    @media only screen and (max-width: 1000px) {
      grid-template-columns: 100%;
    }

    /** START Component PostCard */
    .postCard {
      h2 {
        -webkit-line-clamp: 3;
        margin-top: 17rem;
        font-size: ${theme.font.sizes.extraLarge};

        @media only screen and (max-width: 600px) {
          font-size: 3.6rem;
        }

        @media only screen and (max-width: 380px) {
          font-size: 2.1rem;
        }
      }

      h3 {
        font-size: 2.1rem;

        @media only screen and (max-width: 380px) {
          font-size: 1.4rem;
        }
      }
    }
    /** END Component PostCard */

    .rightContent {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: ${theme.spacings.small};

      @media only screen and (max-width: 1000px) {
        display: none;
      }
    }
  `,
);

export const BottomNews = styled.section(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 75% 25%;
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.text};

    @media only screen and (max-width: 1000px) {
      grid-template-columns: 100%;
    }

    /** START Component RegularNews */
    .regularNews {
      margin-right: ${theme.spacings.small};

      .card {
        grid-template-columns: 40% 60%;

        @media only screen and (max-width: 540px) {
          grid-template-columns: 100%;
        }

        &.noImageCard {
          grid-template-columns: 100%;
        }

        &:nth-child(-n + 3) {
          display: none;
        }
      }

      @media only screen and (max-width: 1000px) {
        margin: 0;

        .card:nth-child(2),
        .card:nth-child(3) {
          display: grid;
        }

        .buttonLoadMore {
          margin-bottom: ${theme.spacings.small};
        }
      }
    }
    /** END Component RegularNews */

    .featuredNews {
      align-self: start;
      background-color: ${theme.colors.white};
      padding: ${theme.spacings.extraSmall};
      border-radius: 3px;
      font-weight: bold;
      border: 1px solid ${theme.colors.gray1};

      h3 {
        border-bottom: 1px solid ${theme.colors.gray1};
        padding-bottom: ${theme.spacings.extraSmall};
      }

      ul {
        list-style: none;

        li {
          font-size: 1.6rem;
          padding: ${theme.spacings.small} 0;
          border-bottom: 1px solid ${theme.colors.gray1};
          line-height: 1.3;
          display: flex;
          justify-content: center;
          align-items: center;

          &:last-child {
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
              color: ${theme.colors.gray3};
              padding: 15px;
              font-size: 2.1rem;
            }

            p {
              color: ${theme.colors.primary};
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;

              &:hover {
                color: ${theme.colors.darkBlue};
              }
            }
          }
        }
      }
    }
  `,
);
