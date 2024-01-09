import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./HomePage/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Plans from "./Plans/Plans";
import FAQpage from "./FAQpage/FAQpage";
import Contact from "./Contact/Contact";
import App from "./Movies/App.js";
import Movies from "./Movies/movies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/FAQ" element={<FAQpage/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Movies" element={<Movies/>}/>
    </Routes>
  </Router>
);
