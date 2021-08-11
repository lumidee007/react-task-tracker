import styled from 'styled-components';


 export const TaskContainer = styled.div`
        border-left: ${({reminder}) => reminder ? "5px solid green" : ""};
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
 `
   
  
  export const TaskHeader = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  export const TaskPara = styled.p`
`
    
  