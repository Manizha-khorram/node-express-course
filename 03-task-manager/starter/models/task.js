const mongoose = require("mongoose")


//Schema defines the structure for the document like type, validations . Mongoos modules provids the interface to the databse with create, update ...
const TaskSchema = new mongoose.Schema({
    name : String , completed: Boolean,
    //just properties we write here will pass to database, anything else will be ignored!!
})

//model ('name' , schema) : an instance of model is called a document.Models are responsible for creating and reading documents from the underlying MongoDB database.
module.exports = mongoose.model('Task', TaskSchema)