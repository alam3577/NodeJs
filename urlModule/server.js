const http = require("http");
const url = require("url");
const express = require("express");

let server = http.createServer((req, res) => {
  //    set communcation language
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<form action="/getDetails" method="get">
    <input type="text" placeholder="Enter your First Name" name="fname" /> <br>
    <input type="text" placeholder="Enter your Last Name" name="lname" /> <br>
    <input type="number" placeholder="Enter your Mobile No" name="mnum" /> <br>
    <input type="submit" value="send" />
  </form>`);
  res.end("Thanks ");
  //   read the client data
  console.log("Client data", req.url);
  //   parse is the predefined function present in url module used to break/cut comming url from client returns object
  //   true ==> it will again convert object data to another object so we can easily access it
  let obj = url.parse(req.url, true);
  //   console.log(obj);
  //   get query
  console.log(obj.query);
  let qObj = obj.query;
  console.log("Query", qObj);
  // get path
  console.log("Path Name", obj.pathname);
  //   get fname and lname from query
  console.log(
    `first name is :- ${qObj.fname} <br> and the last name is ${qObj.lname}`,
  );
});

// console.log(qObj.path);

// set port

server.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
