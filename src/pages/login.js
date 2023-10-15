import axios from "axios";
import React, { useEffect } from "react";
import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom";
import 'Style/Pages/Login/index.css'

const LoginPage = () => {
 
  const{register,handleSubmit,formState:{errors}} = useForm()
 const navigate = useNavigate()
 useEffect(()=>{
  const isAuthenticated = localStorage.getItem('token')
  if(isAuthenticated){
    navigate('/dashboard')
  }
 },[navigate])
  const onSubmit =(data)=>{
    axios.post('https://reqres.in/api/login', {
      email: data.email,
      password: data.password
    })
    .then((response)=>{
      localStorage.setItem('token',response.data.token)
      navigate('/dashboard')
    })
    
  }

    return (
    <div className="main">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}> 
        <label > Email </label>
        <br />
        <input {...register("email",{required:true})}
        aria-invalid={errors.email ? "true" : "false"} />
        {errors.email?.type === 'required' && (
        <h4 style={{color:'red',textAlign:'left'}}> Email is required </h4>
      )
    }
        <br />
        <br />
        <label> Password </label>
        <br />
        <input type="password" {...register("password",{required:true})}/>
        {
          errors.password?.type === 'required' && 
          <h4 style={{color:'red',textAlign:'left'}}> Password is required </h4>
        }
        <br />
        <br />
        <input className="button" type="submit"/>
        
      </form>
    
    </div>
  );
};

export default LoginPage
