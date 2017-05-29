var Vehicle = (function () {
    "use strict";

    const MIN_MAKE_LENGTH = 2;
    const MAX_MAKE_LENGTH = 25;

    const MIN_MODEL_LENGTH = 2;
    const MAX_MODEL_LENGTH = 25;

    const LICENSE_PLATE_LENGTH = 8;

    const MAX_DISTANCE = 1000000;
    const MIN_DISTANCE = 0;

    const MAX_TANK_VOLUME = 100;
    const MIN_TANK_VOLUME = 30;

    var FUEL_TYPES = ['lpg', 'diesel', 'petrol', 'electriciy'];

    class Vehicle {
        constructor(make, model, licensePlate, tankVolume, fuelType) {
            this.make = make;
            this.model = model;
            this.licensePlate = licensePlate;
            this.tankVolume = tankVolume;
            this.fuelType = fuelType;

            this._totalDistance = 0;
            this._fuelQty = 0;
        }

        get make() {
            return this._make;
        }

        set make(value) {
            if (value.length < MIN_MAKE_LENGTH || value.length > MAX_MAKE_LENGTH) {
                throw new Error(`Insufficient make length: ${value.length};
                Allowed in range ${MIN_MAKE_LENGTH} - ${MAX_MAKE_LENGTH}`);
            }

            this._make = value;
        }

        get model() {
            return this._model;
        }

        set model(value) {
            if (value.length < MIN_MODEL_LENGTH || value.length > MAX_MODEL_LENGTH) {
                throw new Error(`Insufficient model length: ${value.length};
                Allowed in range ${MIN_MODEL_LENGTH} - ${MAX_MODEL_LENGTH}`);
            }

            this._model = value;
        }

        get licensePlate() {
            return this._licensePlate.toUpperCase();
        }

        set licensePlate(value) {
            if (value.length !== LICENSE_PLATE_LENGTH) {
                throw new Error(`License plate: ${value} is invalid`);
            }

            this._licensePlate = value;
        }

        get totalDistance() {
            return this._totalDistance;
        }

        get tankVolume() {
            return this._tankVolume;
        }

        set tankVolume(value) {
            if (typeof (value) !== 'number') {
                throw new TypeError(`${value} is not a number.`)
            } else if (value < MIN_TANK_VOLUME || value > MAX_TANK_VOLUME) {
                throw new RangeError(`${value} is not in range: ${MIN_TANK_VOLUME} - ${MAX_TANK_VOLUME}.`);
            }

            this._tankVolume = value;
        }

        get fuelType() {
            return this._fuelType;
        }

        set fuelType(value) {
            if (typeof(value) !== 'string') {
                throw new TypeError(`${value} is not a string`);
            }

            value = value.trim();
            
            if (FUEL_TYPES.indexOf(value.toLowerCase()) < 0) {
                throw new Error(`Fuel type: ${value} is invalid. Valid: ${FUEL_TYPES.join('|')}`);
            }

            this._fuelType = value;
        }

        move(distance) {
            var _distance = distance * 1;
            if (isNaN(distance)) {
                throw new Error(`Distance: ${distance} is not a number.`);
            } else if (_distance < 0) {
                throw new Error(`Distance: ${distance} is negative.`);
            }

            this._totalDistance += _distance;

            if (this._totalDistance > MAX_DISTANCE) {
                this._totalDistance = this._totalDistance - MAX_DISTANCE + MIN_DISTANCE;
            }
        }

        loadFuel(fuelQty) {
            var _fuelQty = fuelQty * 1;
            if (isNaN(_fuelQty)) {
                throw new TypeError(`${fuelQty} is not a number`);
            } else if (_fuelQty < 0) {
                throw new Error('Fuel Qty cannot be negative.')
            } 

            this._fuelQty += _fuelQty;

            if (this._fuelQty > this.tankVolume) {
                var leftover = this._fuelQty - this.tankVolume;
                this._fuelQty = this.tankVolume;

                throw new Error(`Only ${fuelQty-leftover}l were loaded. `)
            }
        }

        toString() {
            return `Make: ${this.make.toUpperCase()}; Model: ${this.model.toUpperCase()}; License Plate: ${this.licensePlate.toUpperCase()}`;
        }
    }

    return Vehicle;
}());