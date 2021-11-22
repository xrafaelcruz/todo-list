import styled, { css } from 'styled-components'
import { ButtonProps } from './'

const styles = {
  sizes: {
    small: css`
      font-size: 1.4rem;
      height: 34px;
      padding: 0 16px;
    `
  },

  colors: {
    warning: css`
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
    `,

    primary: css`
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.gray};
    `
  }
}

export const Button = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.gray};
  border: 0;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: bold;
  height: 38px;
  padding: 0 20px;
  position: relative;
  transition: background 250ms;
  white-space: nowrap;

  &:hover {
    filter: brightness(85%);
  }

  ${({ size }) => {
    if (size === 'small') return styles.sizes.small
  }}

  ${({ color }) => {
    if (color === 'warning') return styles.colors.warning
    if (color === 'primary') return styles.colors.primary
  }}
`
