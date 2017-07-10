
function mapForEach(arr, fn){
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr
}


var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
    return item * 2
}) // called a function, gave it something to do with each item of the array...
console.log(arr2)

var arr3 = mapForEach(arr1, function(item){
    return item > 2
}) // called a function, gave it something to do with each item of the array...
console.log(arr3)

var arr4 = mapForEach(arr1, function(item){
    return item * item;
})

console.log(arr4)

var checkPastLimit = function(limiter, item){
    
    return item > limiter;
}

var checkPastLimitSimplified = function(limiter){
    return function(limiter, item){  // creating with function expression
        return item > limiter
    }.bind(this, limiter); // copying object that has first parameter pre-set
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1)); // remember that mapForEach has 2 parameters, an array and a callback function
console.log(arr5);

// try not to allow the smaller functions being past around to change data.



// underscorejs.org website --> functional programming helpers // download the library to use
// lodash.com --> similar to underscore // download the library to use




