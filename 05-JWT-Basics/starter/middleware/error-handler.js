const CustomAPIError = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {     //The instanceof operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.
    return res.status(err.statusCode).json({ msg: err.message })
  }
  console.log('an error occured', err)
  return res.status(500).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
