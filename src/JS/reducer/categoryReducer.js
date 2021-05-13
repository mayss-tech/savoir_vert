import { FETCH_CATEGORY_BEGIN, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_SUCCESS } from "../action-types/Action-type";

const initialState={
    category:JSON.parse(localStorage.getItem('category') )|| [],
    loading:false,
    error:null,
};
const categoryReducer = (state=initialState, {type,payload})=>{
    switch (type) {
        case FETCH_CATEGORY_BEGIN:
            return{
                ...state,
                loading:true
            }
        case FETCH_CATEGORY_SUCCESS:
            return{
                ...state,
                category:payload,
                loading:false,
            }
        case FETCH_CATEGORY_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false
            }
        default:
            return state;
    }
};
export default categoryReducer;