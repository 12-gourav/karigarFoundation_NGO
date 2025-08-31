import { Link, useLocation } from "react-router-dom";
import img from "../assets/img/logo.jpeg";
import { Popover } from "antd";
import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState("eng");
  const location = useLocation();
  const content = () => {
    return (
      <ul className="lang_list">
        <li
          className={state === "eng" ? "active" : ""}
          onClick={() => {
            setState("eng");
          }}
        >
          English
        </li>
        <li
          className={state === "hn" ? "active" : ""}
          onClick={() => {
            setState("hn");
          }}
        >
          Hindi
        </li>
      </ul>
    );
  };

  return (
    <header>
      <div className="left">
        <img src={img} alt="logo" />
        <h4>
          Karigar <span>Foundation</span>
        </h4>
      </div>
      <div className="right">
        <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to={"/about"}
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Us
        </Link>
        <Link
          to={"/community"}
          className={location.pathname === "/community" ? "active" : ""}
        >
          Community
        </Link>
        <Link
          to={"/donation"}
          className={location.pathname === "/donation" ? "active" : ""}
        >
          Donation
        </Link>
        <Link
          to={"/contact"}
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
        <Popover placement="bottom" content={content}>
          <a>Language</a>
        </Popover>
      </div>
    </header>
  );
};

export default Navbar;
