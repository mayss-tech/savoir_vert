import './App.css';
import NavBar from './component/navBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Devis from './component/devis/devis';
import Contact from './component/contact/contact';
import Home from './component/home/home';
import Footer from './component/footer/Footer';
import Fourniture from './component/fourniture/Fourniture';
import ImgHome from './component/carrousel/ImgHome';
import CartItems from './component/cartItems/CartItems';

function App() {
  return (<BrowserRouter>
    <div>
      <Route exact path="/" component={(props)=> <Home {...props}/>}/>
      <NavBar/>
      <Route exact path="/contact"  component={(props)=> <Contact {...props}/>}/>
      <Route exact path="/devis"  component={(props)=> <Devis {...props}/>}/>
      <Route exact path="/fourniture" component={(props)=><Fourniture {...props}/>}/>
      <Route exact path="/cartItems" component={(props)=><CartItems {...props}/>}/>
      {/* <Footer/> */}
    </div>
    </BrowserRouter>);
}
export default App;
