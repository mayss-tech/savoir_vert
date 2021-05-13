import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { withRouter } from 'react-router';
import { nextStep } from '../../JS/actions/progressBar';
import ConfirmOrder from '../order/ConfirmOrder';
import ProgressBar from '../progressBar/ProgressBar';
import Shop from './Shop';

const Order = (props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(nextStep(60))
    }, []);
    return (
        <div>
            <div className="translateBar page4">
            <ProgressBar />
            </div>
            <Shop/>
        <div >
        <ConfirmOrder/>
           <button onClick={()=>props.history.push('/confirmOrder')}>
               <b>Confirmer la commande</b></button>
        </div>
        </div>
    )
}
export default withRouter (Order);
