const http = require("http");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Welcome to the http server</h1>");
  res.end();
});

// assign port
server.listen(8080, () => {
  console.log("server is running at  the port no 8080");
});
