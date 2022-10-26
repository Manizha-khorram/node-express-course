const http = require ('http');

const server = http.createServer();

server.on('request', (req,res)=>{
    console.log('Welcom');
    res.end('Welcom to my page')
})

server.listen(5000);