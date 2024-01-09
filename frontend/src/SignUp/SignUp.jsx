import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./SignUp.css";
import React, { useState } from "react";

function CreateAcc() {
  const navigate = useNavigate();

  const navigateToPlans = () => {
    navigate("/plans");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const checkPassword = (password, confirm) => {
    if (password === confirm && password.length > 8) return 1;
    else if (password === confirm && password.length < 8) return 2;
    else if (password !== confirm) return 3;
  };

  async function submitHandler(e) {
    e.preventDefault();

    if (checkPassword(password, confirm) === 1) {
      const user = {
        email: email,
        username: username,
        password: password,
        confirm_password: confirm,
      };

      try {
        const response = await fetch("https://mflix-backend.onrender.com/app/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          alert("Signup successful");
          navigateToLogin();
        } else if (response.status === 409) {
          alert("The email entered by you seems to already have an account!\nTry Signing in!");
          navigateToLogin();
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }

      console.log(user);
    } else if (checkPassword(password, confirm) === 2) {
      alert("Password should be more than 8 letters");
    } else if (checkPassword(password, confirm) === 3) {
      alert("Password and confirm password are not the same");
    }
  }

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div id="signup">
      <form id="signup_form" onSubmit={submitHandler}>
        <br />
        <h1>Sign Up</h1>
        <br />
        <center>
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            autoComplete="off" 
            required 
            autoFocus 
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
          <br />
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            required
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
          />
          <br />
          <br />
          <button type="submit">Sign Up</button>
        </center>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <Navbar />
      <CreateAcc />
    </div>
  );
}

export default SignUp;
