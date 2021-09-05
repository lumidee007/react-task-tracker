import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: background-color: rgba(241, 237, 237, 0.815);
  
  }
  
  .container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    font-family: "Trirong", serif;
    padding: 30px;
    border-radius: 5px;
    background-color: rgba(241, 237, 237, 0.815);
    background-color: darkorange;
    box-shadow: 2px 3px 9px 3px rgba(33,108,6,0.78);
  }

`