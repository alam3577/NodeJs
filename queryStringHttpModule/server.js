const http = require("http");
const qs = require("querystring");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  let result = "";
  // .on method binds an event to a object.
  req.on("data", (data) => {
    result = result + data;
    console.log(result);
  });
  req.on("end", () => {
    let obj = qs.parse(result);
    let uname = obj.uname;
    let upwd = obj.upwd;
    if (uname == "admin" && upwd == "admin") {
      res.write("<h1> Login Success......................!!!!!!!</h1>");
    } else {
      res.write("<h1>Login Fail....................!!!!!!!!!!</h1>");
    }
    res.end();
  });
});

// assign port

server.listen(8080, () => {
  console.log("server is listing to the port no 8080");
});
