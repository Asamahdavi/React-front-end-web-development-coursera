
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import data from "../src/data/dish.json"
// components
import MenuComponent from './components/MenuComponent';
function App() {
  const dishes = data;
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'> 
        <NavbarBrand href='/'>
            Ristoranate Con Fusion
          </NavbarBrand>
        </div>
        </Navbar>
        <MenuComponent dishes={dishes} data={data}/>
    </div>
  );
}

export default App;
