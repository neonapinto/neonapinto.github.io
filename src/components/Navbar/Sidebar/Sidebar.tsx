import {FC} from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { IconContext } from 'react-icons';
import NavbarMenu from './../../../components/Navbar/NavbarMenu/NavbarMenu';
import NavbarIcons from './../../../components/Navbar/NavbarIcons/NavbarIcons';


interface ToggleProps{
    toggle:() => void;
}

const Sidebar:FC<ToggleProps>= ({toggle}) => {
  return (
    <aside className='sidebar-container'>
        <p className='navbar-logo'>NP</p>
        <IconContext.Provider value={{className: 'sidebar-icon sidebar-icon-close' }} >
            <AiOutlineClose onClick={toggle}/>
        </IconContext.Provider>
        <NavbarIcons/>
        <div className='sidebar-menus'>
            <NavbarMenu toggle={toggle}/>
        </div>
    </aside>
  )
}

export default Sidebar;