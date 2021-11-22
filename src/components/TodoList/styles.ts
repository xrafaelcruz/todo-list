import styled from 'styled-components'

export const List = styled.ul`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 40px 0;
`
