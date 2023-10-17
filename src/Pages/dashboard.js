import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "Redux/Slices/Users";
import { Table } from "antd";
import axios from "axios";
import "Styles/Pages/Dashboard/index.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      dispatch(setUsers(res.data.users));
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
        <Table
          className="customtable"
          dataSource={users}
          columns={columns}
          pagination={false}
        />
    </div>
  );
};

export default Dashboard;