import styled, { keyframes } from 'styled-components'

export const Container= styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 6px;
    margin-right: -6px;
`

const fadeIn = keyframes`
0% {
    opacity: 0;
    color: red;
}
100% {
    opacity: 1;
    color: cream;
}
`

export const MainHeader= styled.h1 `
animation: 5s ${fadeIn} ease-in-out;
color: green; 
`
