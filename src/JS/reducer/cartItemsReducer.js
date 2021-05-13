import { ADD_ITEMS, DECREASE_ITEMS, INCREASE_ITEMS, REMOVE_ITEMS, TOTAL_ITEMS,  } from "../action-types/Action-type";

const initialState={
    cartItems:[],
    qtn:0
}
const cartItemsReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_ITEMS:
            const item = payload;
            const isExist = state.cartItems.find(el=>el.id===item.id)
            if(!isExist){
                return{
                ...state,
                cartItems:[...state.cartItems,item]   
                }
            }
        case INCREASE_ITEMS:
            return{
                ...state,
                cartItems : state.cartItems.map(el=>el.id === payload.id
                    ? {...el, qtn: el.qtn+1} : el)
            }
        case DECREASE_ITEMS:
            return{
                ...state,
                cartItems : state.cartItems.map(el=>el.id === payload.id
                    ? {...el, qtn: el.qtn-1} : el)
            }
        case REMOVE_ITEMS:
            return{
                ...state,
                cartItems: state.cartItems.filter(el=>el.id !== payload)
            }
        case TOTAL_ITEMS:
            return{
                ...state,
                tot:payload
            }
        default:
            return state;
    }
}
export default cartItemsReducer;