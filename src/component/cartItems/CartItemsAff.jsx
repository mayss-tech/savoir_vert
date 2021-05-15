import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import CartItemsMap from './CartItemsMap';
import Shop from './Shop';

const CartItemsAff = ()=> {
    return (
        <div>
        
            <Shop/>
          <div className="translateBar page3">
          <ProgressBar/>
          </div>
            <CartItemsMap/>
        </div>
    )
}

export default CartItemsAff
