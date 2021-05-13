import React from 'react';
import Panier from '../cartItems/Panier';
import Shop from '../cartItems/Shop';
import ProgressBar from '../progressBar/ProgressBar';
import FournitureAff from './FournitureAff';
const Fourniture = (props) => {
    return (
        <div >
            <div className="translateBar page2">
            <ProgressBar/>
            </div>
            <FournitureAff {...props}/>
        </div>
    )
}
export default  Fourniture;

