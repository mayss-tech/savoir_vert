import axios from 'axios';

import { FETCH_PLANTS_BEGIN,
    FETCH_PLANTS_FAILURE,
    FETCH_PLANTS_SUCCESS ,SEARCH_PLANTS} from "../action-types/Action-type";

export const fetchPlantBeginAsync = (id) => async (dispatch,getState) => {
    dispatch({
        type: FETCH_PLANTS_BEGIN,
    });
    try {
        const fournitureDetails = await axios.post('/fourniture/fournitureDetails',{id});
        dispatch({
            type:FETCH_PLANTS_SUCCESS ,
            payload: fournitureDetails.data,
        })
    }catch (error){
        dispatch({
            type: FETCH_PLANTS_FAILURE,
            payload:error
        });
}
localStorage.setItem("plants", JSON.stringify(getState().plantsReducer.fournitureDetails))
};
export const searchPlants=(text)=>(dispatch)=>{
    dispatch({
        type: SEARCH_PLANTS,
        payload:text
    })
};