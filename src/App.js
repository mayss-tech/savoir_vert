import './App.css';
import NavBar from './component/navBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Devis from './component/devis/devis';
import Contact from './component/contact/contact';
import Home from './component/home/home';
import Footer from './component/footer/Footer';
import Fourniture from './component/fourniture/Fourniture';
import CategoryAff from './component/fourniture/CategoryAff';
import CartCondition from './component/cartItems/CartCondition';
import Order from './component/cartItems/Order';
import UserRegister from './component/user/UserRegister';
import UserLogin from './component/user/UserLogin';
import ConfirmOrder from './component/order/ConfirmOrder';

function App() {
  return (<BrowserRouter>
    <div>
      <Route exact path="/" component={(props)=> <Home {...props}/>}/>
      <Route exact path="/contact"  component={(props)=> <Contact {...props}/>}/>
      <Route exact path="/devis"  component={(props)=> <Devis {...props}/>}/>
      <Route exact path="/fourniture"  component={(props)=> <CategoryAff {...props}/>}/>
      <Route exact path="/fourniture/:id" component={(props)=><Fourniture {...props}/>}/>
      <Route exact path="/cartItems" component={(props)=><CartCondition {...props}/>}/>
      <Route exact path="/order" component={(props)=><Order {...props}/>}/>
      <Route exact path="/confirmOrder" component={(props)=><ConfirmOrder {...props}/>}/>
      {/* <Route exact path="/register" component={(props)=><UserRegister  {...props}/>}/>
      <Route exact path="/login" component={(props)=><UserLogin  {...props}/>}/> */}
      <NavBar/>
      {/* <Footer/> */}
    </div>
    </BrowserRouter>);
}
export default App;
