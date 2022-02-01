import express from "express";
import { Mongoose } from "mongoose";

const PORT = process.env.PORT || 3001;

var testDBRouter = require("./server/testDB");

const app = express();

const connection = Mongoose.connection;

connection.once("open", function(){
console.log("connection with MongoDB was successful");
});

//endpoints to interact with our react app
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ..`);
});






