var Employee = (function () {
    "use strict";

    var employee = Object.create({});

    Object.defineProperty(employee, 'init', {
        value: function (name, jobPosition) {
            this.name = name;
            this.jobPosition = jobPosition;

            return this;
        }
    });

    Object.defineProperties(employee, {
        introduce: {
            value: function () {
                console.log(`Hi! I am ${this.name} and I work as ${this.jobPosition}.`);
            }
        }
    });

    return employee;
}());