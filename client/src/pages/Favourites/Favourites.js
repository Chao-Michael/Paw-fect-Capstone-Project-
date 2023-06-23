import "./Favourites.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Favourites = () => {
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const favList = await axios.get("http://localhost:8080/favourite");
        setFavouriteList(favList.data);
      };

      fetchData();
    } catch (error) {
      console.log("failed to get favourite dogs", error);
    }
  }, []);

  return (
    <article className="favourites">
      <h2 className="favourites__header">It all comes down to these furry friends to be your paw-fect dog!</h2>
      {favouriteList.map(dog => (
        <div className="favourites-box">
          <div className="favourites-container">
            <img className="favourites-container__image" src={dog.image_url} alt="Photo of the dog" />
            <div className="favourites-container__textbox">
              <h3 className="favourites-container__name">{dog.dog_name}</h3>
              <p className="favourites-container__info">Good with kids: {dog.good_with_kids}</p>
              <p className="favourites-container__info">Good with other dogs: {dog.good_with_other_dogs}</p>
              <p className="favourites-container__info">playfulness: {dog.playfulness}</p>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Favourites;
