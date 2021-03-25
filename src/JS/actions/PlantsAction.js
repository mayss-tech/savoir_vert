import axios from 'axios';
import { FETCH_PLANTS_BEGIN,
    FETCH_PLANTS_FAILURE,
    FETCH_PLANTS_SUCCESS ,SEARCH_PLANTS} from "../action-types/Action-type";

export const fetchPlantBeginAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_PLANTS_BEGIN,
    });
    try {
        const plants = await axios.get('/fourniture/newFourniture');
        dispatch({
            type:FETCH_PLANTS_SUCCESS ,
            payload: plants.data,
        })
    }catch (error){
        dispatch({
            type: FETCH_PLANTS_FAILURE,
            payload:error
        });
}};
export const searchPlants=(text)=>(dispatch)=>{
    dispatch({
        type: SEARCH_PLANTS,
        payload:text
    })
};