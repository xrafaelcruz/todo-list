import styled from 'styled-components'

type TitleProps = {
  completed: boolean
}

export const Item = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 16px;

  &:nth-child(even) {
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`

export const Title = styled.span<TitleProps>`
  color: ${({ theme, completed }) =>
    completed ? theme.colors.green : theme.colors.gray};
  font-size: 2rem;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  transition: all 250ms;
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`
