const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello to fs Module </h1>");
  res.end();
});

// assign port
server.listen(8080, () => {
  console.log("server is listing to the port no 8080");
});
