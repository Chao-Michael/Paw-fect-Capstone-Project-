import "./DogCard.scss";

const DogCard = (id, image, name) => {
  return (
    <article className="card-container-box" key={id}>
      <div className="card-container">
        <img className="card-container__image" src={image} alt="Thumbnail of each video" />
        <div className="card-container__textbox">
          <h3 className="card-container__name">{name}</h3>
        </div>
      </div>
    </article>
  );
};

export default DogCard;
