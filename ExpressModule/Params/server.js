const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/login/:name/:password", (req, res) => {
  res.send("<h1>Hello React</h1>");
  console.log(req.params.name);
  console.log(req.params.password);
});

// assign port

app.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
