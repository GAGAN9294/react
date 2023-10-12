import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import { setDashboardData } from "../Redux/action/dashboardAction";
import { Data } from "../Component/Data.js";

const Dashboard = ({ setDashboardData, dashboardData }) => {
  useEffect(() => {
    setDashboardData(Data);
  }, [setDashboardData]);

  return (
    <div className="table">
      <Table dataSource={dashboardData} columns={columns} pagination={false} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboardData: state.dashboard.dashboardData,
});

export default connect(mapStateToProps, { setDashboardData })(Dashboard);

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
