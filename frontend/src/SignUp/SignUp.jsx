import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";

function CreateAcc() {
  const navigate = useNavigate();
  const navigateToPlans = () => {
    navigate("/plans");
  };
  const navigateToLogin= () => {
    navigate("/login");
  };
  const checkPassword = (password, confirm) => {
    if (password === confirm && password.length > 8) return 1;
    else if (password === confirm && password.length < 8) return 2;
    else if (password != confirm) return 3;
  };
  function submitHandler(e) {
    e.preventDefault();
    if (checkPassword(password, confirm) == 1) {
      const user = {
        email: email,
        username: username,
        password: password,
        confirm_password: confirm,
      };
      axios.post("http://localhost:4000/app/signup", user)
      .then((res) => {
        if(res.data.message=="existing account") {
          alert("The email entered by you seems to already have an account!\nTry Signing in!")
          navigateToLogin()
        }
        else {
          navigateToPlans()
        }
      });
      console.log(user);
    } else if (checkPassword(password, confirm) == 2)
      alert("password should be more than 8 letters");
    else if (checkPassword(password, confirm) == 3)
      alert("password and confirm password are not same");
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
          <input type="email" 
          name="email" 
          placeholder="Email Address" 
          autoComplete="off" 
          required 
          autoFocus 
          value={email}
          onChange={(event)=>setEmail(event.target.value)} />
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
          {/* {username} */}
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
          <button>Sign Up</button>
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
