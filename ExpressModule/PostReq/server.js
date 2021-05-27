const express = require("express");

const app = express();

app.post("/", (req, res) => {
  let fname = req.body.fname;
  let password = req.body.password;
  if (fname == "sajjad" && password == "alam") {
    res.send("<h1>Hello logIn Success............!!!!! </h1>");
  } else {
    res.send("<h1> Error Login Fail </h1>");
  }
});

// assign port

app.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
