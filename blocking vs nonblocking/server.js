// synchronous or blocking

// asynchronous or nonblocking

// Example of Non-Blocking
// require("fs").writeFile("./sajjad.txt", "Hello Sajjad", (err) => {
//   console.log("This is fs Module");
// });

// console.log("This is normal console.log");

// Example of Blocking
console.log("Outside of Append file 1");
const fs = require("fs");
require("http")
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is inside http Server</h1>");
    console.log("before sync");
    fs.appendFile("./alam.txt", "hi1111111111", (err) => {
      console.log("inside sync");
    });
    console.log("after sync");
    res.end();
  })
  .listen(8080, () => {
    console.log("server is listing to the port no 8080");
  });

// assign port
