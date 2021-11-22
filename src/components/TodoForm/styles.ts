import styled from 'styled-components'

export const Form = styled.form`
  align-items: flex-end;
  display: flex;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  margin-bottom: 8px;
`

export const Input = styled.input`
  border: 0;
  border-radius: 3px;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  height: 38px;
  padding: 10px;
`
