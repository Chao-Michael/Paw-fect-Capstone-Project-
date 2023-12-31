const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const favouriteRoute = require("./routes/favourites");

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/favourite", favouriteRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
