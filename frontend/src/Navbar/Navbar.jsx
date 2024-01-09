import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/Mflix_Brand_Logo2.png";

function Navbar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div id="navbar">
      <img src={logo} alt="logo" onClick={navigateHome} />
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={navigateToLogin}>Sign In</button>
      )}
    </div>
  );
}

export default Navbar;
