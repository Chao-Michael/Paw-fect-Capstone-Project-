import logo from "../../assets/logo/Logo-2.png";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo-wrapper">
        <Link to={"/"}>
          <img className="nav__logo" src={logo} alt="Paw-fect logo" />
        </Link>
      </div>
      <div className="nav__wrapper">
        <h3 className="nav__link">About us</h3>
        <Link to={"/signup"} className="nav__link">
          <h3 className="nav__link">SignUp/Login</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
