// Polyfill : adds a feature that the engine may lack //
// if browser does not have feature, if statement below will run //
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}     // creates an empty function, points prototype to whatever you passed in.
    F.prototype = o;
    return new F();
  };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function(){
        return 'Hi ' + this.firstname;  // have to use 'this' to reference the object //
    }
}
var john = Object.create(person); // pass it the object you want to create from, creates an empty object //


 // Prototypal Inheritance: create an object, and use that object as a prototype to create other objects // Powerful because you can change the prototype along the way //
john.firstname = "John"; // Overrides firstname on person object.
john.lastname = "Doe"; // Overrides lastname on person object.
console.log(john)
john.greet();

