/**
 * Created by asad.naqvi on 2/14/2015.
  * async module pattern that spans across multiple files
 * if you want to acheve overriding functionality then you must make sure that parent function is loaded before child module function.
 * hint : use tight module coupling instead of async pattern and make sure the order of the files added in html is correct
 */
    "use strict";
var asyncModule = (function(module){
    //anonymous function for creating namespaces to avoid clashes
    // and it will create closure which will save the environment(scope) of the variables as well
    var self = module;
    self.alertMe = function(){
        alert("Hi , it's prompt from basic module");
    }
    return self;
})(asyncModule || {});
