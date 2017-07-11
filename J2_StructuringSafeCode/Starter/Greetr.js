(function(global, jQuery){

    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname, lastname, language)
    }

    Greetr.prototype = {};

    Greetr.init = function(firstname, lastname, language){
        var self = this;

        self.firstname = firstname || "";
        self.lastname = lastname || "";
        self.language = language || "en";
      
    }

    Greetr.init.prototype = Greetr.prototype; // Where objects are being created are pointing at //
    
    global.Greetr = global.G$ = Greetr; // On the global object, Greetr and G$ will point to the Greetr function /
    

}(window, $))