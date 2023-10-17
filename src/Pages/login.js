import axios from "axios";
import LoadingSpinner from "Components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "Styles/Pages/Login/index.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post("https://reqres.in/api/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response)
        setIsLoading(false);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  };

  return (
    <div className="main">
      <div style={{ width: "420px" }}>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {/* <span className="form-container"> */}
          <label> Email </label>
          <input {...register("email", { required: true })} />
          <p className="error-message">{errors.email?.message}</p>

          <label> Password </label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          <p className="error-message">{errors.password?.message}</p>

          {/* </span> */}
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <input className="button" type="submit" />
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
