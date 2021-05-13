import React from 'react';
import {useSelector} from 'react-redux';
import loadingImg from '../pictures/loadingImg.gif';
import erreur from '../pictures/erreur.png';
import { Redirect } from 'react-router';
import UserRegister from './UserRegister';
const UserCondition = () => {
    const loading = useSelector(state => state.userReducer.loading)
    const errors = useSelector(state => state.userReducer.errors)
    const user = useSelector(state => state.userReducer.user)
    return (
        <div>
            <UserRegister/> 
            {loading?(
                <img 
            src={loadingImg}
            className="loadingImg"
            alt="imgLoading"/>
            ): errors?(
                <img
                src={erreur}
                className="errorImg"
                alt="imgError"/>
            ):(<Redirect to="/order" /> )
           }
        </div>
    )
}

export default UserCondition;
