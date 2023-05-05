import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    color: #fff;
    width: 100%;
  `}
`;

export const TopBar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 140rem;
    padding: ${theme.spacings.extraSmall};
    padding-top: 20px;
    margin: 0 auto;
    margin-bottom: 50px;

    @media only screen and (max-width: 1500px) {
      padding-left: ${theme.spacings.extraLarge};
      padding-right: ${theme.spacings.extraLarge};
    }

    @media only screen and (max-width: 1400px) {
      padding-left: ${theme.spacings.medium};
      padding-right: ${theme.spacings.medium};
    }

    @media only screen and (max-width: 700px) {
      padding-left: ${theme.spacings.small};
      padding-right: ${theme.spacings.small};
      margin-bottom: 20px;
    }

    div {
      display: grid;
      grid-template-columns: 33% 34% 33%;

      @media only screen and (max-width: 700px) {
        grid-template-columns: 100%;
        text-align: center;
      }

      ul {
        list-style: none;
        margin: 0 auto;

        @media only screen and (max-width: 700px) {
          margin-bottom: 30px;
        }

        li {
          padding: 5px;

          @media only screen and (max-width: 700px) {
            padding: 2px;
          }

          &.titleTopBarFooter {
            font-size: 120%;
            margin-bottom: 10px;
            letter-spacing: 0.7px;
            padding: 0;
            font-weight: 700;

            @media only screen and (max-width: 700px) {
              margin-bottom: 5px;
            }
          }

          a {
            text-decoration: none;
            color: #fff;

            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  `}
`;

export const BottomBar = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid #fff;
    background-color: ${theme.colors.darkGray};

    @media only screen and (max-width: 1500px) {
      padding-left: ${theme.spacings.extraLarge};
      padding-right: ${theme.spacings.extraLarge};
    }

    @media only screen and (max-width: 1400px) {
      padding-left: ${theme.spacings.medium};
      padding-right: ${theme.spacings.medium};
    }

    @media only screen and (max-width: 700px) {
      padding-left: ${theme.spacings.small};
      padding-right: ${theme.spacings.small};
    }

    div {
      width: 100%;
      max-width: 1400px;
      padding: ${theme.spacings.extraSmall};
      overflow: hidden;
      margin: 0 auto;
      text-align: center;
      padding-top: 10px;

      span.logo {
        float: left;
        font-size: 200%;
        font-weight: bold;
        margin-top: -10px;

        @media only screen and (max-width: 700px) {
          margin-top: 0;
          float: none;
          display: block;
        }
      }

      span.copyright {
        font-size: 70%;
        font-family: Arial, Helvetica, sans-serif;

        @media only screen and (max-width: 700px) {
          display: block;
          margin-top: 15px;
        }
      }

      ul {
        list-style: none;
        float: right;
        margin-top: -5px;

        @media only screen and (max-width: 700px) {
          float: none;
          margin-top: 15px;
          margin-bottom: 15px;
        }

        li {
          display: inline-block;
          background-color: ${theme.colors.darkBlue};
          padding: 8px;
          border-radius: 50%;
          margin: 1px;

          a {
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  `}
`;
