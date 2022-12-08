//16.dynamically add all of the products.json to our database.

require('dotenv').config()

const connectDB = require ('./db/connect')
const Product = require ('./models/product')

const jsonProducts = require ('./products.json')

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()  // ?
        await Product.create(jsonProducts)  //dynamically adding product to the database.
        process.exit(0) //everything went well and we dont need the process to be running for ever
        console.log('Success!!!!')
    } catch(error){
        console.log(error)
        process.exit(1) //exiting the error if the error occured.
    }
}

start();