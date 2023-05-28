const Application = require("./framework/Application");
const userRouter = require("./src/user-routers");
const PORT = process.env.PORT || 5000;

const app = new Application();
app.listen(PORT, () => console.log(`server start on port ${PORT}`));

app.addRouter(userRouter);
