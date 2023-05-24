const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const URI = process.env.URI;

async function connect() {
  try {
    mongoose.connect(URI, function (err) {
      if (err) throw err;
      console.log("Database connected ");
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = connect;
