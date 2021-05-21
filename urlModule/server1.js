const http = require("http");
const os = require("os");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write(os.type()); //type of Os :___Windows_NT
  //   res.write(os.platform()); //platform of Os :___win32
  //   res.write(os.arch()); // Artitechture of Os :___x64
  //   res.end(os.release()); //Release version od Os :______x646.3.9600
  res.write(`<h1>${os.uptime()}</h1>`);
  res.write(`<h1>${os.totalmem()}</h1>`);
  res.write(`<h1>${os.freemem()}</h1>`);
  console.log(os.cpus());
  res.end();
});

// assign port

server.listen(8080, () => {
  console.log("Server is listining to the port number 8080");
});
