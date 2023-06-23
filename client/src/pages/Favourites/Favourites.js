import "./Favourites.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Favourites = () => {
  const [favourite, setFavourite] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const favList = await axios.get("http://localhost:8080/");
        setFavourite(favList.data);
      };
    } catch (error) {
      console.log("failed to get favourite dogs", error);
    }

    fetchData();
  }, []);

  return (
    <article className="favourites-box">
      <div className="favourites">
        <img className="favourites__image" src={image} alt="Photo of the dog" />
        <div className="favourites__textbox">
          <h3 className="favourites__name">{name}</h3>
          <p className="favourites__info">Good with kids: {goodWithKids}</p>
          <p className="favourites__info">Good with other dogs: {goodWithdogs}</p>
          <p className="favourites__info">playfulness: {playfulness}</p>
        </div>
      </div>
    </article>
  );
};

export default Favourites;
