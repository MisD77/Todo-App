const express= require('express');
const cors = require('cors');
const app = express();
var corsOptions = {origin: 'https://localhost:8081'};


require('dotenv').config();
app.use(express.json());
app.use(cors(corsOptions));

//getting model 
const Task = require('../models/task.model');

//Connecting to MongoDB
var testDBRouter = require("../routes/testDB");
app.use("/testDB", testDBRouter);


//endpoints 
app.get("/api", (req, res) => {
    res.json({message: "Welcome to the to-do app!"});
});

app.get('/api/add-task', (req,res) => {
    const task = new Task ({
        name: 'Renew License',
        category: 'Misc',
        date: Date.now()
    });
    task.save()
    .then ((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

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

