import React,{useEffect} from 'react';
import loadingImg from '../pictures/loadingImg.gif';
import erreur from '../pictures/erreur.png'
import {useDispatch,useSelector} from 'react-redux';
import { fetchPlantBeginAsync } from '../../JS/actions/PlantsAction';
import FournitureMap from './FournitureMap';
const FournitureAff = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.plantsReducer.loading);
    const error = useSelector(state => state.plantsReducer.error)
    useEffect(() => {
        dispatch(fetchPlantBeginAsync())
    },[]);
    return (loading?
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
        (<FournitureMap/>)
        )
}
export default FournitureAff;
