// step1:- Create a folder and name it Sample
// step2:- Create a file in it name it index.txt and add data into it
// step3:- Add more data into the file at the end of existing data
// step4:- Read the data without getting the buffer data at first
// step5:- Rename the file name it myindex.txt
// step6:- Now delete both the file and the folder

// import fs module
const fs = require("fs");

// implementation of step 1(Creating sample folder)
// fs.mkdir("./sample", (err) => {
//   if (err) throw err;
//   console.log("sample folder is created ");
// });

//step 2:-
// fs.writeFile("./sample/index.txt", "hello index file", (err) => {
//   if (err) throw err;
//   console.log("index file created successfully");
// });

// step 3 :-
// fs.appendFile("./sample/index.txt", "hello from append ", (err) => {
//   if (err) throw err;
//   console.log("Content appended successfully");
// });

// step 4 :-
// fs.readFile("./sample/index.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// step 5 :-

// fs.rename("./sample/index.txt", "./sample/myindex.txt", (err) => {
//   if (err) throw err;
//   console.log("File renamed successfully");
// });

// step 6:-delete file

// fs.unlink("./sample/myindex.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted successfully");
// });

// step 7 :- delete folder

fs.rmdir("./sample", (err) => {
  if (err) throw err;
  console.log("Folder deleted successfully");
});
