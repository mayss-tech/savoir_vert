import React,{useEffect} from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import Category from './Category';
import {useSelector,useDispatch} from 'react-redux';
import { fetchCategoryAsync } from '../../JS/actions/categoryAction';
import loadingImg from '../pictures/loadingImg.gif';
import erreur from '../pictures/erreur.png';
const CategoryAff = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.categoryReducer.loading);
    const error = useSelector(state => state.categoryReducer.error)
    useEffect(() => {
        dispatch(fetchCategoryAsync())
    }, []);
    return (
        loading?
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
            <div className="translateBar page1">
            <ProgressBar />
            </div>
        <Category/>
</div>)
    )
}
export default CategoryAff
