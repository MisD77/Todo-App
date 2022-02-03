const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
        required: false,
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

