import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
const ConfirmOrder = () => {
    const TTC =useSelector((state)=>state.cartItemsReducer.tot)
    const cartItems = useSelector((state) => state.cartItemsReducer.cartItems);
    return (
        <div className="order_page">
            <p>Comande N° {Date.now()}</p>
        <p> achats </p>
        
           <p> total :  {TTC} dt</p>
        </div>
    )
}

export default ConfirmOrder
