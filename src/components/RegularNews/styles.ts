import styled, { css } from 'styled-components';

export const Container = styled.section(
  ({ theme }) => css`
    .card {
      display: grid;
      grid-template-columns: 30% 70%;
      padding-bottom: ${theme.spacings.small};
      border-bottom: 1px solid ${theme.colors.gray2};
      margin-bottom: ${theme.spacings.small};

      @media only screen and (max-width: 930px) {
        grid-template-columns: 40% 60%;
      }

      @media only screen and (max-width: 540px) {
        grid-template-columns: 100%;
        background-color: ${theme.colors.white};
        padding: ${theme.spacings.small};
        border: 1px solid ${theme.colors.gray1};
        border-radius: 3px;
      }

      &.noImageCard {
        grid-template-columns: 100%;
      }

      img {
        vertical-align: middle;

        &:hover {
          opacity: 0.9;
        }
      }

      .leftImage {
        margin-right: ${theme.spacings.small};

        @media only screen and (max-width: 700px) {
          display: flex;
          align-items: center;
        }

        @media only screen and (max-width: 540px) {
          display: none;
        }

        img {
          width: 100%;
          border-radius: 2px;
        }
      }

      .midImage {
        display: none;

        @media only screen and (max-width: 540px) {
          display: block;
        }

        img {
          margin-left: -${theme.spacings.small};
          margin-right: -${theme.spacings.small};
          width: calc(100% + ${theme.spacings.medium});
        }
      }

      span {
        @media only screen and (max-width: 700px) {
          font-size: ${theme.font.sizes.small};
        }

        &.elapsedTime {
          font-size: ${theme.font.sizes.small};
        }
      }

      h2 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.3;
        margin: ${theme.spacings.extraSmall} 0;
        color: ${theme.colors.primary};

        &:hover {
          color: ${theme.colors.darkBlue};
        }

        @media only screen and (max-width: 1100px) {
          font-size: 2.1rem;
        }
      }

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 1.5rem 0 0.5rem;

        @media only screen and (max-width: 1100px) {
          font-size: 1.6rem;
        }

        @media only screen and (max-width: 700px) {
          margin: ${theme.spacings.extraSmall} 0;
        }
      }
    }
  `,
);
