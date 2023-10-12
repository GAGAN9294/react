import axios from "axios";
import React from "react";
import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const{register,handleSubmit} = useForm()
 const navigate = useNavigate()
  const onSubmit =(data)=>{
    console.log(data)
    axios.post('https://reqres.in/api/login', {
      email: data.email,
      password: data.password
    })
    .then((response)=>{
      localStorage.setItem('token',response.data.token)
      // console.log(response.status, response.data.token)
      navigate('/dashboard')
    })
    
  }

    return (
    <div style={{textAlign:'center'}}>
      <form onSubmit={handleSubmit(onSubmit)}> 
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
        <input type="submit"/>
      </form>
    
    </div>
  );
};

export default LoginPage
