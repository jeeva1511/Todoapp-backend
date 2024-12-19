const express = require('express');
const Todo = require('../model/todo.model');


// get method
const getTodo =async(req,res)=>{
    try {
        const todolist = await  Todo.find();
        res.status(200).json({todolist});
        console.log(todolist);
    } catch (error) {
       res.status(500).send(error); 
    }
}

// post method
const postTodo = async(req, res)=>{
    try {
        console.log(req.body);
        const todolist = new Todo(req.body);
        await todolist.save();
        res.status(200).json(todolist);

    } catch (error) {
       res.status(500).send(error); 
    }
};

// put method
const putTodo = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedTodo);
    }
    catch (error) {
        res.status(500).send(error);
    }    
};

// delete method

const deleteTodo = async(req,res)=>{
    try {
        const id = req.params.id;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: 'Deleted Successfully'});
    }
    catch (error) {
        res.status(500).send(error);
    }    
};

// export
module.exports = { postTodo , getTodo , putTodo , deleteTodo };