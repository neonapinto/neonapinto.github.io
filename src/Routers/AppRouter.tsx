import About from './../pages/About';
import Contact from './../pages/Contact';
import Home from './../pages/Home';
import Projects from './../pages/Projects';
import { Element} from 'react-scroll';

export const AppRouter = () => {
    return(
        <>
        <Element name='home' className='element no-padding'>
          <Home/>
        </Element>
        <Element name='about' className='element no-padding'>
          <About/>
        </Element>
        <Element name='projects' className='element no-padding height-overflow'>
          <Projects/>
        </Element>
        <Element name='contact' className='element no-padding contact-container'>
          <Contact/>
        </Element>
    </>
    )
}