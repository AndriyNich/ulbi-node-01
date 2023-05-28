const fs = require("fs");
const path = require("path");

const stream = fs.createReadStream(path.resolve(__dirname, "db3.mdb"));

const streamWr = fs.createWriteStream(path.resolve(__dirname, "db3-copy.mdb"));

stream.on("data", (chunk) => {
  streamWr.write(chunk);
});

stream.on("end", () => {
  streamWr.close;
});
