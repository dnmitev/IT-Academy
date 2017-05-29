var Garage = (function () {
    "use strict";

    class Garage {
        constructor(name, limit) {
            this.name = name;
            this.limit = limit;

            this._vehiclesList = [];
        }

        get name() {
            return this._name;
        }

        set name(value) {
            // TODO: validate
            this._name = value;
        }

        get limit() {
            return this._limit;
        }

        set limit(value) {
            // TODO: Validate
            this._limit = value;
        }

        get vehiclesCount() {
            return this._vehiclesList.length;
        }

        addVehicle(vehicle) {
            if (!(vehicle instanceof Vehicle)) {
                throw new TypeError('Given vehicle is not an instance of Vehicle');
            }

            if (this.vehiclesCount === this.limit) {
                throw new Error(`Garage's limit (${this.limit}) was reached.`);
            }

            this._vehiclesList.push(vehicle);
        }

        removeVehicle(licensePlate) {
            var vehicles = [];
            var vehicleRemoved = null;
            for (let i = 0; i < this._vehiclesList.length; i++) {
                let vehicle = this._vehiclesList[i];
                if (vehicle.licensePlate.toLowerCase() != licensePlate.toLowerCase()) {
                    vehicles.push(vehicle);
                } else {
                    vehicleRemoved = vehicle;
                }
            }

            this._vehiclesList = vehicles;

            return vehicleRemoved;
        }

        getVehiclesList(property = 'make') {
            return this._vehiclesList.sort(_sortFactory(property));
        }

        findVehiclesByMake(make) {
            var result = _findByProperty(this._vehiclesList, 'make', make);
            return result;
        }

        findVehiclesByModel(model) {
            var result = _findByProperty(this._vehiclesList, 'model', model);
            return result;
        }

        findVehiclesByLicensePlate(licensePlate) {
            var result = _findByProperty(this._vehiclesList, 'licensePlate', licensePlate);
            return result && result.length == 1 ? result[0] : null;
        }
    }

    // https://stackoverflow.com/a/8539989
    function _sortFactory(prop) {
        return function (a, b) {
            return a[prop].localeCompare(b[prop]);
        };
    }

    function _findByProperty(collection, prop, value) {
        var result = [];
        for (let i = 0; i < collection.length; i++) {
            var item = collection[i];
            if (item[prop].toLowerCase() === value.toLowerCase()) {
                result.push(item);
            }
        }

        return result;
    }

    return Garage;
}());