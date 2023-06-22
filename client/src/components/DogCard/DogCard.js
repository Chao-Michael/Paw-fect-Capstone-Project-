import "./DogCard.scss";

const DogCard = ({ id, image, name, goodWithKids, goodWithdogs, playfulness }) => {
  return (
    <article className="card-container-box" key={id}>
      <div className="card-container">
        <img className="card-container__image" src={image} alt="Photo of the dog" />
        <div className="card-container__textbox">
          <h3 className="card-container__name">{name}</h3>
          <p className="card-container__info">Good with kids: {goodWithKids}</p>
          <p className="card-container__info">Good with other dogs: {goodWithdogs}</p>
          <div className="card-container__box">
            <p className="card-container__info">playfulness: {playfulness}</p>
            <button className="card-container__button"></button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DogCard;
