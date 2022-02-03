const express= require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
var corsOptions = {origin: 'https://localhost:8081'};
app.use(cors(corsOptions));

const mongoose = require('mongoose');

//const dbURI = "mongodb+srv://dixyaAchh:Dimbus.77@mycluster.eep8c.mongodb.net/todoDb?retryWrites=true&w=majority"
//mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
//.then((result) => console.log("connected to db"))
//.catch((err) => console.log(err));

// Connecting to MongoDB
var testDBRouter = require("../routes/testDB");
app.use("/testDB", testDBRouter);

//endpoints to interact with our react app
app.get("/api", (req, res) => {
    res.json({message: "Welcome to the to-do app!"});
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

