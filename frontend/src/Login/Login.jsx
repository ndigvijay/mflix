import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToForgotPassword = () => {
    navigate("/forgot");
  };

  const navigateToMovies = () => {
    navigate("/Movies");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://mflix-backend.onrender.com/app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status===200) {
        const data = await response.json();
        // Assuming the server sends a token on successful login
        if (data.token) {
          // Store the token in localStorage
          localStorage.setItem("token", data.token);
          alert("login sucessful")
          navigateToMovies();
        } else {
          alert("Incorrect login credentials");
        }
      } else if (response.status === 404) {
        alert("User not found");
      } else if (response.status === 401) {
        alert("Incorrect login credentials");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <h3 className="title">Sign In</h3>
        <input
          type="email"
          name="email"
          required
          autoFocus
          autoComplete="off"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="invalid_username">Invalid Email</p>
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="invalid_password">Invalid Password</p>
        {/* <p className="forgot_password" onClick={navigateToForgotPassword}>
          Forgot Password ?
        </p> */}
        <div className="button_container">
          <button className="sign_in_button" type="submit">
            Sign In
          </button>
          <p className="no_account">Don't have an account ?</p>
          <button className="sign_up_button" onClick={navigateToSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default function LoginWrapper() {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}
