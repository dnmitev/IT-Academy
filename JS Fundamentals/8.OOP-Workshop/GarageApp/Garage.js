var Garage = (function () {
    "use strict";

    const MIN_NAME_LENGTH = 3;
    const MAX_NAME_LENGTH = 40;

    const MIN_LIMIT_VALUE = 0;
    const MAX_LIMIT_VALUE = 100;

    const VEHICLE_TYPES = ['car', 'truck', 'bike', 'bus'];

    let _vehicles = [];

    function _getLexicographicalSortByMake(first, second) {
        var firstName = first.make.toLowerCase(),
            secondName = second.make.toLowerCase();

        if (firstName < secondName) {
            return -1;
        } else if (firstName > secondName) {
            return 1;
        } else {
            return 0;
        }
    }


    class Garage {
        constructor(name, limit, typeOfVehicles) {
            this.name = name;
            this.limit = limit;
            this.typeOfVehicles = typeOfVehicles;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            if (typeof (value) !== 'string' || !isNaN(value * 1)) {
                throw new Error('Name must be a string');
            } else if (value.length < MIN_NAME_LENGTH) {
                throw new Error(`Name has invalid length. Name is too short.`);
            } else if (value.length > MAX_NAME_LENGTH) {
                throw new Error(`Name is too long`);
            }

            this._name = value;
        }

        get limit() {
            return this._limit;
        }

        set limit(limitValue) {
            if (typeof (limitValue) !== 'number') {
                throw new Error('Limit value should be a number');
            } else if (limitValue < MIN_LIMIT_VALUE) {
                throw new Error(`Limit value cannot be below ${MIN_LIMIT_VALUE}`);
            } else if (limitValue > MAX_LIMIT_VALUE) {
                throw new Error(`Limit value cannot exceed ${MAX_LIMIT_VALUE}`);
            }

            this._limit = limitValue;
        }

        get typeOfVehicles() {
            return this._typeOfVehicles.toUpperCase();
        }

        set typeOfVehicles(value) {
            if (VEHICLE_TYPES.indexOf(value.toLowerCase()) < 0) {
                throw new Error(`${value} is not a valid vehicle type. Valid vehicle types are: ${VEHICLE_TYPES.join('|')}`);
            }

            this._typeOfVehicles = value;
        }

        get vehiclesCount() {
            return _vehicles.length;
        }

        addVehicle(vehicle) {
            if (this.vehiclesCount === this.limit) {
                throw new Error(`Garage is already full. The limit is ${this.limit}`);
            } else if (!(vehicle instanceof Vehicle)) {
                throw new Error('You should add only instances of Vehicle');
            }

            _vehicles.push(vehicle);
        }

        removeVehicle(licensePlate) {
            let tempVehicles = [];
            for (var i = 0; i < _vehicles.length; i++) {
                let item = _vehicles[i];

                if (item.plate === licensePlate) {
                    continue;
                }

                tempVehicles.push(item);
            }

            _vehicles = tempVehicles;
        }

        getVehiclesList() {
            return _vehicles
                .sort(_getLexicographicalSortByMake)
                .map(function (vehicle) {
                    return vehicle.getInfo();
                })
                .join('\n');
        }

        filter(searchValue, propName) {
            let itemsToReturn = [],
                item;

            for (let i = 0; i < _vehicles.length; i++) {
                item = _vehicles[i];

                if (item[propName].toLowerCase() === searchValue.toLowerCase()) {
                    itemsToReturn.push(item);
                }
            }

            return itemsToReturn;
        }
    }

    return Garage;
} ());