const mongoose = require("mongoose");
const { Schema } = mongoose;

const useSchema = new Schema({
  username: {
    type: String,
    required: [true, "A name is required."],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: true,
  },
  token: {
    type: String,
    required: true,
  },
  versionKey: false,
});
const registerModel = mongoose.model("user", useSchema);

module.exports = registerModel;
