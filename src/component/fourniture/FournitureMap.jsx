import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { addItem } from '../../JS/actions/cartItemsActions';
import Panier from '../cartItems/Panier';
const FournitureMap = () => {
    const dispatch = useDispatch()
    const plants = useSelector(state => state.plantsReducer.plants);
    const text = useSelector(state => state.plantsReducer.text)
    return (
        <div className="plants_page">
            <Panier/>
            {
                plants.filter(el=>el.name.toUpperCase().includes(text.toUpperCase())).map(el=><div key={el.id} className="plants_details">
                
                <img src={el.image} alt="imgPlants" className="plants_img"/>
                <h5>{el.name}</h5>
                <p>{el.desc} </p>
                <h5>{el.price} dt</h5>
                <button onClick={()=>dispatch(addItem(el))}><b>Ajouter au panier</b> <i className="fas fa-cart-plus"></i></button>
                </div>)
            }
        </div>
    )
}

export default FournitureMap
