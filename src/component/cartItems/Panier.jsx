import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { searchPlants } from '../../JS/actions/PlantsAction';

const Panier = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItemsReducer.cartItems)
    return (<div className="panier_bar">
        <div className="search_plant">
        <i className="fas fa-search"></i>
             <input type="text"
              placeholder="Chercher plantes..."
              onChange={(e)=>dispatch(searchPlants(e.target.value))}/>  
             
                </div>
  <div onClick={()=>props.history.push('/cartItems')} className="panier">
            <p className="panier_number">{cartItems.length}</p>
            <i className="fas fa-shopping-cart"></i>
            </div>
            
    </div>
          
            
        
    )
}
export default  withRouter(Panier); 
