import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/img/logo.jpeg";
import { Popover } from "antd";
import { useState } from "react";
import { navs } from "../constants/nav";

const Navbar = () => {
  const [state, setState] = useState("eng");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();
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
    <>
      <header className="navbar">
        <div className="left">
          <img src={img} alt="logo" />
          <h4>
            Karigar <span>Foundation</span>
          </h4>
        </div>
        <div className="right">
          {navs.map((d) => (
            <Link
            key={d.id}
              to={d.path}
              className={location.pathname === d.path ? "active" : ""}
            >
              {d.name}
            </Link>
          ))}

         
          <Popover placement="bottom" content={content}>
            <a>Language</a>
          </Popover>
        </div>
      </header>
      <div className="navbar2">
        <div className="left">
          <img src={img} />
          <h2>
            Karigar <span>Foundation</span>
          </h2>
        </div>
        <div className="right">
          <button onClick={() => setOpen(true)}>
            <i className="bx bx-menu"></i>
          </button>
        </div>
        {open && (
          <div className="mobile_menu">
            <button onClick={() => setOpen(false)}>X</button>
            <ul>
              {navs.map((d) => (
                <li
                  key={d.id}
                  className={location.pathname === d.path ? "active" : ""}
                  onClick={() => Navigate(d.path)}
                >
                  <a>{d.name}</a>
                </li>
              ))}
            </ul>
            <div className="set">
              <p>Translate Page</p>
              <a onClick={() => setState("en")}>English</a>
              <a onClick={() => setState("hn")}>Hindi</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
