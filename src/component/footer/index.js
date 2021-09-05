import { Link } from "react-router-dom"
import { FooterContainer} from "./styles/footer"

export default function Footer() {

    return (
        <FooterContainer>
            <p>Copyright &copy; 2021</p>
            <Link to='/about' className="about">About</Link>
        </FooterContainer>
    )
}
