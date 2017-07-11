(function(global, jQuery){

    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname, lastname, language)
    };

    var supportedLangs = ['en', 'es'];  // are not exposed to global, but can be used/changed in Greetr.js //

    // Not exposed to outside world until I want them to //
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {
        fullname: function(){
            return this.firstname + ' ' + this.lastname;
        },
        validate: function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw "Invalid Language";
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreetings: function(){
            return formalGreetings[this.language] + ', ' + this.fullname();
        },
        greet: function(formal){
            var msg;
            // if undefined or null it will be coerced to 'false'
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting()
            }
            if(console){
                console.log(msg);
            }
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullname());
            }
            // makes this function chainable //
            return this;
        },
        setLang: function(lang){
            this.language = lang;

            this.validate();

            return this;
        }

    };

    Greetr.init = function(firstname, lastname, language){
        
        var self = this;
        self.firstname = firstname || "";
        self.lastname = lastname || "";
        self.language = language || "en";
      
    }

    Greetr.init.prototype = Greetr.prototype; // Where objects are being created are pointing at //
    
    global.Greetr = global.G$ = Greetr; // On the global object, Greetr and G$ will point to the Greetr function /
    

}(window, $))