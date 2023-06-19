import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <main className="login-page">
      <form className="login">
        <h1 className="login__title">Log in</h1>

        <input className="login__input" type="email" name="email" label="Email" placeholder="Email" />
        <input className="login__input" type="password" name="password" label="Password" placeholder="Password" />

        <button className="login__button">Log in</button>

        {/* {error && <div className="login__message">{error}</div>} */}
      </form>
      <p className="login-text">
        Need an account? <Link to="/signup">Sign up</Link>
      </p>
    </main>
  );
};

export default Login;
