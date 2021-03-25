import {FETCH_PLANTS_BEGIN,
        FETCH_PLANTS_FAILURE,
        FETCH_PLANTS_SUCCESS, 
        SEARCH_PLANTS} from "../action-types/Action-type";

const initialState={
    plants:[],
    loading:false,
    error:null,
    text:''
};
const plantsReducer = (state=initialState, {type,payload})=>{
    switch (type) {
        case FETCH_PLANTS_BEGIN:
            return{
                ...state,
                loading:true
            }
        case FETCH_PLANTS_SUCCESS:
            return{
                ...state,
                plants:payload,
                loading:false,
            }
        case FETCH_PLANTS_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false
            }
        case SEARCH_PLANTS:
            return{
                ...state,
                text:payload
            }
        default:
            return state;
    }
};
export default plantsReducer;