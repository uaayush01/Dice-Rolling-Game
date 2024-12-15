import styled from 'styled-components'

 export const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  border:1px solid transparent;
  background: #000000;
  border-radius: 50px;
  color:white;
  font-size: 16px;
  transition: 0.4s background ease-in-out;
   cursor: pointer;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in-out;
  }
`;
export const OutlineButton = styled(Button)`
   background-color: white;
   border: solid 2px black;
   color: black;
   cursor: pointer;
  &:hover{
    background-color: black;
    border: 1px solid black;
    color: white;
  }
`;