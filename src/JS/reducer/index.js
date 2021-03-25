  
import { combineReducers } from 'redux';
import plantsReducer from './PlantsReducer';
import cartItemsReducer from './cartItemsReducer';
export default combineReducers({
   plantsReducer, cartItemsReducer
});
