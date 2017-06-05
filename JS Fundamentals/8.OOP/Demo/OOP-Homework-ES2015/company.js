var Company = (function () {
    "use strict";

    class Company {
        constructor(name) {
            this.name = name;
            this._employees = [];
        }

        get name() {
            return this._name;
        }

        set name(value) {
            // TODO: validate if needed
            this._name = value;
        }

        get employeesCount() {
            return this._employees.length;
        }

        hire(employee) {
            if (!(employee instanceof Employee)) {
                throw new TypeError('Parameter is not instance of Employee');
            }

            this._employees.push(employee);
        }

        fire(name) {
            var result = [];
            for (var i = 0; i < this._employees.length; i++) {
                var emp = this._employees[i];
                if (emp.name.toLowerCase() !== name.trim().toLowerCase()) {
                    result.push(emp);
                }
            }

            this._employees = result;
        }

        getEmployeesList() {
            var listAsString = '';

            for (var i = 0; i < this._employees.length; i++) {
                var emp = this._employees[i];
                listAsString += `${emp.name} --> ${emp.jobPosition};`;
                listAsString += '\n';
            }

            return listAsString;
        }
    }

    return Company;

    // var employees = [];
    // var company = Object.create({});

    // Object.defineProperty(company, 'init', {
    //     value: function (name) {
    //         this.name = name;
    //         return this;
    //     }
    // });

    // Object.defineProperties(company, {
    //     employeesCount: {
    //         get: function () {
    //             return employees.length;
    //         }
    //     },
    //     hire: {
    //         value: function (employee) {
    //             // TODO: validate if employee is instance of Employee
    //             employees.push(employee);
    //         }
    //     },
    //     fire: {
    //         value: function (name) {
    //             var result = [];
    //             for (var i = 0; i < employees.length; i++) {
    //                 var emp = employees[i];
    //                 if (emp.name.toLowerCase() !== name.trim().toLowerCase()) {
    //                     result.push(emp);
    //                 }
    //             }

    //             employees = result;
    //         }
    //     },
    //     getEmployeesList: {
    //         value: function () {
    //             var listAsString = '';

    //             for (var i = 0; i < employees.length; i++) {
    //                 var emp = employees[i];
    //                 listAsString += `${emp.name} --> ${emp.jobPosition};`;
    //                 listAsString += '\n';
    //             }

    //             return listAsString;
    //         }
    //     }
    // });

    // return company;
}());