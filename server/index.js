const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

//Connecting to MongoDB
const connection = require("../routes/testDB.route");
app.use("/testDB.route", connection);

const tasks = require("../routes/tasks.route");
app.use("/api/tasks", tasks);

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the to-do app!" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} ..`);
});

/*
db.tasks.insertMany([ 
    {
        name: 'Exercie',
        category: 'Lifestyle',
        date: Date()
    }, 
    {
        name: 'Grocery', 
        category: 'Food',
        date: Date()
    }, 
    {
        name: 'Study',
        category: 'Education', 
        date: Date()
    }
])
*/
