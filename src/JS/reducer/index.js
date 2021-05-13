import { combineReducers } from 'redux';
import plantsReducer from './PlantsReducer';
import cartItemsReducer from './cartItemsReducer';
import progressBar from './progressBar';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
export default combineReducers({
   plantsReducer, cartItemsReducer,progressBar,
   categoryReducer,userReducer
});
