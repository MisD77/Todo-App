const express= require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
var corsOptions = {origin: 'https://localhost:8081'};
app.use(cors(corsOptions));
app.use(express.json());


//endpoints to interact with our react app
app.get("/api", (req, res) => {
    res.json({message: "Welcome to the to-do app!"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ..`);
});






