import styled, { css } from 'styled-components';

export const Container = styled.section(
  ({ theme }) => css`
    background-color: ${theme.colors.gray1};
    padding: 0 ${theme.spacings.extraSmall} ${theme.spacings.extraSmall};
    border-radius: 3px;

    h2 {
      color: ${theme.colors.text};
      margin-bottom: ${theme.spacings.small};

      @media only screen and (max-width: 560px) {
        margin-bottom: ${theme.spacings.extraSmall};
      }
    }

    .featured {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: ${theme.spacings.small};

      @media only screen and (max-width: 1050px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media only screen and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media only screen and (max-width: 560px) {
        grid-template-columns: 100%;
        grid-gap: ${theme.spacings.extraSmall};
      }

      .card {
        display: flex;
        padding: ${theme.spacings.extraSmall};
        border-radius: 3px;
        border: 1px solid ${theme.colors.gray2};
        background-color: ${theme.colors.white};
        color: ${theme.colors.text};
        min-height: 112px;

        img {
          max-height: 100px;
          max-width: 100px;
          margin-right: ${theme.spacings.extraSmall};
        }

        span {
          font-size: ${theme.font.sizes.small};
          color: ${theme.colors.primary};
        }

        a {
          font-size: 1.4rem;
          color: ${theme.colors.text};
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;

          &:hover {
            color: ${theme.colors.black};
          }
        }
      }
    }
  `,
);
