const { writeFileSync } = require('fs');

fs = require('fs').promises;

async function makeFile(){
 
    try {

         await writeFileSync('./content/practice2.txt','This the first line. \n');
         
         for (let i = 2; i <= 10; i++){
         await writeFileSync('./content/practice2.txt',`This the ${i}th line. \n` , {flag :'a'});

    }}
    catch(error){
        console.log(error)
    }

    }

makeFile();