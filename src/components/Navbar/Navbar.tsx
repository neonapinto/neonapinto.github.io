import {FC} from 'react';
import { IconContext } from 'react-icons';
import {GiHamburgerMenu} from 'react-icons/gi';
import NavbarMenu from './../../components/Navbar/NavbarMenu/NavbarMenu';
import NavbarIcons from './NavbarIcons/NavbarIcons';

interface ToggleProps{
    toggle:() => void,
    isOpen: boolean
}


const Navbar:FC<ToggleProps> = ({toggle, isOpen}) =>{
    return(
        <>
        <div className='navbar'>
            <img src='./img/logo.png' className='navbar-logo' alt="NP"/>
            <div className='navbar-tabs'>
                <NavbarMenu toggle={()=> {}}/>
            </div>
            <NavbarIcons/>
            <IconContext.Provider  value={{className: 'navbar-mobile-icon' }}>
                <GiHamburgerMenu size={25} onClick={toggle}/>
            </IconContext.Provider>
        </div>

        </>
    )
}

export default Navbar;