import { Container, MainHeader } from "./styles/header"
import { Button,  } from '../index'


export default function Header({title, showTask, showAdd }) {

    return (
        <Container>
           <MainHeader> {title} </MainHeader> 
           <Button text={showAdd ? "Close": "Add"} color={showAdd ? "red": 'green'} onClick={showTask}/>
        </Container>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}