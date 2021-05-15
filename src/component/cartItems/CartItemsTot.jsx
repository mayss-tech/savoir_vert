import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { totalCartItem } from '../../JS/actions/cartItemsActions';
import { withRouter } from 'react-router-dom';
import UserLogin from '../user/UserLogin';
const CartItemsTot = () => {
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector(state => state.cartItemsReducer.cartItems);
    const subTot = () => {
        if (Number(cartItems.reduce((a, b) => a + b.price * b.qtn, 0)) === 0) {
          setTotal(0);
        } else
          setTotal(Number( cartItems.reduce((a, b) => a + b.price * b.qtn, 0))+7);
      };
      useEffect(() => {
        subTot()
      }, [cartItems]);
      useEffect(() => {
        localStorage.setItem('total', JSON.stringify(total))
      }, [total]);
    return (
              <div className="cartItemsTot">
              <div>
      <UserLogin trigger={isOpen}/>
    </div>
          <div>
          <h5>Total
            {" "}
            {Number(cartItems.reduce((a, b) => a + b.price * b.qtn, 0))} dt
          </h5>
          </div>
         <div>
         <h5>Frais de livraison : 7 dt</h5>
          <h5>
            Prix à payer :{" "}
            {total} dt
          </h5>
          <button
            className="btn_cart"
            onClick={() => { setIsOpen(true) 
              dispatch(totalCartItem (total))}}>
            <b>Commander</b>
          </button>
          </div>
      </div>
    )
}
export default withRouter( CartItemsTot);
