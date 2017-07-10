function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;   
} // better to put methods on prototype --> more efficient to use

var john = new Person('John', 'Doe');
console.log(john);
console.log(john.getFullName())

var jane = new Person('Jane', 'Doe');
console.log(jane);