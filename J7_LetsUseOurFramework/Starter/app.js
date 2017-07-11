
// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');
// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function(){


    // create a new 'Greetr' objects (let's pretend we know teh name from the login)
    var loginGrtr = G$('Jane', 'Doe');
    // hide the login on the screen
    $('#logindiv').hide();
    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log teh welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();


})