import React,{useState} from 'react'
import PopUp from '../popUp/PopUp';
import {useDispatch} from 'react-redux';
import { addItem } from '../../JS/actions/cartItemsActions';

const FournitureCard = ({id,image,name,desc,price,qtn}) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="plants_details" key={id}>
        <img
          className="plants_img"
          src={image}
          alt="imgPlants"/>
          <h5>{name}</h5>
          <h5>{price} dt </h5>
      <div>
<button 
onClick={() => 
dispatch(addItem({id, image, name,price,qtn})) 
  }
>
<b>Ajouter au panier</b>
<i className="fas fa-cart-plus"></i>
</button>
 <button 
          onClick={(e) => {e.preventDefault();
             setIsOpen(true)}
          }>
            <i className="fas fa-eye"></i>
            </button>

      </div>
      <PopUp
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        plant={{ id, image, name, desc}}
      /> 
    </div>
    )
}

export default FournitureCard
