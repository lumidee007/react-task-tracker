import { Container, MainHeader } from "./styles/header"
import {useLocation} from 'react-router-dom'
import { Button } from '../index'


export default function Header({title, showTask, showAdd }) {

    const location = useLocation()

    return (
        <Container>
           <MainHeader> {title} </MainHeader> 
           {location.pathname === '/' && <Button text={showAdd ? "Close": "Add"} color={showAdd ? "red": 'green'} onClick={showTask}/>}
        </Container>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}