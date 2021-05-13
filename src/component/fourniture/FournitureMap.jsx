import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import FournitureCard from './FournitureCard';
const FournitureMap = () => {
    const fournitureDetails = useSelector(state => state.plantsReducer.fournitureDetails);
    const text = useSelector(state => state.plantsReducer.text);
    const [more,setMore]=useState(4)
    return (
        <div>
        <div className="page">
        <div className="plants_page">
           {  fournitureDetails.fournitureDetails.
           filter(el=>el.name.toUpperCase().includes(text.toUpperCase()))
           .map(el=>(
           <FournitureCard
               id={el._id}
               image={el.image}
               name={el.name}
               price={el.price}
               desc={el.desc}
               qtn={el.qtn}
               />     
           ))
           }
           <p onClick={()=>{
               if(more==fournitureDetails.fournitureDetails.length)
               
              { setMore(more)}else{setMore(more+4)}console.log(more)

           }}
         
           >Afficher la suite
           </p>
                  </div>
        </div>
        </div>
    )
}
export default FournitureMap
