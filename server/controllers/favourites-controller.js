const knex = require("knex")(require("../knexfile"));

const favourites = (req, res) => {
  knex("favourite_dogs")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => res.status(400).send(`Error retrieving Data: ${error}`));
};

const addToFavourites = (req, res) => {
  const { image_url, dog_name, good_with_kids, good_with_other_dogs, playfulness } = req.body;

  const favDog = {
    image_url,
    dog_name,
    good_with_kids,
    good_with_other_dogs,
    playfulness,
  };

  knex("favourite_dogs")
    .insert(favDog)
    .then(data => {
      res.status(201).send("Added to favourites");
    })
    .catch(error => {
      res.status(500).send("Error adding dogs to favourites", error);
    });
};

module.exports = {
  favourites,
  addToFavourites,
};
