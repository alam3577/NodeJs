const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// set language type as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  if (req.query.name == "sajjad" && req.query.password == "alam") {
    res.send({ message: "true success" });
  } else {
    res.send({ message: "error fail" });
  }
});

// assign port

app.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
