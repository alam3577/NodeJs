const http = require("http");
const os = require("os");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>Type of Os :----------------->>${os.type()}</h1>`); //Windows_NT
  res.write(`<h1>Platform of Os :----------------->>${os.platform()}</h1>`); //win32
  res.write(`<h1>Artitechture of Os :----------------->>${os.arch()}</h1>`); //x64
  res.write(
    `<h1>Release Version of Os :----------------->>${os.release()}</h1>`,
  ); //6.3.9600
  res.write(
    `<h1>uptime(Kab se machine chal rahe hai) of Os :----------------->>${os.uptime()}</h1>`,
  ); //635509
  res.write(`<h1>Total memory of Os :----------------->>${os.totalmem()}</h1>`); //4214337536
  res.write(
    `<h1>Total Free memory of Os :----------------->>${os.freemem()}</h1>`,
  ); //1021329408
  res.write(`<h1>Information  of Cpu :----------------->>${os.cpus()}</h1>`);
  //   better to console.log() it
  console.log(os.cpus());

  res.end();
});os.cpus()

// assign port

server.listen(8080, () => {
  console.log("server is lisiting to the port no 8080");
});
