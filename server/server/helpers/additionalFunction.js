const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.generateJwtToken = async (email) => {
  try {
    let token = await jwt.sign({ user: email }, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.log(error);
  }
};
