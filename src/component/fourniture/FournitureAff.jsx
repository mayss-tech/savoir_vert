import React,{useEffect} from 'react';
import loadingImg from '../pictures/loadingImg.gif';
import erreur from '../pictures/erreur.png'
import {useDispatch,useSelector} from 'react-redux';
import { fetchPlantBeginAsync } from '../../JS/actions/PlantsAction';
import FournitureMap from './FournitureMap';
import SearchPlant from './Search/SearchPlant';
import Shop from '../cartItems/Shop';


const FournitureAff = (props) => {
    const dispatch = useDispatch();
    const fournitureDetails = useSelector(state => state.plantsReducer.fournitureDetails);
    const loading = useSelector(state => state.plantsReducer.loading);
    const error = useSelector(state => state.plantsReducer.error);

    useEffect(() => {
        dispatch(fetchPlantBeginAsync(props.match.params.id))
    },[]);
    return (
       
        ( fournitureDetails===null || loading)?
        (
            <img 
            src={loadingImg}
            className="loadingImg"
            alt="imgLoading"/>
        ): error?(
            <img
            src={erreur}
            className="errorImg"
            alt="imgError"/>
        ):
        (<div>
        <Shop {...props}/>
        <SearchPlant {...props}/>
        <FournitureMap {...props}/>
</div>))
}
export default FournitureAff;
