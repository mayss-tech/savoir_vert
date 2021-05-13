import React from 'react';
import {useDispatch } from 'react-redux';
import { searchPlants } from '../../../JS/actions/PlantsAction';
const SearchPlant = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="search_plant">
        
             <input type="text"
              placeholder="Chercher plantes..."
              onChange={(e)=>dispatch(searchPlants (e.target.value))}/>  
             <i className="fas fa-search"></i>
                </div>
        </div>
    )
}

export default SearchPlant
