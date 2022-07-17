const Person= require('./person')
//import Person from './person'
let person1=new Person('Dnyaneshwar',24)
person1.greetings();
const path =require('path');
//File name
console.log(__filename);
//Base file name
console.log(path.basename(__filename));
//Directory Name
console.log(__dirname);
//Extension Name
console.log(path.extname(__filename));
//Create path object
console.log(path.parse(__filename));
//Concatenate path
console.log(path.join(__dirname,'test','hello.html'));


const Logger = require('./logger');
const logger =new Logger()
logger.on('message', data =>{console.log(`Call listener: ${data.id} : ${data.msg}`);})
logger.log('Hello World')
logger.log('Hi');
logger.log('No internet connection')
