import {FETCH_PLANTS_BEGIN,
        FETCH_PLANTS_FAILURE,
        FETCH_PLANTS_SUCCESS, 
        SEARCH_PLANTS} from "../action-types/Action-type";

const initialState={
    loading:false,
    error:null,
    text:'',
    fournitureDetails:JSON.parse(localStorage.getItem('plants') )|| []
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
                fournitureDetails:payload,
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