import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { decreaseItem, increaseItem, removeItem,totalCartItem } from '../../JS/actions/cartItemsActions';
const CartItems = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItemsReducer.cartItems);
    const [total, setTotal] = useState(0);
    const subTot = () => {
        if (Number(cartItems.reduce((a, b) => a + b.price * b.qtn, 0)) === 0) {
          setTotal(0);
        } else
          setTotal(Number( cartItems.reduce((a, b) => a + b.price * b.qtn, 0))+7);
      };
      useEffect(() => {
        subTot()
      }, [cartItems]);
    return (
        
        <div>
            {
                cartItems.map(el=>
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
                        onClick={()=>dispatch(removeItem(el._id))}></i>
                    </div>
                    )
            }

            <div>
          <h5>
            {" "}
            {Number(cartItems.reduce((a, b) => a + b.price * b.qtn, 0))} dt
          </h5>
          <h5>Frais de livraison : 7 dt</h5>
          <h5>
            Prix à payer :{" "}
            {total} dt
          </h5>
          <button
            className="btn_cart"
            onClick={() => {props.history.push("/order");
              dispatch(totalCartItem(total))
            }}
          >
            <b>Commander</b>
          </button>
        </div>
        </div>
    )
}
export default CartItems;
