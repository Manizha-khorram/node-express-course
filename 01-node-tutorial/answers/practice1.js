let sentence = require ('./practice2')
console.log(sentence)

const os = require ('os');
const {writeFileSync} = require ('fs');
const user = os.userInfo().username;


writeFileSync('./content/practice.txt', `${sentence} , ${user}`)

