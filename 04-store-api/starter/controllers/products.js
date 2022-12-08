//17. Got the model , write a code to find those products which have featured 
const Product = require('../models/product')
//11.setup two function in controller
const getAllProductsStatic = async (req , res) => {
   const search = 'a'
   const products = await Product.find({ price : {$gt : 30 }
      //featured : true ,
      //name : {$regex : search , $options : 'i'},
        //options : 'i' = includ
   }).sort('price')
   .select('name price') //our result has just two properties mentioned.
   .limit(4)   //limits the num of result.                          
   .skip(2)//skips first two items
   //throw new error ('testing async error')
   res.status(200).json({ products , nbHits : products.length})
}
const getAllProducts = async (req , res) => {
   const {featured , company , name , sort , fields , numericFilters} = req.query //
   const queryObject = {}//instread of sending it directly to find, we are setting up a new object
   
   if (featured) {
      queryObject.featured = featured === 'true' ? true : false
   }
   if (company){
      queryObject.company = company
   }

   if(name){
      queryObject.name = {$regex : name , $options : 'i'}
   }

   if(numericFilters){
      const operatorMap = {
         '>' : '$gt',
         '>=' : '$gte',
         '=' : '$eq',
         '<':'$ls',
         '<=':'$lte',
      }
      const regEx = /\b(<|>|>=|=|<|<=)\b/g
      let filters = numericFilters.replace(
         regEx,
         (match) =>`-${operatorMap[match]}-`  //We have the object as the property and if there is a match here, hey give that key effectively I will swap the value. 
          ) //match here is a callback function to check if there is a match?!
         const options = ['price' , 'rating']
         filters = filters.split(',').forEach((item) =>{
            const [field , operator , value ] = item.split('-')
            if(options.includes(field)){
               queryObject[field] = {[operator] : Number(value) }
            }
         }) // method which split a string into an array.
         // console.log(filters)   
         
   }


   console.log(queryObject)
   let result = Product.find (queryObject) 
   if(sort){
      //products = products.sort()
      const sortList = sort.split(',').join(' ');
      result = result.sort(sortList)
   }
   else{
      result = result.sort('createAt')
   }

  if(fields){
   const sortList = fields.split(',').join(' ');
   result = result.select(sortList)
  }
  const page = Number(req.query.page) || 1  //everything come back from req.qeury is a string.
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit ;

  result = result.skip(skip).limit(limit)
  // num-items = 23 limit = 7 items 
  //4 pages => 7 7 7 2 

   const products = await result
   res.status(200).json({ products , nbHits : products.length})
 }
 
 module.exports = {
    getAllProducts ,
    getAllProductsStatic,
 }