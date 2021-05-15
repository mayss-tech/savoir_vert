import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { register } from '../../JS/actions/userAction';
import {useFormik} from 'formik';

import loadingImg from '../pictures/loadingImg.gif';
import erreur from '../pictures/erreur.png';
import { Redirect } from 'react-router';

const initialValues={
    name:'',
    email:'',
    telephone:'',
    password:'',
    adress:'',
    codePostal:''
}
const onSubmit= values =>
    {
        console.log('data',values)
}
const validate = values =>{
    let errors={}
    if(!values.name){
        errors.name='*Champs obligatoire'
    }
    if(!values.email){
        errors.email='*Champs obligatoire'
    }else
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    .test(values.email)){
        errors.email='*Forme invalide'
    }
    
    if(!values.telephone){
        errors.telephone='*Champs obligatoire'
    }
    if(!values.password){
        errors.password='*Champs obligatoire'
    }
    if(!values.adress){
        errors.adress='*Champs obligatoire'
    }
    return errors
}
const UserRegister = (props) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })
    const dispatch = useDispatch()
    const loading = useSelector(state => state.userReducer.loading)
    const errors = useSelector(state => state.userReducer.errors)
    const user = useSelector(state => state.userReducer.user)
    return (props.trigger)? (
     
        <div className="register_page">
           <h3>S’inscrire</h3>
          {loading?
          ( <img 
            src={loadingImg}
            className="loadingImg"
            alt="imgLoading"/>)
            :user?(<Redirect to="/order" /> ):(
<form onSubmit={formik.handleSubmit} >
          <div className="formik_control">
            <label For='name'>Nom‍ et prénom</label>
            <input
            ref={(node) => {
              initialValues.name = node;}}
              onChange={formik.handleChange}
              value={formik.values.name}
              id='name'
              name='name'
              type="text"
              required
            />
            {formik.touched.name && formik.errors.name?
            <div className="error">{formik.errors.name} </div>:null}
          </div>

          <div className="formik_control">
            <label For='email'>Email</label>
            <input
            ref={(node) => {
              initialValues.email= node;}}
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              id='email'
              name='email'
              type="email"
            required
            />
       
            {formik.touched.email && formik.errors.email?
            <div className="error">{formik.errors.email} </div>:null}
          </div>
          <div className="formik_control">
            <label For='phone'>Téléphone</label>
            <input
            ref={(node) => {
              initialValues.telephone = node;}}
              onChange={formik.handleChange}
              value={formik.values.telephone}
              onBlur={formik.handleBlur}
              id='phone'
              name='telephone'
              type="text"
              required
            />
            {formik.touched.telephone && formik.errors.telephone?
            <div className="error">{formik.errors.telephone} </div>:null}
          </div>

          <div className="formik_control">
            <label For='password'>Mot de passe</label>
            <input
            ref={(node) => {
              initialValues.password = node;}}
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              id='password'
              name='password'
              type="password"
              required
            />
            {formik.touched.password && formik.errors.password?
            <div className="error">{formik.errors.password} </div>:null}
          </div>

          <div className="formik_control">
            <label For='adress'>Adresse</label>
            <input
            ref={(node) => {
              initialValues.adress = node;}}
              onChange={formik.handleChange}
              value={formik.values.adress}
              onBlur={formik.handleBlur}
              id='adress'
              name='adress'
              type="text"
              required
            />
            {formik.touched.adress && formik.errors.adress?
            <div className="error">{formik.errors.adress} </div>:null}
          </div>

          <div className="formik_control">
            <label For='codePostal'>Code Postale</label>
            <input
            ref={(node) => {
              initialValues.codePostal = node;}}
              onChange={formik.handleChange}
              value={formik.values.codePostal}
              onBlur={formik.handleBlur}
              id='codePostal'
              name='codePostal'
              type="text"
              required
            />
          </div>

          <button type="submit"
          className="btn2"
          onClick={
            ()=>dispatch(register({
              name:initialValues.name.value,
              email:initialValues.email.value,
              telephone:initialValues.telephone.value,
              adress:initialValues.adress.value,
              password:initialValues.password.value,
              codePostal:initialValues.codePostal.value
            }))
          }>
            <b>Créer votre compte</b>
          </button>
          </form>
          )
          }
        {props.children}
        </div>
        
    ):""
}
export default UserRegister;
