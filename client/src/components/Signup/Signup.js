import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  return (
    <main className="signup-page">
      <form className="signup">
        <h1 className="signup__title">Sign up</h1>

        <input type="text" name="first_name" placeholder="First name" className="signup__input" />
        <input type="text" name="last_name" placeholder="Last name" className="signup__input" />
        <input type="text" name="email" placeholder="Email" className="signup__input" />
        <input type="password" name="password" placeholder="Password" className="signup__input" />

        <button className="signup__button">Sign up</button>

        {/* {success && <div className="signup__message">Signed up!</div>}
        {error && <div className="signup__message">{error}</div>} */}
      </form>
      <p className="signup-link">
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
};

export default Signup;
