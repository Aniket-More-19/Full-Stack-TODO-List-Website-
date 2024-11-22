const express = require("express");
const cors = require("cors");
const todosRouter = require("./routes/todoRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json);
app.use("/todos", todosRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
