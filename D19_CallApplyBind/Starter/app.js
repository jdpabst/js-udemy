// call() , apply() , bind()

// execution context:
    // variable environment , outer environment , 'this'


    // function: NAME, CODE (invocable), call() method, apply() method, bind() method.

    var person = {
        firstname: 'Jessica',
        lastname: 'Pabst',
        getFullName: function(){
            var fullname = this.firstname + ' ' + this.lastname; //'this' will point to the whole object... //
            return fullname;
        }
    }

    var logName = function(lang1, lang2){

        console.log("Logged: " + this.getFullName()) // will fail, is not a method of the person object, does not have access to the object.

    }.bind(person) // another way of binding...

    var logPersonName = logName.bind(person) // all function objects will get this, pass whatever object you want to be the 'this' variable (person object in our case)
    // bind - creates a COPY, tell what the 'this variable is.

    logName.call(person, 'en', 'es') // tell what the 'this' variable is, pass the normal parameters to the function, executes immediately.

    logName.apply(person, ['en', 'es']) // same as .call(), except the parameters MUST be in an ARRAY.


    logPersonName();


    // function borrowing //

    var person2 = {
        firstname: 'Jane',
        lastname: 'Doe'
    }

    person.getFullName.apply(person2) // using the method from the person object on the person2 object (must have similar property names to work...)


    // function currying --> creating a copy of a function but with some pre-set parameters (very useful in mathematical situations) - very useful usage of .bind()

    function multiply(a, b){
        return a * b;
    }

    var multipleByTwo = multiply.bind(this, 2) // give a parameter value, does not execute immediately, parameters sets permanent values of the parameters when the copy is made. a now = 2 in this copy of the multiply function.

    multipleByTwo(2); // 2 is the b parameter now. You can change b, but not a