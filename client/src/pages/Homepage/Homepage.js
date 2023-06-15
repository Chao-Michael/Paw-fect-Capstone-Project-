import { useNavigate } from "react-router-dom";
import "./Homepage.scss";

const Homepage = () => {
  const navigate = useNavigate();

  const onClickHandlerForm = () => {
    navigate("/form");
  };
  return (
    <main className="hero">
      <div className="hero__image">
        <div className="hero__text--wrapper">
          <h4 className="hero__text">Lets Find The Paw-fect Dog For You</h4>
          <button className="hero__button" onClick={onClickHandlerForm}>
            Retrieve!
          </button>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
