const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/db_01", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

