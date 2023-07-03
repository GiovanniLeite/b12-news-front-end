import styled, { css } from 'styled-components';

export const Container = styled.footer(
  ({ theme }) => css`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
);

export const TopBar = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: 130rem;
    margin: 0 auto;
    padding: 30px 60px 50px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
      padding: ${theme.spacings.medium} ${theme.spacings.small};
      flex-direction: column;
    }

    ul {
      list-style: none;

      @media only screen and (max-width: 768px) {
        text-align: center;
        margin-bottom: ${theme.spacings.large};
      }

      li {
        margin-bottom: 8px;
        padding-left: ${theme.spacings.extraSmall};

        &.titleTopBarFooter {
          font-size: 2.1rem;
          margin-bottom: ${theme.spacings.small};
          letter-spacing: 0.7px;
          padding: 0;
          font-weight: 700;
        }

        a {
          color: ${theme.colors.white};

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  `,
);

export const BottomBar = styled.div(
  ({ theme }) => css`
    border-top: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.darkGray};

    div {
      width: 100%;
      max-width: 140rem;
      padding: ${theme.spacings.extraSmall} ${theme.spacings.small};
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      .logo {
        font-size: 3.6rem;
        font-weight: bold;

        @media only screen and (max-width: 768px) {
          margin: 15px 0;
        }
      }

      .copyright {
        font-size: ${theme.font.sizes.small};
      }

      ul {
        @media only screen and (max-width: 768px) {
          margin: 15px 0;
        }

        li {
          display: inline-block;
          background-color: ${theme.colors.primary};
          padding: 8px;
          border-radius: 50%;
          margin: 1px;

          a {
            color: ${theme.colors.white};
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  `,
);
