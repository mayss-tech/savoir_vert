import React from 'react';
import {withRouter} from 'react-router-dom';
import {nextStep} from '../../JS/actions/progressBar';
import {useDispatch,useSelector} from 'react-redux';
const Category = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.categoryReducer.category);
    return (
    
            <div  className="category">
            {
                category.map(el=><div 
                onClick={()=>{props.history.push('/fourniture/'+el._id)
                            dispatch(nextStep(20))}}
                key={el.id} className="category_details" >
                <img src={el.image} alt="cateoryImg" className="category_img"/>
                <h5>{el.name}</h5>
                </div>)
            }
            </div>
        
    )
}
export default withRouter( Category) ;
