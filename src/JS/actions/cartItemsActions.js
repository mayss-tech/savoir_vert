import { ADD_ITEMS, DECREASE_ITEMS, INCREASE_ITEMS, REMOVE_ITEMS, TOTAL_ITEMS } from "../action-types/Action-type";

export const addItem =(newItem)=>(dispatch,getState)=>{
dispatch({
    type: ADD_ITEMS,
    payload:newItem
})
localStorage.setItem('cartItems', JSON.stringify(getState().cartItemsReducer.cartItems))
};
export const increaseItem =(el)=>(dispatch,getState)=>{
    dispatch({
        type : INCREASE_ITEMS,
        payload:el
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartItemsReducer.cartItems))
};
export const decreaseItem =(el)=>(dispatch,getState)=>{
    dispatch({
        type : DECREASE_ITEMS,
        payload:el
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartItemsReducer.cartItems))
};
export const removeItem = (_id)=>(dispatch)=>{
    dispatch({
        type: REMOVE_ITEMS,
        payload:_id
    })
    localStorage.removeItem('cartItems')
};
export const totalCartItem=(tot)=>(dispatch,getState)=>{
    dispatch({
        type:TOTAL_ITEMS,
        payload:tot
    })
    
};