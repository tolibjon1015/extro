import Draver from './components/draver/Draver'
import Input from './components/input/Input'
import Logo from './components/logo/Logo'
import NavLink from './components/navLink/NavLink'
import "./navbar.css"

function Navbar() {
    return <div className='child'>
        <div className='flexbox' id='first'>
            <Logo />
            <Input />
            <NavLink />
            <div className='none'>
                <Draver />
            </div>
        </div>
    </div>
}

export default Navbar