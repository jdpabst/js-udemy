var a = 3;
console.log(typeof a); // 'typeof' tells you what to expect (primitive)

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird! Arrays are also objects, so it returns 'object'
console.log(Object.prototype.toString.call(d)); // better! On the base object, invoke toString, tell it what to point to.

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person); // 'instancecof' tells you if you find that type of object down the prototype chain (boolean answer)

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever... 

var z = function() { }; // functions are objects, will tell you it is a function.
console.log(typeof z);

