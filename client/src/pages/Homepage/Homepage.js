import "./Homepage.scss";

const Homepage = () => {
  return (
    <main className="hero">
      <div className="hero__image">
        <div className="hero__text--wrapper">
          <h4 className="hero__text">Lets Find The Paw-fect Dog For You</h4>
          <button className="hero__button">Retrieve!</button>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
