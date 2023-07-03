import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    position: relative;
    overflow: hidden;
    border: 1px solid ${theme.colors.gray1};
    border-radius: 3px;

    .postCardImage {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: transform 0.3s ease-in-out;

      &.enlarge {
        transform: scale(1.1);
      }
    }

    .content {
      position: relative;
      height: 100%;
      padding: 4rem ${theme.spacings.small};
      background-color: rgba(0, 0, 0, 0.4);
      color: ${theme.colors.white};

      span {
        position: absolute;
        line-height: 1;

        &.topic {
          top: ${theme.spacings.small};
        }

        &.elapsedTime {
          bottom: ${theme.spacings.small};
        }
      }

      h2,
      h3 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      h2 {
        margin-top: ${theme.spacings.large};
        color: ${theme.colors.white};
      }

      h3 {
        margin-top: ${theme.spacings.small};
        font-size: 1.6rem;
        font-weight: 400;
      }

      &.noImage {
        background-color: ${theme.colors.white};
        color: ${theme.colors.text};

        .topic,
        h2 {
          color: ${theme.colors.primary};

          &:hover {
            color: ${theme.colors.darkBlue};
          }
        }
      }
    }
  `,
);
