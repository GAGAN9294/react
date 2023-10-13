import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import Navbar from "./Component/Navbar";
import Protected from "./Component/Protected";

const App = () => {
  return (
    <Router>
      {
        localStorage.getItem('token')?
        <Navbar />
        :null
      }
     <Routes>
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
