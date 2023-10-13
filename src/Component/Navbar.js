import React from "react";
import { NavLink , useNavigate} from "react-router-dom";
import "Style/Navbar/index.css";


const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to="/dashboard"> Dashboard </NavLink>{" "}
          </li>
          {
            localStorage.getItem('token') ? null 
            : <li>
            <NavLink to="/login"> Login </NavLink>{" "}
          </li>
          }
          
          {
            localStorage.getItem('token') ? 
            <li style={{float:'right'}} onClick={handleLogout}>
            <NavLink  to="/logout"> Logout </NavLink>{" "}
          </li> : null
          }
         

        </ul>
      </nav>
    </>
  );
};

export default Navbar;
