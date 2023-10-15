import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "Redux/Slices/Users";
import { Table } from "antd";
import axios from "axios";
import "Styles/Pages/Dashboard/index.css";
import LoadingSpinner from "Components/LoadingSpinner";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://dummyjson.com/users").then((res) => {
      dispatch(setUsers(res.data.users));
      setIsLoading(false);
    });
  }, [dispatch]);
  const users = useSelector((state) => state.users.data);
  const columns = [
    {
      key: "id",
      title: "ID",
      dataIndex: "id",
      className: "style",
    },
    {
      key: "firstName",
      title: "FirstName",
      dataIndex: "firstName",
      className: "column",
    },
    {
      key: "lastname",
      title: "LastName",
      dataIndex: "lastName",
      className: "style",
    },
    {
      key: "age",
      title: "Age",
      dataIndex: "age",
      className: "column",
    },
    {
      key: "gender",
      title: "Gender",
      dataIndex: "gender",
      className: "style",
    },
  ];

  return (
    <div className="table">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Table
          className="customtable"
          dataSource={users}
          columns={columns}
          pagination={false}
        />
      )}
    </div>
  );
};

export default Dashboard;