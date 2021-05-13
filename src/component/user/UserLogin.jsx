import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useFormik} from 'formik';
import { withRouter } from 'react-router';
import { login } from '../../JS/actions/userAction';
import loadingImg from '../pictures/loadingImg.gif';
import erreur from '../pictures/erreur.png';
import { Redirect } from 'react-router';
import UserRegister from './UserRegister';
import * as Yup from 'yup';
const initialValues={
email:'',
password:''
}
const validationSchema= Yup.object({
email: Yup.string().email('*Format invalide').required('*Champs obligatoire'),
password: Yup.string().required('*Champs obligatoire'),
})
const UserLogin = (props) => {
    const [isOpen, setIsOpen] = useState(false);
const formik=useFormik({
    initialValues,
    validationSchema
})
const loading = useSelector(state => state.userReducer.loading)
const dispatch = useDispatch();
    return (props.trigger)? (localStorage.getItem("token")?
    (<Redirect to="/order"/>
    ) 
    :loading?(<img 
        src={loadingImg}
        className="loadingImg"
        alt="imgLoading"/>):(
        <div className="register_page">
            <div>
            <h3>S'identifier</h3>
            </div>
           
                <form onSubmit={formik.handleSubmit} >
                <div className="formik_control">
                    <label For="email">Email</label>
                    <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    type="email"
                    name="email"
                    id="email"
                    required/>
                    {formik.touched.email && formik.errors.email?
                    <div className="error">{formik.errors.email} </div>:null}
                </div>
                <div className="formik_control">
                    <label For="password">Mot de passe</label>
                    <input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    type="password"
                    name="password"
                    id="password"
                    required/>
                    {formik.touched.password && formik.errors.password?<div className="error">{formik.errors.password} </div>:null}
                </div>
                <div>
                    <button type="submit"
                    className="btnLogin"
                    onClick={()=>dispatch(login())}>
                    <b>Se connecter</b></button>
                </div>
                <div className="login_h5">
                <h5 onClick={()=>setIsOpen(true)}>
                    Créer votre compte</h5>
                </div>
            </form>
            <div>
                <UserRegister trigger={isOpen}/>
            </div>
            {props.children}
            </div>)):""}
export default withRouter( UserLogin);
