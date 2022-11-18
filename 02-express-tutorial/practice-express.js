const express = require('express');
const app = express();
const path = require('path');
const consoleLog = require ('./practice-middleware')

app.use(consoleLog)

app.get('/' , (req, res) => {

    res.sendFile(path.resolve(__dirname , './new-public/index.html'))
})

app.get('/sample' , (req, res) => {

    res.status(200).send('This is working.')
})


app.listen(3000);
