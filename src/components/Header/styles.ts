import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;

  div#fixedHeader {
    position: fixed;
    width: 100%;
  }

  a {
    cursor: pointer;
  }
`;

export const TopBar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.darkGray};
    z-index: 2;

    div {
      margin: 0 auto;
      max-width: 140rem;
      overflow: hidden;
      padding: ${theme.spacings.extraSmall} 8px;

      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          opacity: 0.8;
        }
      }

      ul.socialMedia {
        list-style: none;
        float: left;

        @media only screen and (max-width: 700px) {
          margin-top: 3px;
        }

        li {
          display: inline-block;
        }
      }

      ul.subscribeLogin {
        list-style: none;
        float: right;

        li {
          display: inline-block;
          margin-left: 2px;
          margin-right: 2px;
          color: #fff;

          a {
            font-size: 80%;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  `}
`;

export const MainBar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    box-shadow: 0 4px 10px -2px #000;


    @media only screen and (max-width: 700px) {
      height: 50px;
    }

    div {
      max-width: 140rem;
      margin: 0 auto;
      color: #fff;

      div#menuSideBar {
        input#check {
          display: none;

          &:checked {
            & ~ label#darkBackground {
              display: block;
            }

            & ~ nav#sideBar {
              transform: translateX(300px);
            }

            & ~ label#openMenuLabel {
              display: none;
            }
          }
        }

        label.menuLabel {
          cursor: pointer;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            margin-left: 10px;
          }
        }

        label#openMenuLabel {
          position: absolute;

          span {
            @media only screen and (max-width: 768px) {
              display: none;
            }
          }
        }

        nav#sideBar {
          background-color: ${theme.colors.background};
          height: 100vh;
          width: 300px;
          position: absolute;
          transition: all 0.2s linear;
          left: -300px;
          z-index: 4;
          color: ${theme.colors.primary};

          @media only screen and (max-width: 700px) {
            margin-top: 3px;
          }

          @media only screen and (max-width: 460px) {
            margin-top: 0;
          }

          label#closeMenuLabel {
            float: left;

            svg > path {
              stroke: ${theme.colors.primary};
            }
          }

          div#searchSideBar {
            margin-top: 45px;
            padding: 5px;

            div {
              background-color: #fff;
              padding-right: 5px;


              input {
                padding: 10px;
                width: 100%;
                background: url('/assets/find.png')
                  no-repeat center right;
                border: none;

                &:focus {
                  outline: none;
                }
              }
            }
          }

          ul {
            height: calc(100vh - 130px);
            overflow-y: auto;


            li.link {
              padding: 10px;
              font-size: 12pt;
              transition: all 0.2 linear;
              border-bottom: 1px solid #494950;

              a {
                color: ${theme.colors.darkGray};
                display: flex;

                &:hover {
                  opacity: 0.8;
                }

                &.login {
                  color: ${theme.colors.darkBlue}
                  font-weight: bold;
                  align-items: center;

                  span {
                    color: ${theme.colors.darkGray};
                    font-weight: 400;
                    font-size: 80%;
                  }
                }

                svg {
                  margin-right: 5px;
                }
              }
            }
          }
        }

        label#darkBackground {
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1;
          display: none;
        }
      }

      div#home {
        margin: 0 auto;
        width: 70px;

        @media only screen and (max-width: 460px) {
          width: 57px;
          padding-top: 4px;
        }

        a {
          font-size: 250%;
          font-weight: bold;
          color: #fff;

          @media only screen and (max-width: 460px) {
            font-size: 200%;
          }
        }
      }

      div#searchBar {
        position: relative;
        margin-top: -53px;
        margin-right: 10px;
        padding-right: 10px;

        @media only screen and (max-width: 768px) {
          display: none;
        }

        form {
          position: absolute;
          top: 9px;
          right: 0;
          padding-right: 8px;
          background-color: rgb(0, 31, 72);

          input#search {
            background: url('/assets/find.png')
              no-repeat center right;
            padding: 10px;
            padding-right: 20px;
            border: none;
            width: 85px;
            outline: none;
            color: #fff;
            -webkit-transition: all 0.5s linear;
            transition: all 0.5s linear;

            &:focus {
              width: 220px;
            }
          }
        }
      }
    }
  `}
`;

export const BottomBar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    text-align: center;
    padding-top: 85px;

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
          text-decoration: none;
          text-transform: uppercase;
          font-weight: bold;
          color: ${theme.colors.primary};
          letter-spacing: 0.7px;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  `}
`;
