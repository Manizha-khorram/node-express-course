const JWT = require('jsonwebtoken')
const CustomeAPIError = require ('../errors/custom-error')


const logon = async (req , res ) => {
  const { username, password } = req.body
 
    if (!req.body.username || !req.body.password){

      throw new CustomeAPIError ('Unauthorized' , 400)
    }
    JWT.sign({username : req.body.username} ,   //{username: req.body.username} this is payload which you sent to the user.   // signed json web token   //payload : where uniq data stored related to user.
        process.env.JWT_SECRET, 
        {expiresIn : process.env.JWT_LIFETIME},
        (err, result ) => {
          if (err){
            res.status(500).json({msg:'Somthing went wrong.'})
            console.log('jwt signing error', err)
            return
          }
          res.status(200).json({name : req.body.username , token: result})
         
        }
        )   
}




module.exports = {logon }