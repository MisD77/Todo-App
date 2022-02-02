const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

var corsOptions = {origin: 'https://localhost:8081'};
app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//endpoints to interact with our react app
app.get("/api", (req, res) => {
    res.json({message: "Welcome to the to-do app!"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ..`);
});






