import React from 'react';
import { nextStep } from '../../JS/actions/progressBar';
import { useSelector,useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import UserProfile from '../user/UserProfile';
const Shop = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItemsReducer.cartItems)    
    return (
        <div  className="panier_bar">
            <UserProfile />
            <div className="panier"
            onClick={()=>{props.history.push('/cartItems')
                        dispatch(nextStep (40))}}>
           
          
               <div>
           <p className="panier_number">{cartItems.length}</p>
            <i className="fas fa-shopping-cart"></i></div>
            <div><p><b>Voir panier</b></p>
           </div> 
           <i className="fas fa-chevron-down"></i>
            </div>
           
        
        </div>
    )
}
export default withRouter( Shop);
