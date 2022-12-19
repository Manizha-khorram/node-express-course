//1. get dotenv package so we can access to envirement , database.

require('dotenv').config()
//14.async errors package import 
require ('express-async-errors')
//2.step 2
const express = require ('express')
const app = express()

//8.import the function to connet to database
const connectDB = require ('./db/connect')
//13.import the router 
const productRouter = require ('./routes/products')

//3.import two error middlewares
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//4. setup express json middleware
app.use(express.json())

//5.routes
app.get('/' , (req, res) =>{
    res.send('<h1> Store API<h1> <a href = "/api/v1/products"> product route </a>')
})

//10.two routes
app.use('/api/v1/products' , productRouter)

//6.product route

//use both middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {

    //9.Last step to connect to our DB , this function returns a promise so we used start with async.
    await connectDB(process.env.MONGO_URI) 
    app.listen(port, console.log(`Server is listening on port ${port}..`))
    }
    catch(error){
       console.log(error)
    }
}

start()