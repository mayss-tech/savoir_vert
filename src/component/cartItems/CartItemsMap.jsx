import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { decreaseItem, increaseItem, removeItem} from '../../JS/actions/cartItemsActions';
import CartItemsTot from './CartItemsTot';

const CartItemsMap = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItemsReducer.cartItems);
    return   ( 
        <div className="page">
            {       cartItems.map(el=>
                    <div key={el.id} className="cartItems">
                        <img src={el.image} alt="cartImg" className="cartItemsImg"/>
                        <h5>{el.name} </h5>
                        <div>
                        <i className="fas fa-chevron-up"
                        onClick={()=>dispatch(increaseItem(el))}></i>
                        <h5>{el.qtn}</h5>
                        <i className="fas fa-chevron-down"
                        onClick={()=>{el.qtn===1?
                            dispatch(removeItem(el.id)):
                            dispatch(decreaseItem(el))}}
                            ></i>
                        </div>
                        {el.qtn===1 ? <h5>{el.price} dt</h5>:<h5>{(el.price)*(el.qtn)} </h5>}
                        <i className="fas fa-trash-alt"
                        onClick={()=>dispatch(removeItem(el.id))}></i>
                    </div>
                    )
            }
             <hr/>
            <CartItemsTot {...props} />
        </div>
    )
}
export default CartItemsMap;
