/**
 * Created by asad.naqvi on 2/14/2015.
 */
    "use strict";
    var Contact = function(address){
        this._address = address||"";
    }
//employee object constructor and prototype
var Employee = function(name,desig,salary,contact){
    this._name = name||"";
    this._designation = desig||"";
    this._salary = salary ||0;
    this.contact = contact ||{};
}
Employee.prototype.getSalary = function(){
    // validation or other business logic goes here
    return this._salary;
}
//contract object constructor function and prototype
var ContractEmployee = function(name,desig,salary,contact){
    Employee.call(this,name,desig,salary,contact);
}
ContractEmployee.prototype = Object.create(Employee.prototype);
ContractEmployee.prototype.paymentMode = "Per Hour";
//permanent employee object constructor function and prototype
var PermanentEmployee = function(name,desig,salary,contact){
    Employee.call(this,name,desig,salary,contact);
}
PermanentEmployee.prototype = Object.create(Employee.prototype);
PermanentEmployee.prototype.paymentMode = "Per Month";

// object creation
var contact = new Contact("LHR");
var obj = new PermanentEmployee("John","Manager Shift",100,contact);
//contact object is composed within the employee object
alert(obj.contact._address);