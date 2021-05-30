const mongoose = require("mongoose");

// schema

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: String,
  dob: {
    type: String,
    required: true,
  },
  lang: Array,
  country: {
    type: String,
    required: true,
  },
});

// create collection
const User = mongoose.model("User", userSchema);

module.exports = User;
