console.log( 3 < 2 < 1)  //true -- < is read from left to right, 3 < 2 = false, false if coerced and made into the number 0 which IS < 1.

console.log(1 < 2 < 2) // true

// == -> equality -- uses coercion to make the vaules the same type. Causes strange errors because of the unexpected ways it behaves.
// === -> strict equality -- values must be exactly the same type to be true. Removes strange errors that == has.





/////////////////////////////////////////////////////////////////////////////////////////////////////
                               // CLOSURES - LECTURE 46 // 

        // Closure --> ... closes in all variables it should have access to ... // 
            // JS will make sure that your function will always have access to the variables it is supposed to. The scope is INTACT. 
            // Doesn't matter if outer functions have finished running yet or not.

function greet(whattosay) {

    //function expression//
    return function(name) {                         
        console.log(whattosay + ' ' + name)
    }

}

greet('hi')('Jessica') //invokes a function that returns a function


//another way to invoke the greet function and return anonymous function inside//
var sayHi = greet('hi') //new execution context is created --> whattosay = 'hi' -- the moment the execution context finishes, this is all still in memory!
sayHi('Jessica') // we now invoke the anonymous function, creates new execution context --> name = 'Jessica', it now goes up the scope chain to find the whattosay variable because whattosay still has access to that memory space!


                        // CLOSURES - PART 2 //

function buildFunctions(){
    var arr = [];
    for(var i = 0; i < 3; i++){

        arr.push(
            function(){
                console.log(i);
            }

        )

    }  // should have 3 function inside of array when this is finished.

    return arr;
}

var fs = buildFunctions();

fs[0](); // reference the item in the array, then invoke it. What will i be?
fs[1]();
fs[2]();

// this returns 3 for all... Why?

// EXECUTION STACK :

    // GLOBAL : buildFunctions(), fs
    // buildFunctions(): variables: i, arr
        // the console.log is not be executed right away, the function is not being invoked until after the for loop has run.
            // the i = 3 , arr= [f[0], f[1], f[2]]  --> i is no longer available by the time you invoke the function, so it looks to outer environment to see what it is. The i = 3. What is available in memory RIGHT NOW? That is what your function has access to.


            // HOW TO GET PAST THIS SUCCESSFULLY //

function buildFunctions2(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        let j = i  // every time for-loop runs, this will be a NEW variable in memory. ES6 way.
        arr.push(
            function(){
                console.log(i);
            }

             // ES5 Way:
                // (function(j){
                    // return function(){
                    //   console.log(j);
                    // }
                // }(i)) --> j will be stored in each separate execution context, closures will hang out and those j's will be available to use.

        )

    }  // should have 3 function inside of array when this is finished.

    return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // reference the item in the array, then invoke it. What will i be now?
fs2[1]();
fs2[2]();