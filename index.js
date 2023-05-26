// const dotenv = require("dotenv");
// dotenv.config();

// console.log(process.pid);

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);

// console.log(process.argv);
let idx = 0;
let result = [];
while (true) {
  idx++;
  const r = Math.random();
  result.push(r);

  if (r > 0.5) {
  } else {
    console.log(result);
    process.exit();
  }
}
