import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  font-family: 'Raleway', sans-serif;

  .fixedHeader {
    position: fixed;
    width: 100%;
    z-index: 3;
  }

  a {
    cursor: pointer;
  }
`;

export const TopBar = styled.div(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.darkGray};
    color: ${theme.colors.white};

    div {
      max-width: 140rem;
      padding: ${theme.spacings.extraSmall} 0.8rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        list-style: none;
        display: flex;

        li {
          display: inline-block;

          a {
            display: flex;

            color: ${theme.colors.white};

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }

      .profileLogin {
        li {
          margin: 0 2px;
          font-size: 1.4rem;

          & + li {
            border-left: 2px solid ${theme.colors.white};
            padding-left: 2px;
          }
        }
      }
    }
  `,
);

export const MainBar = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.primary};
    box-shadow: 0 4px 10px -2px ${theme.colors.text};
    height: ${theme.spacings.extraLarge};

    .mainBarContent {
      max-width: 140rem;
      margin: 0 auto;
      color: ${theme.colors.white};

      .sideBar {
        #check {
          display: none;

          &:checked {
            & ~ .darkBackground {
              display: block;
            }

            & ~ .sideBarContent {
              transform: translateX(300px);
            }

            & ~ .openSideBar {
              display: none;
            }
          }
        }

        .menuLabel {
          cursor: pointer;
          padding: ${theme.spacings.small};
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            margin-left: ${theme.spacings.small};
          }
        }

        .openSideBar {
          position: absolute;

          span {
            @media only screen and (max-width: 768px) {
              display: none;
            }
          }
        }

        .sideBarContent {
          position: absolute;
          height: 100vh;
          width: 300px;
          left: -300px;
          transition: all 0.2s linear;
          z-index: 2;
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};

          .closeSideBar {
            float: left;

            svg > path {
              stroke: ${theme.colors.text};
            }
          }

          .searchSideBar {
            margin-top: 45px;
            padding: ${theme.spacings.extraSmall};

            form {
              background-color: ${theme.colors.white};
              padding-right: ${theme.spacings.extraSmall};

              input {
                width: 100%;
                padding: ${theme.spacings.small};
                padding-right: ${theme.spacings.medium};
                background: url('/assets/find.png') no-repeat center right;
                border: none;
              }
            }
          }

          ul {
            height: calc(100vh - 130px);
            overflow-y: auto;

            /**START Scrollbar */
            scrollbar-width: thin;
            scrollbar-color: red yellow;

            /* Works on Firefox */
            scrollbar-width: thin;
            scrollbar-color: ${theme.colors.gray3} rgba(0, 0, 0, 0.5);

            /* Works on Chrome, Edge, and Safari */
            ::-webkit-scrollbar {
              width: 6px;
            }

            ::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.5);
            }

            ::-webkit-scrollbar-thumb {
              background-color: ${theme.colors.gray3};
              border-radius: 20px;
              border: 3px solid rgba(0, 0, 0, 0.5);
            }
            /**END Scrollbar */

            li {
              padding: ${theme.spacings.small};
              font-size: 1.6rem;
              border-bottom: 1px solid ${theme.colors.text};

              a {
                color: ${theme.colors.text};
                display: flex;
                align-items: center;

                &:hover {
                  color: ${theme.colors.black};
                }

                &.login {
                  color: ${theme.colors.primary};
                  font-weight: bold;

                  span {
                    color: ${theme.colors.text};
                    font-weight: 400;
                    font-size: 1.3rem;
                  }
                }

                svg {
                  margin-right: ${theme.spacings.extraSmall};
                }
              }
            }
          }
        }

        .darkBackground {
          display: none;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: ${theme.colors.blackScreen};
          z-index: 1;
        }
      }

      .home {
        display: block;
        width: 70px;
        margin: 0 auto;
        padding-top: 3px;
        font-size: ${theme.font.sizes.extraLarge};
        line-height: 1;
        font-weight: bold;
        color: ${theme.colors.white};

        @media only screen and (max-width: 460px) {
          width: 57px;
          padding-top: 7px;
          font-size: 3.6rem;
        }
      }

      .searchMainBar {
        position: relative;
        margin-top: -49px;
        margin-right: ${theme.spacings.small};

        @media only screen and (max-width: 768px) {
          display: none;
        }

        form {
          position: absolute;
          top: 9px;
          right: 0;
          padding-right: 8px;
          background-color: ${theme.colors.darkBlue};

          input {
            background: url('/assets/find.png') no-repeat center right;
            padding: ${theme.spacings.small};
            padding-right: ${theme.spacings.medium};
            border: none;
            width: 85px;
            color: ${theme.colors.white};
            -webkit-transition: all 0.5s linear;
            transition: all 0.5s linear;

            &:focus {
              width: 220px;
            }
          }
        }
      }
    }
  `,
);

export const BottomBar = styled.nav(
  ({ theme }) => css`
    background-color: ${theme.colors.gray1};
    text-align: center;
    padding-top: 78px;

    @media only screen and (max-width: 768px) {
      display: none;
    }

    ul {
      list-style: none;
      padding: 0 0 15px 15px;

      li {
        display: inline-block;
        margin: 15px 15px 0 0;

        a {
          text-transform: uppercase;
          font-weight: bold;
          color: ${theme.colors.text};
          letter-spacing: 0.7px;

          &:hover {
            color: ${theme.colors.black};
          }
        }
      }
    }
  `,
);
