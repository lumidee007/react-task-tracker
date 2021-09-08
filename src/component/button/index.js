import { Btn } from "./styles/button"
import PropTypes from 'prop-types'

export default function Button({ text, color, onClick }) {
    return (
        <Btn color={color} onClick={onClick}>{text}</Btn>   
    )
}

Button.defaultProps = {
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color:  PropTypes.string,
    onClick: PropTypes.func,
}

