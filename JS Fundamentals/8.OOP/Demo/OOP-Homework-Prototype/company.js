var Company = (function () {
    "use strict";
    var employees = [];
    var company = Object.create({});

    Object.defineProperty(company, 'init', {
        value: function (name) {
            this.name = name;
            return this;
        }
    });

    Object.defineProperties(company, {
        employeesCount: {
            get: function () {
                return employees.length;
            }
        },
        hire: {
            value: function (employee) {
                // TODO: validate if employee is instance of Employee
                employees.push(employee);
            }
        },
        fire: {
            value: function (name) {
                var result = [];
                for (var i = 0; i < employees.length; i++) {
                    var emp = employees[i];
                    if (emp.name.toLowerCase() !== name.trim().toLowerCase()) {
                        result.push(emp);
                    }
                }

                employees = result;
            }
        },
        getEmployeesList: {
            value: function () {
                var listAsString = '';

                for (var i = 0; i < employees.length; i++) {
                    var emp = employees[i];
                    listAsString += `${emp.name} --> ${emp.jobPosition};`;
                    listAsString += '\n';
                }

                return listAsString;
            }
        }
    });

    return company;
}());