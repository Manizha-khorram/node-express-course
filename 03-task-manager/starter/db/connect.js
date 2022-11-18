const mongoose = require('mongoose')

const connectDB = (url) => {
    //returning promiss
    return mongoose.connect(url ,{
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    } )
}

module.exports = connectDB ;

// .then(()=>console.log('Connected to DB...'))
// .catch((err) => console.log(err))