
const Task = require('./models/task')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
//moddleware
app.use(express.json()) 
 
require('dotenv').config()
//routes
app.get('/hello' , (req , res) => {
  
    res.send ('Task Manger App')
})

app.use('/api/v1/tasks' , tasks)


const port = 3000 ;

//The process object in Node.js is a global object that can be accessed inside any module without requiring it. it provides various information sets about the runtime of a program.

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log ("Server is listening"))

    }catch (error) {
        console.log(error)
    }
}

start();

