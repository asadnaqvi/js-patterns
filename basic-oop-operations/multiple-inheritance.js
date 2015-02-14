/**
 * Created by asad.naqvi on 2/14/2015.
 * prototypical inheritance
 * Notes:
 * don't add methods in constructor function because methods will be reassigned on every object creation
 * don't redefine the prototype instead reuese the existing prototype of the object
 *
 */
var Person = function(msg){
    this._doWork = function(){
        return msg;
    }
}
//employee object constructor and prototype
var Employee = function(name,desig,salary){
    this._name = name||"";
    this._designation = desig||"";
    this._salary = salary ||0;
}
Employee.prototype.getSalary = function(){
    // validation or other business logic goes here
    return this._salary;
}
//contract object constructor function and prototype
 var ContractEmployee = function(name,desig,salary){
     Employee.call(this,name,desig,salary);
 }
ContractEmployee.prototype = Object.create(Employee.prototype);
ContractEmployee.prototype.paymentMode = "Per Hour";
//permanent employee object constructor function and prototype
var PermanentEmployee = function(name,desig,salary){
    Employee.call(this,name,desig,salary);
}
PermanentEmployee.prototype = Object.create(Employee.prototype);
//mixin via delegation such as mixin.call(object)
//Notes : mixin will clone the function rather copying
Person.call(PermanentEmployee.prototype,"works full month with public holidays");
//mixin(PermanentEmployee.prototype,Person.prototype);
PermanentEmployee.prototype.paymentMode = "Per Month";

// object creation
var obj = new PermanentEmployee("John","Manager Shift",100);
alert(obj._doWork());