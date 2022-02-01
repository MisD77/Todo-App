const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


//endpoints to interact with our react app
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ..`);
});





