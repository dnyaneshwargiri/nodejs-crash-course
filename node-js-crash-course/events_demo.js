const eventEmitter= require('events')
//Create class
class MyEmitter extends eventEmitter{

}
//Init emitter
let myEmitter =new MyEmitter()
//Event Lister
myEmitter.on('event',()=>console.log('Event Fired!'))

//Emiit event
myEmitter.emit('event')