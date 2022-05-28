import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.small};
    padding-top: 30px;
    padding-bottom: ${theme.spacings.xlarge};
    font-family: 'Open Sans', sans-serif;

    @media only screen and (max-width: 600px) {
      padding-top: 95px;
    }

    div.card {
      padding-top: ${theme.spacings.small};
      padding-bottom: ${theme.spacings.verySmall};
      border-bottom: 1px solid rgb(199, 199, 199);

      a {
        text-decoration: none;
      }

      h2 {
        color: ${theme.colors.darkBlue};
        margin-top: ${theme.spacings.large};
        margin-bottom: ${theme.spacings.small};
      }

      h2:hover {
        color: rgba(0, 53, 128, 0.7);
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
      margin-bottom: ${theme.spacings.xlarge};

      @media only screen and (max-width: 800px) {
        margin-bottom: ${theme.spacings.medium};
      }

      div.inputContent {
        padding: ${theme.spacings.verySmall};
        background-color: ${theme.colors.darkBlue};
        border-radius: 3px;

        div {
          padding-right: ${theme.spacings.verySmall};
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
        }

        input:focus {
          outline: none;
        }
      }

      p {
        //text-align: center;
        padding: ${theme.spacings.verySmall};
      }

      span {
        color: ${theme.colors.darkBlue};
        font-weight: bold;
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
  `}
`;
