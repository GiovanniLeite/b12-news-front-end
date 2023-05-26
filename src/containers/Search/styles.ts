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
      padding: 30px ${theme.spacings.small} ${theme.spacings.extraLarge} ${theme.spacings.small};
      font-family: 'Open Sans', sans-serif;

      @media only screen and (max-width: 600px) {
        padding-top: 95px;
      }

      div.searchBar {
        margin-bottom: ${theme.spacings.extraLarge};

        @media only screen and (max-width: 800px) {
          margin-bottom: ${theme.spacings.medium};
        }

        div.inputContent {
          padding: ${theme.spacings.extraSmall};
          background-color: ${theme.colors.darkBlue};
          border-radius: 3px;

          div {
            padding-right: ${theme.spacings.extraSmall};
            background-color: #fff;
            border-radius: 3px;

            input {
              width: 100%;
              padding: ${theme.spacings.small};
              background: url('/assets/find.png') no-repeat center right;
              border: none;
              background-color: #fff;
              outline: none;
            }
          }
        }

        p {
          padding: ${theme.spacings.extraSmall};

          span {
            color: ${theme.colors.darkBlue};
            font-weight: bold;
          }
        }
      }

      div.card {
        padding-top: ${theme.spacings.small};
        padding-bottom: ${theme.spacings.extraSmall};
        border-bottom: 1px solid rgb(199, 199, 199);

        a {
          text-decoration: none;

          &:hover {
            opacity: 0.8;
          }

          h2 {
            color: ${theme.colors.darkBlue};
            margin-top: ${theme.spacings.large};
            margin-bottom: ${theme.spacings.small};
            padding-bottom: 3px;
            line-height: 1;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        p {
          margin-bottom: ${theme.spacings.large};
          padding-bottom: 2px;
          line-height: 1;

          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span.feedPostDateTime {
          font-size: 70%;
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
          opacity: 0.8;
        }
      }
    }
  `}
`;
