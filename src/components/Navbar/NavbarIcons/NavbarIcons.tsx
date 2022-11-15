import { TiSocialLinkedin } from 'react-icons/ti';
import {RiGithubLine} from 'react-icons/ri';
import { IconContext } from 'react-icons';


const NavbarIcons = () => {
  return (
    <div className='navbar-icons'>
        <IconContext.Provider value={{className: 'navbar-icons-linkedin' }} >
            <TiSocialLinkedin size={25} onClick={() => {window.open('https://www.linkedin.com/in/neona-pinto/','_blank')}}/>
        </IconContext.Provider>
        <IconContext.Provider value={{className: 'navbar-icons-github' }}>
            <RiGithubLine size={24} onClick={() => {window.open('https://github.com/neonapinto/', '_blank')}}/>
        </IconContext.Provider>
    </div>
  )
}

export default NavbarIcons;