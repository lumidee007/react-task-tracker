import { Container } from "./styles/header"
import { Button } from '../index'


export default function Header({title}) {

    const onClick = () => {console.log('Cliked from the header component')}

    return (
        <Container>
           <h1> {title}</h1> 
           <Button text="Add" color='green' onClick={onClick}/>
        </Container>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}