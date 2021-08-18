import { AboutContainer } from "./styles/about"
import { Link } from 'react-router-dom'

export default function About() {

    return (
        <AboutContainer>
            <h4>Version 1.0.1</h4>
            <Link to='/'>Go back</Link>
        </AboutContainer>
    )
}
