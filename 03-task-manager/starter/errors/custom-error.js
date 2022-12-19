

class CustomAPIError extends Error {
    constructor ( message , statusCode ){   
    super(message)              //since we are extending, it means we are setting up a child class so it is required to use the super method, which in invoks constructore of parent class.  
    this.statusCode = statusCode
    }
}

// Constructore method is a method which is invoke whenever a new intance of class is invoked, and in this case we pass two arguments and our message and our status code.

const createCustomError = (msg , statusCode) => {
    return new CustomAPIError (msg , statusCode)
}

module.exports = {createCustomError , CustomAPIError}