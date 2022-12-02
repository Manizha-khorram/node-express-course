const mongoose = require("mongoose")


//Schema defines the structure for the document like type, validations . Mongoos modules provids the interface to the databse with create, update ...
const TaskSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true, 'must provide a name' ], // we want it with a costum message so we put it innto array.
        trim : true ,
        maxlength : [ 20, 'name can not be more than 20 charachters '],
       
    },
    completed: {
        type : Boolean,
        default : false,

    },

    discription: {
        type : String,
        required : [true , 'Please provide some discription.']
    }

    
    //just properties we write here will pass to database, anything else will be ignored!!
})
/*TaskSchema.pre('save', function (next) {
     const regExp = /[A-Z]/ ;
    const isMatch = regExp.test(task.name.charAt(0))
    if(!isMatch){
        return res.status(400).json({err})
    }else{
        res.status(201).json({ task })
    }
    
})
*/
/*
TaskSchema.pre('save', function (next) {
    function capitalizeFirstLetter(str){
        return str[0].toUpperCase() + str.slice(1);
    }
    this.name = capitalizeFirstLetter(this.name);
    next()
})
*/
//model ('name' , schema) : an instance of model is called a document.Models are responsible for creating and reading documents from the underlying MongoDB database.
module.exports = mongoose.model('Task', TaskSchema)