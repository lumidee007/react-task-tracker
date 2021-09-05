import styled from 'styled-components';


export const Btn = styled.button `
    display: inline-block;
    background: ${({color}) => color ? color : "#000"};
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
`