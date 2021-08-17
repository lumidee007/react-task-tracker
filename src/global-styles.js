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
    border: 1px solid rgb(70, 96, 180);
    padding: 30px;
    border-radius: 5px;
    background-color: rgba(241, 237, 237, 0.815);
    background-color: darkorange;
  }

`