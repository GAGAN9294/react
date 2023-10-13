import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "Redux/Slices/Users";
import { Table } from "antd";
import axios from "axios";

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
    },
    {
      key: "firstName",
      title: "FirstName",
      dataIndex: "firstName",
    },
    {
      key: "lastname",
      title: "LastName",
      dataIndex: "lastName",
    },
    {
      key: "age",
      title: "Age",
      dataIndex: "age",
    },
    {
      key: "gender",
      title: "Gender",
      dataIndex: "gender",
    },
  ];

  return (
    <div className="table">
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <h1> Loading......... </h1>
        </div>
      ) : (
        <Table dataSource={users} columns={columns} pagination={false} />
      )}
    </div>
  );
};

export default Dashboard;
