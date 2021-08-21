const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>welcome to the http sever</h1>");
    res.end();
  })
  .listen(8080, () => {
    console.log("server is running on port no 8080");
  });
