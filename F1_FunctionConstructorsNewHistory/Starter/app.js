function Person(firstname, lastname){  // function constructor

    // passing default values here
    this.firstname = firstname;
    this.lastname = lastname;
}

var john = new Person('John', 'Doe'); // 'new' keyword is an operator. An empty object is created when 'new' is typed. Then we invoke the function. The 'this' variable will now point to the new object. Whatever you do to empty object with 'this' variable, will be what is returned for that object.
console.log(john)

var jane = new Person('Jane', 'Doe');
console.log(jane)