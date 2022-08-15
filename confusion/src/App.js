import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

// components
import Menu from './components/MenuComponent';
function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'> 
        <NavbarBrand href='/'>
            Ristoranate Con Fusion
          </NavbarBrand>
        </div>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
