const express = require('express');
const router = express.Router();
const {people} = require('../data');
const { route } = require('./people');

router.post('/' , (req , res) =>{
    //console.log(req.body)
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcom ${name}`)
    }
    res.status(401).send('Please provide name value.');
})

module.exports = router;