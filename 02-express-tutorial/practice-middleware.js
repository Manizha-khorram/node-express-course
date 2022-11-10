const consoleLog = (req , res , next) => {
  console.log('Hello , Everyone !');
  next();
}

module.exports = consoleLog;