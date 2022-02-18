const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

//Connecting to MongoDB
var testDBRouter = require("../routes/testDB.route");
app.use("/testDB", testDBRouter);

const tasks = require("../routes/tasks.route");
app.use("/api/tasks", tasks);

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the to-do app!" });
});

module.exports = app;
