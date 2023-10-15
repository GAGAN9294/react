import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import Navbar from "./Components/Navbar";
import Protected from "./Components/Protected";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
