import styled from 'styled-components';


 export const TaskContainer = styled.div`
        border-left: ${({reminder}) => reminder ? "5px solid green" : ""};
        max-width: 100%;
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        box-shadow: 1px 2px 2px 0px rgba(124,207,23,0.75);
        border-radius: 5px;
        
        &:hover {
          cursor: pointer;
        }
 `
   
  
  export const TaskHeader = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  export const TaskPara = styled.p`
`
    
  