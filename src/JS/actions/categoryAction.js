import { FETCH_CATEGORY_BEGIN, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_SUCCESS } from "../action-types/Action-type";
import axios from 'axios';
export const fetchCategoryAsync = () => async (dispatch,getState) => {
    dispatch({
        type: FETCH_CATEGORY_BEGIN,
    });
    try {
        const category = await axios.get('/category/Category');
        dispatch({
            type:FETCH_CATEGORY_SUCCESS,
            payload: category.data,
        })
    }catch (error){
        dispatch({
            type: FETCH_CATEGORY_FAILURE,
            payload:error
        });
}
localStorage.setItem("category", JSON.stringify(getState().categoryReducer.category))
}