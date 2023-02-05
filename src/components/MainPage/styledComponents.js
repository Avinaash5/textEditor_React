import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin: 10px;
  font-size: 24px;
  border-style: none;
`
export const BoldButton = styled(StyledButton)`
  color: ${props => (props.bold === true ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled(StyledButton)`
  color: ${props => (props.italic === true ? '#faff00' : '#f1f5f9')};
`

export const UnderLineButton = styled(StyledButton)`
  color: ${props => (props.underline === true ? '#faff00' : '#f1f5f9')};
`

export const StyledTextarea = styled.textarea`
  font-weight: ${props => (props.bold === true ? 'bold' : 'normal')};
  font-style: ${props => (props.italic === true ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.underline === true ? 'underline' : 'normal'};
`
