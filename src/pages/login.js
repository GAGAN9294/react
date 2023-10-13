import axios from "axios";
import React from "react";
import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom";
import '../Style/Login/index.css'

const LoginPage = () => {
  const{register,handleSubmit} = useForm()
 const navigate = useNavigate()
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
        <input {...register("email")} />
        <br />
        <br />
        <label> Password </label>
        <br />
        <input type="password" {...register("password")}/>
        <br />
        <br />
        <input className="button" type="submit"/>
      </form>
    
    </div>
  );
};

export default LoginPage
