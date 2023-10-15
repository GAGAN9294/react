import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const naviagte = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("token");
    if (!login) {
      naviagte("/login");
    }
  });
  return <Component />;
};

export default Protected;
