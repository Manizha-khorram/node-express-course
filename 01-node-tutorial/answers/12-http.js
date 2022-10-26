const http = require('http')

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is my info')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})


server.listen(5000)


//lodash
const _= require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flatMapDeep(items)
console.log(newItems)