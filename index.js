const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const todoRoutes = require('./routes/todo.route');

// env files
dotenv.config();

// 
const app = express();

// connect to cors server
app.use(cors());

// connecting to DB
const mongodb = process.env.MONGODB_URI;
mongoose.connect(mongodb)
.then(console.log("Db connected"))
.catch((error)=>console.error("DB connection error:", error));

// 
app.use(express.json());

// Routes
app.use('/',todoRoutes);


// connecting to server
Port = process.env.PORT;
app.listen(Port,()=>console.log(`Happy Hacking! server is running on: ${Port} `));

