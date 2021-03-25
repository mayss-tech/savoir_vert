import React from 'react';
import { withRouter } from 'react-router-dom';
import ImgHome from '../carrousel/ImgHome';

const Home = (props) => {
    return (
        <div>
        <ImgHome/>
            <div className="home_phrase">
                <p> <b>Le savoir - faire du paysage</b></p>
            </div>
            <div className="home_choice">
            <p className="sirin may1" onClick={()=>props.history.push('/conception')}> Conception</p>
            <p className="sirin may2" onClick={()=>props.history.push('/fourniture')}>Fourniture </p>
            </div>
        </div>
    )
}
export default withRouter (Home);
