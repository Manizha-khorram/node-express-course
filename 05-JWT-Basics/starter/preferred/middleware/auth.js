
const JWT = require('jsonwebtoken')
const CustomeAPIError = require ('../errors/custom-error')


const authenticationMiddleware = async (req, res , next) => {
      //checking whether the same token is provided or not?!
      const authHeader = req.headers.authorization;
      if(!authHeader || !authHeader.endsWith('gobbledygook')){
        throw new CustomeAPIError('Unathorized',401)
      }
      //we get the token
      const token = authHeader.split(' ')[1]

     console.log(token)
      const decoded = JWT.verify (token , process.env.JWT_SECRET , (err, result ) => {
        if (err){
          res.status(500).json({msg:'Unautorized to access'})
          console.log('Unautorized', err)
          return
        }
        console.log(result)
        const{ id , username } = result ;
        req.user = {username , id} ;
        res.status(200).json({result})
      }
      )
      next()
    

     
}

module.exports = authenticationMiddleware;