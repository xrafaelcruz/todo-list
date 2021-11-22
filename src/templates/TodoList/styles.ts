import styled from 'styled-components'

export const Main = styled.main`
  padding: 40px;
  max-width: 1024px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
  }
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4.8rem;
  margin-bottom: 60px;
  text-align: center;
`
