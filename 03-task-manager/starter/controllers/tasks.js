const mongoose = require("mongoose")
const Task = require("../models/task")
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require ('../errors/custom-error')
const getAllTasks = asyncWrapper (async (req, res) => {

    const tasks = await Task.find({})
    res.status(200).json({tasks})  // ({ tasks : tasks}) ES6
    //res.status(200).json({tasks , amount:tasks.length}) 
    //res.status(200).json({success: true , data:{tasks , nbHits:tasks.length}}) 
})

// What was the reason he used the async and awite here???
const createTask = asyncWrapper (async ( req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})

const getTask = asyncWrapper (async ( req, res, next) => {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID});
    if(!task){ //1.this error is set if the id syntax error was correct but didnt match!
       return next (createCustomError(`no task with id ${taskID}` , 404))
       
       /*mannaul config
         const error = new Error('Not Found')
         error.status = 404;
         return next(error)
         return res.status(404).json({msg: `no task with id ${taskID}`})  // we should always use return because there are two res.send is written, otherwise it's shows error.
*/
       
    }
    res.status(200).json({task})
}
/*catch(error){     //2.this error is set if the id syntax was wrong.
    res.status(500).json({msg: error})*/
)

const deleteTask = asyncWrapper (async( req, res) => {

    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID}); // what is that underscore for?

    if(!task){ //1.this error is set if the id syntax error was correct but didnt match!
        return next (createCustomError(`no task with id ${taskID}` , 404))
        //return res.status(404).json({msg: `no task with id ${taskID}`})  // we should always use return because there are two res.send is written, otherwise it's shows error.
    }
    res.status(200).json({task})
})

const updateTask = asyncWrapper (async ( req, res) => {
  
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({ _id:taskID} , req.body , {
            new : true, 
            runValidators : true ,
        })
        //res.status(200).json({id: taskID , data:req.body})

        if(!task){ //1.this error is set if the id syntax error was correct but didnt match!
            return next (createCustomError(`no task with id ${taskID}` , 404))
            // return res.status(404).json({msg: `no task with id ${taskID}`})  // we should always use return because there are two res.send is written, otherwise it's shows error.
        }
        res.status(200).json({task})
    })

module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}