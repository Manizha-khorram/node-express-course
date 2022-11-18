
// for using express we should invoke it into our file.
const express = require('express'); //import
const app = express(); //invoke


app.get('/', (req , res)=>{
   res.status(200).send('Home page')
})
app.get('/about', (req , res) =>{
    res.status(200).send('About Page')
})

app.all('*' , (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening')
})

//app.get (read data)
//app.post (insert data)
//app.put (update data)
//app.delete ()
//app.use ()
//app.all ( all http methods )
//app.listen ()

