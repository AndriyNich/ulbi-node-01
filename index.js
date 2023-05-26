// const dotenv = require("dotenv");
// dotenv.config();

// console.log(process.pid);

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);

// console.log(process.argv);
// let idx = 0;
// let result = [];
// while (true) {
//   idx++;
//   const r = Math.random();
//   result.push(r);

//   if (r > 0.5) {
//   } else {
//     console.log(result);
//     process.exit();
//   }
// }

// const url = new URL("http://loveread.ec/read_book.php?id=71323&p=12");
// console.log(url);

const fs = require("fs").promises;
const path = require("path");

// console.log("start");
// fs.mkdir(path.resolve(__dirname, "dir1"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("create dir");
//   }
// });
// console.log("end");

// fs.writeFile(path.join(__dirname, "txt"), "wef qer  qwer qer q", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

const text = "adf adf qwe afad a;;A 112312  123213";
fs.writeFile(path.resolve(__dirname, "text.txt"), text)
  .then(() => fs.readFile(path.resolve(__dirname, "text.txt")))
  .then((data) => data.toString().split(" ").length)
  .then((count) =>
    fs.writeFile(path.resolve(__dirname, "text1.txt"), `Worlds count ${count}`)
  )
  .then(() => fs.rm(path.resolve(__dirname, "text.txt")))
  .catch((err) => console.log(err));
