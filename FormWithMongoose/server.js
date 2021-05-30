const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Model/userSchema");

const app = express();

// use libraries

app.use(cors());
// set communicaton language
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create database
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.g3f4w.mongodb.net/registration?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
    },
  )
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });

app.post("/register", (req, res) => {
  res.send("hello");
  console.log(req.body);
  const userDetails = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    contact: req.body.contact,
    address: req.body.address,
    dob: req.body.dob,
    lang: req.body.lang,
    gender: req.body.gender,
    country: req.body.country,
  });
  userDetails.save();
});

app.get("/", async (req, res) => {
  const products = await User.find({});
  console.log(products);
  res.send(products);
});

// assign port

app.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
