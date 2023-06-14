import logo from "../../assets/logo/Logo-2.png";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo-wrapper">
        <img className="nav__logo" src={logo} alt="Paw-fect logo" />
      </div>
      <div className="nav__wrapper">
        <h3 className="nav__link">About us</h3>
        <h3 className="nav__link">Login</h3>
      </div>
    </nav>
  );
};

export default Nav;
