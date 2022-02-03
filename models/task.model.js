const mongoose = require("mongoose");

const Schemma = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: 'String',
        required: true
    },
    category:{
        type: 'String', 
        required: false
    },
    date: {
        type: 'Date',
        required: true,
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

