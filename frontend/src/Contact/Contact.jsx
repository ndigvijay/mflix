import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import twitter_logo from "../images/twitter_logo.png";
import phone_logo from "../images/phone_logo.png";
import gmail_logo from "../images/gmail_logo.jpg";
import github_logo from "../images/github_logo.jpg";
import insta_logo from "../images/insta_logo.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_page">
      <table className="contact_table">
        <tr>
          <th>
            <h3>Call us:</h3>
            <img src={phone_logo} alt="demo pic" />
          </th>
          <th>
            <h3>Email us:</h3>
            <img src={gmail_logo} alt="demo pic" />
          </th>
          <th>
            <h3>Instagram</h3>
            <img src={insta_logo} alt="demo pic" />
          </th>
          <th>
            <h3>Twitter</h3>
            <img src={twitter_logo} alt="demo pic" />
          </th>
          <th>
            <h3>GitHub</h3>
            <img src={github_logo} alt="demo pic" />
          </th>
        </tr>
        <br />
        <br />
        <tr>
          <td>
            <p>Nihal:7892896964</p>
            <p>Nishanth:7676034782</p>
            <p>Digvijay:9353717275</p>
          </td>
          <td>
            <p>nihaltm2002@gmail.com</p>
            <p>dmellonishanth@gmail.com</p>
            <p>digvijayn1993@gmail.com</p>
          </td>
          <td>
            <a
              href="https://www.instagram.com/nihalmurthy10/"
              target="_blank"
              rel="noreferrer">
              Nihal T M
            </a>
            <br />
            <a
              href="https://www.instagram.com/chessticles_02/"
              target="_blank"
              rel="noreferrer">
              Digvijay
            </a>
          </td>
          <td>
            <a
              href="https://twitter.com/Nihal32327127/"
              target="_blank"
              rel="noreferrer">
              Nihal T M
            </a>
          </td>
          <td>
            <a href="https://github.com/n1haldev">Nihal</a>
            <br />
            <a href="https://github.com/ndigvijay">Digvijay</a>
            <br />
            <a href="https://github.com/nishanthdmello">Nishanth</a>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <Contact />
      <div style={{ position: "absolute", bottom: "0px", width: "100vw" }}>
        <Footer />
      </div>
    </div>
  );
}
