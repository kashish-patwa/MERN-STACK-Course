// What new does internally

// When you write:
const obj1= new Person("Shahid");


// JavaScript performs these four hidden steps:

// 1)Creates a new empty object

let obj= {};


// Sets the prototype

obj.__proto__ = Person.prototype;


// Binds this to the new object

Person.call(obj, "Shahid");


//Returns the new object automatically

return obj;

// So, this inside the constructor now points to the newly created object — not the global scope.