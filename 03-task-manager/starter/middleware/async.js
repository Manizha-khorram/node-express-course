const asyncWrapper = (fn) => {
 return async(req, res, next) => {
    try{
        await fn(req, res, next)
    }catch(error){
        next(error)
    }
 }  //we are invoking the async right away
}

module.exports = asyncWrapper ;