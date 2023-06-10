import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
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
      padding: 30px ${theme.spacings.small} ${theme.spacings.extraLarge};
      display: grid;
      grid-template-columns: 50% 50%;

      @media only screen and (max-width: 700px) {
        grid-template-columns: 100%;
      }

      @media only screen and (max-width: 600px) {
        padding-top: 95px;
      }

      div.leftContent {
        overflow: hidden;
        padding-bottom: 5px;

        div {
          float: right;
          margin-right: ${theme.spacings.small};
          width: 320px;

          @media only screen and (max-width: 700px) {
            float: none;
            margin: 0 auto;
          }
        }
      }

      div.rightContent {
        padding-bottom: 5px;

        form {
          height: 100%;

          @media only screen and (max-width: 700px) {
            margin-top: 5px;
          }
        }
      }

      form {
        max-width: 320px;
        background-color: #fff;
        padding: ${theme.spacings.small};
        text-align: center;
        border-top: 10px solid ${theme.colors.darkBlue};
        box-shadow: 0 0 10px ${theme.colors.primary};
        color: ${theme.colors.primary};

        @media only screen and (max-width: 700px) {
          margin: 0 auto;
        }

        h2 {
          padding: ${theme.spacings.medium} 0 ${theme.spacings.large};
        }

        input {
          width: 100%;
          padding: ${theme.spacings.small};
          margin-bottom: ${theme.spacings.small};
          text-align: center;
          background-color: ${theme.colors.lightGray};
          border: 1px solid ${theme.colors.lightGray};
          outline: none;

          &.error {
            border-color: #ff0000;
          }
        }

        button {
          cursor: pointer;
          background-color: ${theme.colors.darkBlue};
          border: 1px solid ${theme.colors.darkBlue};
          padding: 10px;
          margin: 0 auto;
          width: 100%;
          color: #fff;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  `,
);
