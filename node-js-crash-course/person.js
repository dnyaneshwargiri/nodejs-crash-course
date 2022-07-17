console.log(__dirname,__filename)
class Person{
    constructor(name, age){
        this.name=name
        this.age=age
    }
    greetings(){
        console.log(`Hello ${this.name}!`);
    }
}
module.exports = Person