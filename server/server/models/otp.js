const mongoose = require("mongoose");
const { Schema } = mongoose;

const otpSchema = new Schema({
  email: {
    type: String,
    required: [true, " email is required."],
  },
  otp: {
    type: Number,
  },
  createdAt: {
    type: Date,
    expires: 300,
    default: Date.now,
  },
});
const otpModel = mongoose.model("otp", otpSchema);
module.exports = otpModel;
