const mongoose = require("mongoose")
const Task = require("../models/task")

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

// What was the reason he used the async and awite here???
const createTask = async ( req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getTask = ( req, res) => {
    res.json({id:req.params.id})
}
const updateTask = ( req, res) => {
    res.send('update task')
}
const deleteTask = ( req, res) => {
    res.send('delete task')
}


module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}