import styled from 'styled-components'

export const Form = styled.form`
 margin-bottom: 40px;
`

export const FormContainer = styled.div`
max-width: 500px;
margin: 20px 0;
`

export const FormLabel = styled.label`
display: block;
margin-left:5px;
`

export const FormInput = styled.input`
width: 100%;
height: 40px;
margin: 5px;
padding: 3px 7px;
font-size: 17px;
border-radius: 7px;
`

export const FormInputReminder = styled.input`
 width: 15px;
 height: 15px;
 border-radius: 5px;
`

export const FormReminder = styled(FormContainer)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FormSummit = styled.input`
  display: block;
  width: 100%;

  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(0.98);
  }
`



