import React from 'react'
import "../../navbar.css"
import Img from '../../../../img/logo.png'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className='image'>
            <Link to="/"><img src={Img} alt="namoz vaqti" /></Link>
        </div>
    )
}

export default Logo