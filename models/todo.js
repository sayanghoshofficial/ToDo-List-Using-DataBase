// require libray mongoose
const mongoose = require('mongoose');

// define the To do model schema
const todoSchema =  new mongoose.Schema({
    description:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    }
});

// create mongoose model
const ToDo = mongoose.model('ToDo',todoSchema);

// export todo
module.exports = ToDo;