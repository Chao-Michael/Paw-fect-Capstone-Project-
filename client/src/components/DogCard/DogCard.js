import "./DogCard.scss";
import axios from "axios";

const DogCard = ({ id, image, name, goodWithKids, goodWithdogs, playfulness }) => {
  const addToFavourites = () => {
    const dogData = {
      image_url: image,
      dog_name: name,
      good_with_kids: goodWithKids,
      good_with_other_dogs: goodWithdogs,
      playfulness: playfulness,
    };

    axios
      .post("http://localhost:8080/favourite/add", dogData)
      .then(res => {
        console.log("Added to favourites", res);
      })
      .catch(error => {
        console.log("Could not add to favourites");
      });
  };

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
            <button className="card-container__button" onClick={addToFavourites}></button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DogCard;
