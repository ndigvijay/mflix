import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import App from "./App";
import { useNavigate } from "react-router-dom";

const Movies = () => {
    
    const navigate = useNavigate();
    useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login")
      console.log("Unauthorized access. Redirecting to login page...");
    }
  }, []);

  return (
    <>
      <Navbar />
      {localStorage.getItem("token") && <App />}
    </>
  );
};

export default Movies;
