import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import FournitureAff from './FournitureAff';
const Fourniture = (props) => {
    return (
        <div>
            <div className="translateBar page2">
            <ProgressBar/>
            </div>
            <FournitureAff {...props}/>
        </div>
    )
}
export default  Fourniture;

