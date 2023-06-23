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
    <article className="favourites-box">
      {favouriteList.map(dog => (
        <div className="favourites">
          <img className="favourites__image" src={dog.image_url} alt="Photo of the dog" />
          <div className="favourites__textbox">
            <h3 className="favourites__name">{dog.dog_name}</h3>
            <p className="favourites__info">Good with kids: {dog.good_with_kids}</p>
            <p className="favourites__info">Good with other dogs: {dog.good_with_dogs}</p>
            <p className="favourites__info">playfulness: {dog.playfulness}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Favourites;
