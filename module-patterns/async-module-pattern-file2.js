/**
 * Created by asad.naqvi on 2/14/2015.
 * async module pattern that spans across multiple files
 */
    "use strict";
var asyncModule = (function(module){
    //anonymous function for creating namespaces to avoid clashes
    // and it will create closure which will save the environment(scope) of the variables as well
    var self = module;
    self.secondAlert = function(){
        alert("Hi , it's second alert prompt function from async second file module");
    }
    return self;
})(asyncModule || {});
