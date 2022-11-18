const express = require ('express');
const app = express ();
const path = require ('path');

//setup static and middleware
app.use(express.static('./public'))

//adding to static assets
//SSR

app.get('/', (req, res) =>{

    //path.resolve or path.join (we need an absolute path)
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) =>{

    res.status(404).send('<h1>Resource note found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening')
})