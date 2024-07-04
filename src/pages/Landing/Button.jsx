import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider';

const Button = (props) => {
    const { currentColor } = useStateContext();
    return (
        <Link to="/login" className={props.className} style={{ backgroundColor: currentColor }}>{props.title}</Link>
    )
}

export default Button