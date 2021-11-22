import { ReactNode } from 'react'

import * as S from './styles'

export type ButtonProps = {
  onClick?: () => void
  color?: 'warning' | 'primary'
  size?: 'small' | 'normal'
  children: ReactNode
  type?: 'button' | 'submit'
}

const Button = ({
  onClick,
  color,
  size = 'normal',
  type = 'button',
  children
}: ButtonProps) => (
  <S.Button onClick={onClick} color={color} size={size} type={type}>
    {children}
  </S.Button>
)

export default Button
