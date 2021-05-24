// // Reading file in fs Module
// const fs = require("fs");

// Buffer is additional datatype in nodejs
// Buffers are mainly used to store binary data while reading from the file or reciving packets from internet
// let buf_data = fs.readFileSync("./sajjad.txt");
// console.log(buf_data);

// // for async you must be use callback
// fs.readFile("./sajjad.txt", (err, data) => {
//   if (err) throw err;
//   else {
//     console.log(data);
//   }
// });

// Writing Files in fs Module

// const fs = require("fs");

// // fs.writeFileSync("./alam.txt", "Hello This is alam page");

// // async
// fs.writeFile("./alam.txt", "", (err) => {
//   if (err) throw err;
//   console.log("file created successfully");
// });

// Appending of Data
// let data = "Hello sajjad lorem ipsumm  ksd hsh";
// require("fs").appendFile("./sajjad.txt", data, (err) => {
//   if (err) throw err;
//   console.log("Data appended successfuly");
// });
// // sync
// require("fs").appendFileSync("./alam.txt", "hi");
// require("fs").appendFileSync("./alam.txt", " hi sajjad ");

//
// sync
// require("fs").truncateSync("./sajjad.txt", 7);
// // async
// require("fs").truncate("./alam.txt", 1, (err) => {
//   if (err) throw err;
//   console.log("Contentent deleted successfully");
// });

// delteting file by using fs module

// require("fs").unlink("./alam.txt", (err) => {
//   if (err) throw err;
//   console.log("File Deleted successfully");
// });

// require("fs").unlinkSync("./sajjad.txt");

// openfile

// require("fs").open("./sajjad.txt", "w", (err) => {
//   if (err) throw err;
//   console.log("file created successfully");
// });
