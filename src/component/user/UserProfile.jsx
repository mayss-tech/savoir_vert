import React from 'react';
import { logout } from '../../JS/actions/userAction';
import { useSelector,useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router';
const UserProfile = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user)
    return (
        <div>
            <div className="connect">
            <i className="fas fa-user-alt"></i>
            {JSON.parse(localStorage.getItem("token") === null) && user === null? 
             
            (<p> <b>Se connecter</b></p>):
             (<p onClick={()=>{dispatch(logout());
                props.history.push("/")
             }}> <b>Se déconnecter</b></p>) }
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    )
}
export default withRouter (UserProfile);
