const express = require("express");

const app = express();

// getRequest
app.get("/", (req, res) => {
  console.log("Root home");
  res.send("<h1>Home data soon...!!!!!!!!!!!</h1>");
});

// post request
app.post("/mongodb", (req, res) => {
  res.send("<h1>Mongo db data soon.............!!!!!!!!!!!</h1>");
});

// put request
app.put("/cassandradb", (req, res) => {
  res.send("<h1>cassandradb data soon.............!!!!!!!!!!!</h1>");
});

// delete Request
app.delete("/signin", (req, res) => {
  res.send("<h1>signin data soon.............!!!!!!!!!!!</h1>");
});

// assign port

app.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
