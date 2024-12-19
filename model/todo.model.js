const mongoose = require('mongoose');

// define a schema
const to_doSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},

description:{
    type:String,
    required:true
}
},{timestamps:true});

// create a model
 const Todo = mongoose.model('Todo-list', to_doSchema);

module.exports = Todo;

