/**
 * Created by asad.naqvi on 2/14/2015.
 */
    "use strict";
var basicModule = (function(){
    //anonymous function for creating namespaces to avoid clashes
    // and it will create closure which will save the environment(scope) of the variables as well
    var self ={};
    self.alertMe = function(){
        alert("Hi , it's prompt from basic module");
    }
    return self;
})();
