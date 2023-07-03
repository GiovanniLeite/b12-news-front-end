import styled, { css } from 'styled-components';

export const Container = styled.main(
  ({ theme }) => css`
    .mainSection {
      @media only screen and (max-width: 1000px) {
        padding: ${theme.spacings.medium} ${theme.spacings.small};
      }

      .searchBar {
        padding-bottom: ${theme.spacings.extraSmall};
        margin-bottom: ${theme.spacings.small};
        border-bottom: 1px solid ${theme.colors.gray2};

        form {
          padding-right: ${theme.spacings.extraSmall};
          border: ${theme.spacings.extraSmall} solid ${theme.colors.primary};
          border-radius: 3px;
          background-color: ${theme.colors.white};

          input {
            width: 100%;
            padding: ${theme.spacings.small};
            padding-right: ${theme.spacings.medium};
            background: url('/assets/find.png') no-repeat center right;
            border: none;
          }
        }

        p {
          padding: ${theme.spacings.extraSmall} 0;

          span {
            color: ${theme.colors.primary};
            font-weight: bold;
          }
        }
      }
    }
  `,
);
