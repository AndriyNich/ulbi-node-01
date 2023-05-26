const os = require("os");
const cluster = require("cluster");

if (cluster.isPrimary) {
  console.log("is primary");
  for (let i = 0; i < os.cpus().length - 1; i++) {
    console.log("start.process");
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`worker ${worker.process.pid} is killed`);
    cluster.fork();
  });
} else {
  console.log(`fork process pid=${process.pid} is started`);

  setInterval(() => {
    console.log(`process with pid=${process.pid} is working`);
  }, 5000);
}
