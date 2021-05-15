import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux';

const ProgressBar = () => {
    const [affCategory, setAffCategory] = useState("Catégorie")
    const stepper = useSelector(state => state.progressBar.stepper);
    const cartItems = useSelector(state => state.cartItemsReducer.cartItems);
    useEffect(() => {
      let plants =JSON.parse(localStorage.getItem('plants'))
      if(plants !==null) {setAffCategory(plants.name)} 
    }, []);
    return (
        <div >
            <progress value={stepper} max="60" />
          
      <div
        className={`${
          stepper <= 60 ? "circle_color_active" : "circle_color_nonActive"
        } circle_bar step1 `}>
        <i className="fas fa-seedling"></i>
      <div className="bar_info"><p>{affCategory}</p></div>
      </div>
      <div
        className={`${
          stepper >= 20 ? "circle_color_active" : "circle_color_nonActive"
        }  circle_bar step2`}
      >
      <i className="fas fa-plus"></i>
      <div ><p className="bar_info" > {cartItems.length } achats</p></div>
      </div>

      <div
        className={`${
          stepper >= 40 ? "circle_color_active" : "circle_color_nonActive"
        } circle_bar step3`}>
      <i class="fas fa-shopping-bag"></i>
      <p  className="bar_info">Commander</p>
      </div>

      <div
        className={`${
          stepper === 60 ? "circle_color_active" : "circle_color_nonActive"
        } circle_bar step4`}>
        <i className= "fas fa-check" ></i>
        <p  className="bar_info">Confirmer</p>
      </div>
        </div>
    )
}
export default ProgressBar
