import React from 'react';
import panier from '../pictures/panier.png';
import {useSelector} from 'react-redux';
import CartItemsMap from './CartItemsMap';
import CartItemsAff from './CartItemsAff';
const CartCondition = (props) => {
    const cartItems = useSelector(state => state.cartItemsReducer.cartItems);
    return (
        <div>
            {cartItems.length==0?
            <div>
                <img src={panier}
                className="panierImg" alt="panier"/>
                <h3 className="panier_title">Votre panier est vide</h3>
            </div>:
           
        <div> <CartItemsAff {...props} /> 
        </div>
            }
        </div>
    )
}
export default CartCondition;
