const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://generalUser:junkpass1@ds163517.mlab.com:63517/heroku_xr954v2q',
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// routes here
app.use(require('./routes/api.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});