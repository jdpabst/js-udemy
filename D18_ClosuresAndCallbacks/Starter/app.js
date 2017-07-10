function sayHiLater(){   // CLOSURE!
    var greeting = 'Hi!';

    setTimeout(function() {  // CALLBACK!
        console.log(greeting);
    }, 3000) // in milliseconds
}

sayHiLater();



                                        // CALLBACK //

function tellMeWhenDone(callback){
    var a = 1000;
    var b = 2000;

    callback();
}

tellMeWhenDone( function(){         // the callback

    alert('I am done!');

})