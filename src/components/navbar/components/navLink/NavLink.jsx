import React from 'react'
import "../../navbar.css"
import { Link } from 'react-router-dom'

function NavLink() {
    return (
        <div className='navlink'>
            <Link className='nav' to="/">Home</Link>
            <Link className='nav' to="/about">About</Link>
            <Link className='nav' to="/contact">Contact</Link>
            <Link className='nav' to="/me">me</Link>
        </div>
    )
}

export default NavLink