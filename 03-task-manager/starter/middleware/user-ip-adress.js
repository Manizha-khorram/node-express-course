// const express = require('express');
// const app = express();
// const router = express.router
//1.first try

/*const userIPAdress = function(req,res){
    console.log(req.ip)
} */

//2.second try
/* router.get('/', (req,res) => {
    const ip = req.headers['x-forwarded-for'];
    console.log(ip); // ip address of the user
  }); */
module.exports = userIpAdress ;