var Employee = (function () {
    "use strict";

    function Employee(name, jobPosition) {
        this.name = name;
        this.jobPosition = jobPosition;
    }
    
    Employee.prototype.introduce = function() {
        console.log(`Hi! I am ${this.name} and I work as ${this.jobPosition}`);
    }

    return Employee;
}());