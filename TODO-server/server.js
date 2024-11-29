const express = require("express");
const cors = require("cors");
const todosRouter = require("./routes/todoRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/todos", todosRouter);

app.get("/", (req, res) => {
  res.send("Hello, Todo server started!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
