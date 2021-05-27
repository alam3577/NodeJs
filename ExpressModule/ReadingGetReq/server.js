const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("This is Query", req.query);
  // console.log("This is Params", req.params);
  // console.log(req);
  let fname = req.query.fname;
  let password = req.query.password;
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
