const Emitter = require("events");

const emitter = new Emitter();

emitter.on("message", (data, second, thrid) => {
  console.log(`event data: ${data}`);
  console.log(`event second: ${second}`);
});

const MESSAGE = process.env.message || "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "Ви не вказали повідомлення");
}
