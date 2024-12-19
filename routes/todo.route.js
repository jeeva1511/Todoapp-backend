const express = require('express');
const { postTodo , getTodo , putTodo , deleteTodo } = require('../controllers/todo.controller');
const router = express.Router();

// post method
router.post('/post',postTodo);

// get method
router.get('/get',getTodo);

//put method 
router.put('/update/:id',putTodo);

// delete method
router.delete('/delete/:id',deleteTodo);

module.exports = router;



