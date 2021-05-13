import { LOGIN_FAIL ,GET_PROFILE_BEGIN,LOGIN_BEGIN, LOGIN_SUCCESS, LOGOUT, REGISTER_BEGIN, 
    REGISTER_FAIL, REGISTER_SUCCESS,
    GET_PROFILE_FAIL,GET_PROFILE_SUCCESS } from "../action-types/Action-type";
const initialState = {
    loading: false,
    user: null ,
    isAuth:null,
    errors:[]
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case REGISTER_BEGIN:
        return {
            ...state,
            loading: true,
        };
    case REGISTER_SUCCESS:
        return {
            ...state,
            loading: false,
            user: payload,
        };
    case REGISTER_FAIL:
        return {
            ...state,
            loading:false,
            errors: payload,
        };
    case LOGIN_BEGIN:
        return {
            ...state,
            loading: true,
        };
    case LOGIN_FAIL:
        return {
            ...state,
            loading: false,
            errors: payload,
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            isAuth: payload,
        };
    case GET_PROFILE_BEGIN:
        return {
            ...state,
            loading: true,
        };
    case GET_PROFILE_FAIL:
        return {
            ...state,
            loading: false,
            errors: payload,
        };
    case GET_PROFILE_SUCCESS:
        return {
            ...state,
            loading: false,
            isAuth: payload,
            user: payload,
        };
    case LOGOUT:
        return{
            ...state,
            loading:false,
            user:null
        }
    default:
        return state;
    }
};
export default userReducer;