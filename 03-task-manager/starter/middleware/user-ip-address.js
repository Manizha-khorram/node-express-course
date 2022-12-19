// const express = require('express');
// const app = express();
// const router = express.router
//1.first try

const userIPAddress = function(req,res, next){
    console.log(req.ip)
    next()
} 

//2.second try
/* router.get('/', (req,res) => {
    const ip = req.headers['x-forwarded-for'];
    console.log(ip); // ip address of the user
  }); */
module.exports = userIPAddress ;