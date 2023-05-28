const Router = require("../framework/Router");

const router = new Router();

const users = [
  { id: 1, name: "serg" },
  { id: 2, name: "andre" },
];

router.get("/users", (req, res) => {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.end(JSON.stringify(users));
});

router.post("/users", (req, res) => {
  res.end(JSON.stringify(users));
});

module.exports = router;
