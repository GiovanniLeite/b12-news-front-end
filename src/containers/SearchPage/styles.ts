import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: 30px ${theme.spacings.small} ${theme.spacings.extraLarge}
      ${theme.spacings.small};
    font-family: 'Open Sans', sans-serif;

    @media only screen and (max-width: 600px) {
      padding-top: 95px;
    }

    div.card {
      padding-top: ${theme.spacings.small};
      padding-bottom: ${theme.spacings.extraSmall};
      border-bottom: 1px solid rgb(199, 199, 199);

      a {
        text-decoration: none;
      }

      h2 {
        color: ${theme.colors.darkBlue};
        margin-top: ${theme.spacings.large};
        margin-bottom: ${theme.spacings.small};

        &:hover {
          color: rgba(0, 53, 128, 0.7);
        }
      }

      h2,
      p {
        line-height: 1;
      }

      p {
        margin-bottom: ${theme.spacings.large};
      }

      span.feedPostDateTime {
        font-size: 70%;
      }
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
        }

        input {
          width: 100%;
          padding: ${theme.spacings.small};
          background: url('https://res.cloudinary.com/doamdbj1i/image/upload/v1637895047/search_evmmru.png')
            no-repeat center right;
          border: none;
          background-color: #fff;

          &:focus {
            outline: none;
          }
        }
      }

      p {
        padding: ${theme.spacings.extraSmall};
      }

      span {
        color: ${theme.colors.darkBlue};
        font-weight: bold;
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
  `}
`;
