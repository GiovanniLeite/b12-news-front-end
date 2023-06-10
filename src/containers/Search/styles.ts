import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.background};

    @media only screen and (max-width: 768px) {
      padding-top: 100px;
    }

    @media only screen and (max-width: 600px) {
      padding-top: 95px;
    }

    @media only screen and (max-width: 460px) {
      padding-top: 45px;
    }

    section {
      max-width: 120rem;
      padding: 30px ${theme.spacings.small} ${theme.spacings.extraLarge} ${theme.spacings.small};
      margin: 0 auto;
      font-family: 'Open Sans', sans-serif;

      .searchBar {
        padding: 0 0 ${theme.spacings.extraSmall};
        border-bottom: 1px solid rgb(199, 199, 199);

        form {
          padding-right: ${theme.spacings.extraSmall};
          border: ${theme.spacings.extraSmall} solid ${theme.colors.darkBlue};
          border-radius: 3px;
          background-color: #fff;

          input {
            width: 100%;
            padding: ${theme.spacings.small};
            padding-right: ${theme.spacings.medium};
            background: url('/assets/find.png') no-repeat center right;
            border: none;
            outline: none;
          }
        }

        p {
          padding: ${theme.spacings.extraSmall} 0;

          span {
            color: ${theme.colors.darkBlue};
            font-weight: bold;
          }
        }
      }

      .card {
        padding: ${theme.spacings.small} 0;
        border-bottom: 1px solid rgb(199, 199, 199);

        span {
          display: block;
          margin: 0 0 ${theme.spacings.medium};

          &.feedPostDateTime {
            margin: ${theme.spacings.medium} 0 0;
            font-size: 70%;
          }
        }

        h2,
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        h2 {
          -webkit-line-clamp: 2;
          color: ${theme.colors.darkBlue};
          margin-bottom: ${theme.spacings.extraSmall};

          &:hover {
            opacity: 0.8;
          }
        }

        p {
          -webkit-line-clamp: 1;
        }
      }

      button {
        cursor: pointer;
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 3px;
        font-weight: bold;
        background-color: ${theme.colors.darkBlue};
        color: #fff;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  `,
);
