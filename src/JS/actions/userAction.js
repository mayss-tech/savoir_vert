import { LOGIN_FAIL ,GET_PROFILE_BEGIN,
    LOGIN_BEGIN, LOGIN_SUCCESS, LOGOUT, REGISTER_BEGIN,
    REGISTER_FAIL, REGISTER_SUCCESS,
    GET_PROFILE_FAIL,GET_PROFILE_SUCCESS } from "../action-types/Action-type";

import axios from 'axios';
export const register = (newUser) => async (dispatch) => {
    dispatch({
        type: REGISTER_BEGIN,
    });
    try {
        const addRes = await axios.post('/user/register', newUser);
        dispatch({
        type: REGISTER_SUCCESS,
        payload: addRes.data,
    });
    } catch (error) {
    dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data,
    });
    }
};

export const login = (cred) => async (dispatch) => {
    dispatch({
    type: LOGIN_BEGIN
    });
    try {
    const loginRes = await axios.post('/user/login', cred);
    localStorage.setItem('token', loginRes.data.token);
    dispatch({
        type: LOGIN_SUCCESS,
        payload: loginRes.data,
    });
    } catch (error) {
    dispatch({
        type: LOGIN_FAIL,
    });
    }
};
export const getProfile = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    const config = {
    headers: {
        Authorization: token,
    },
    };
    dispatch({
    type: GET_PROFILE_BEGIN,
    });
    try {
    const isAuth = await axios.get('/user/current', config);
    dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: isAuth.data,
});
    } catch (error) {
    dispatch({
        type: GET_PROFILE_FAIL,
    });
    }
};

export const  logout =() =>(dispatch)=>{
    dispatch({type:LOGOUT})
    localStorage.removeItem('token');
}