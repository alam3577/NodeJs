const http = require("http");
const url = require("url");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello Sajjad</h1>");
  console.log("Client Data", req.url);
  let a = url.parse(req.url, true);
  console.log(a.query.email);

  res.end();
});

server.listen(8080, () => {
  console.log("server started on port 8080");
});
