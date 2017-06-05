var Employee = (function () {
    "use strict";

    class Employee {
        constructor(name, jobPosition) {
            this.name = name;
            this.jobPosition = jobPosition;
        }

        introduce() {
            console.log(`Hi! I am ${this.name} and I work as ${this.jobPosition}.`);
        }
    }

    return Employee;
}());