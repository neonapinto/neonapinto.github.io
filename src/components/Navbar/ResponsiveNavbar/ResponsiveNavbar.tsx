import {useState, FC} from 'react';
import Navbar from './../../../components/Navbar/Navbar';
import Sidebar from './../../../components/Navbar/Sidebar/Sidebar';


const ResponsiveNavbar:FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () =>{
     setIsOpen(!isOpen);
    }
    
    let open;
    if(isOpen){
        open = <Sidebar toggle={toggle}/>;
    }  

    return (
        <>
            <Navbar toggle = {toggle} isOpen={isOpen}/>
            {open}
        </>
    )
}

export default ResponsiveNavbar;