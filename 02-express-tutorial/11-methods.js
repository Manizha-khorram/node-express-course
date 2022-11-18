
const express = require('express');
const app = express();

let {people} = require('./data')


//static asset
app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({extended:false}))
// Parse json
app.use(express.json())

app.get('/api/people' , (req, res)=>{
    res.status(200).json({ success:true , data:people})

})

app.post('/api/people' , (req , res) =>{
    
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false , msg:'Please provide name value'})
    }
    res.status(201).json({success:true , person:name});
})
app.post('/api/postman/people' , (req, res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false , msg:'Please provide name value'})
    }
    res.status(201).send({success:true , data:[...people, name ]})
})
app.post('/login' , (req , res) =>{
    //console.log(req.body)
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcom ${name}`)
    }
    res.status(401).send('Please provide name value.');
})

app.put('/api/people/:id' , (req, res) => {
    const {id} = req.params
    const {name} = req.body
    //console.log(id, name)
    //res.send('hello world')

    //Number : the type should be changed to number
    //find : finding the person if it exist or not?!
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false , msg:`No person with id : ${id}`})
    }
    const newPeople = people.map((person) =>{
        if (person.id === Number(id)){
            person.name = name
        }
    
        return person;
    })
     res.status(200).json({ success : true , msg : newPeople })
    })

    app.delete('/api/people/:id' , (req , res) =>{
        const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res
        .status(404)
        .json({success:false , msg:`No person with id : ${req.params.id}`})
    }
    const newPeople = people.filter((person) =>
        person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success : true, msg: newPeople})
    })
    


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
  })
  