import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    color: #fff;
    width: 100%;
  `}
`;

export const TopBar = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
  padding: 30px 60px 50px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 20px 10px;
    flex-direction: column;
  }

  ul {
    list-style: none;

    @media only screen and (max-width: 768px) {
      text-align: center;
      margin-bottom: 30px;
    }

    li {
      margin-bottom: 8px;
      padding-left: 5px;

      &.titleTopBarFooter {
        font-size: 120%;
        margin-bottom: 10px;
        letter-spacing: 0.7px;
        padding: 0;
        font-weight: 700;
      }

      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const BottomBar = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid #fff;
    background-color: ${theme.colors.darkGray};

    div {
      width: 100%;
      max-width: 140rem;
      padding: ${theme.spacings.extraSmall} 10px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      span.logo {
        font-size: 200%;
        font-weight: bold;

        @media only screen and (max-width: 768px) {
          margin: 15px 0;
        }
      }

      span.copyright {
        font-size: 70%;
      }

      ul {
        @media only screen and (max-width: 768px) {
          margin: 15px 0;
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
              opacity: 0.8;
            }
          }
        }
      }

  `}
`;
