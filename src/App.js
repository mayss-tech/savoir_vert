import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Devis from './component/devis/devis';

function App() {
  return (<BrowserRouter>
    <div>
      <NavBar/>
      <Route exact path="/devis"  component={(props)=> <Devis {...props}/>}/>
    </div>
    </BrowserRouter>);
}

export default App;
