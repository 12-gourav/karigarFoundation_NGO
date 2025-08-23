import { Link } from "react-router-dom";
import img from "../assets/img/logo.jpeg";

const Navbar = () => {
  return (
    <header>
      <div className="left">
        <img src={img} alt="logo" />
        <h4>
          Karigar <span>Foundation</span>
        </h4>
      </div>
      <div className="right">
        <Link to={"/"} className="active">
          Home
        </Link>
        <Link to={"/"}>
          About Us
        </Link>
        <Link to={"/"} >
          Our Programs
        </Link>
        <Link to={"/"} >
          Volunteer
        </Link>
        <Link to={"/"}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
