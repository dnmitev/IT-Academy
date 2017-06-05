var Company = (function () {
    "use strict";

    function Company(name) {
        this.name = name;
        this._employees = []
    }

    Company.prototype.getEmployeesCount = function () {
        return this._employees.length;
    }

    Company.prototype.hire = function (employee) {
        if (!(employee instanceof Employee)) {
            throw new TypeError("Parameter is not instance of Employee");
        }

        this._employees.push(employee);
    }

    Company.prototype.getEmployeesList = function () {
        var listAsString = '';

        for (var i = 0; i < this._employees.length; i++) {
            var emp = this._employees[i];
            listAsString += `${emp.name} ---> ${emp.jobPosition};`;
            listAsString += '\n';
        }

        return listAsString;
    }

    Company.prototype.fire = function (name) {
        var result = [];

        for (var i = 0; i < this._employees.length; i++) {
            var emp = this._employees[i];
            if (emp.name.toLowerCase() !== name.trim().toLowerCase()) {
                result.push(emp);
            }
        }

        this._employees = result;
    }

    return Company;
}());