const express = require ('express');
const app = express();
const morgan = require ('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res
//app.use([logger , authorize])
//app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/' , logger ,(req , res) => {
     
      res.send('Home')
})
app.get('/about' , (req , res) => {

  res.send('About')
})

app.get('/api/products' , (req , res) => {

    res.send('Products')
  })

  //if I want to use the middleware for single route just I can add  app.get('/api/items',[logger , authorize],(req , res) => {
app.get('/api/items' , (req , res) => {
  //using that middleware for item , by typing localhost:5000/api/items/?user=john I can access items.
    console.log(req.user)
    res.send('Items')
  })

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
  })
  