
const express = require('express');
const app = express();

let people = require('./routes/people')
let auth = require('./routes/auth')


//static asset
app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({extended:false}))
// Parse json
app.use(express.json())
// should write the base path
app.use('/api/people', people)
app.use('/login' , auth)

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
  })
  