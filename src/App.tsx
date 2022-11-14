import {AppRouter} from './Routers/AppRouter';
import './App.css';
import ResponsiveNavbar from './components/Navbar/ResponsiveNavbar/ResponsiveNavbar';
import './styles/main.css';
import "animate.css/animate.min.css";

function App() {
  return (
    <>
      <ResponsiveNavbar/>
        <div className='body-container'>
          {AppRouter()}
        </div>
      </>
  );
}

export default App;
