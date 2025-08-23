import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/logo.jpeg";

const Footer = () => {


    const date = new Date()
    const currentYear = date.getFullYear()



  return (
    <footer>
      <div className="container">
        <div className="left">
          <img src={img} alt="img" />
          <h2>Karigar Foundation</h2>
          <p>
            Karigar Foundation is dedicated to uplifting the lives of India’s
            workers and their families.Through education, healthcare, and
            welfare initiatives, we ensure dignity, justice, and equal
            opportunities for every worker.
          </p>
          <div className="icons">
            <div className="icon">
              <i className="bx bxl-facebook-circle"></i>
            </div>
            <div className="icon">
              <i className="bx bxl-instagram"></i>
            </div>
            <div className="icon">
              <i className="bx bxl-youtube"></i>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="r1">
            <h2>Important Links</h2>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Donation</Link>
            <Link>Campigns</Link>
          </div>
          <div className="r1">
            <h2>Support</h2>
            <Link>Help Center</Link>
            <Link>Term of Services</Link>
            <Link>Legal</Link>
            <Link>Privacy Policy</Link>
          </div>
          <div className="r1">
            <h2>Stay up to date</h2>
            <div className="subscribe_box">
              <input type="email" placeholder="Your email address" />
              <button>
                <i className="bx bx-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="copy">© {currentYear} Karigar Foundation. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
