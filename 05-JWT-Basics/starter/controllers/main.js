

const CustomeAPIError = require ('../errors/custom-error')

const login = async (req, res) => {
    console.log('In login req.body is :',req.body)
    const {username , password} = req.body


    if(!username || !password){
        throw new CustomeAPIError ('Please Proive Email and password' , 400)
    }


    console.log(username, password);
    res.send('Fake Login/Register/Sign up')
}

const dashboard = async ( req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({ msg : 'Hello, Welcom', secret: `Here is your authorized date, your lucky number is ${luckyNumber}`})
}

module.exports = {login , dashboard}