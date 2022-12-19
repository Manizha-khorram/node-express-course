//12.setup our routers

//invocking router
const { Router } = require('express');
const express = require('express');
const router = express.Router();

//importing the funtions from controller
const { getAllProducts , getAllProductsStatic } = require ('../controllers/products')

//finally setup the route 
router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)

module.exports = router