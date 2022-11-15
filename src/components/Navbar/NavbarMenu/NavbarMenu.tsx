import { Link} from 'react-scroll';

interface ToggleProps{
  toggle:() => void
}

const NavbarMenu = ({toggle} : ToggleProps) => {
  return (
    <>
            <Link href="#home" activeClass='navbar-active' to='home' spy={true} smooth={true}  duration={500} offset={-60} onClick={toggle}>
                Home
            </Link>
            <Link href="#about" activeClass='navbar-active' to='about' spy={true} smooth={true}  duration={500} offset={-60} onClick={toggle}>
                About
            </Link>
            <Link href="#projects" activeClass='navbar-active' to='projects' spy={true} smooth={true}  duration={500} offset={-60} onClick={toggle}>
                Projects
            </Link>
            <Link href="#contact" activeClass='navbar-active' to="contact" spy={true} smooth={true}  duration={500} offset={-60} onClick={toggle}>
                Contact
            </Link>
    </>
  )
}

export default NavbarMenu;