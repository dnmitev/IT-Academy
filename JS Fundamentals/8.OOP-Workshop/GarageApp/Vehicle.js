var Vehicle = (function () {
    "use strict";

    const MIN_MAKE_LENGTH = 2;
    const MAX_MAKE_LENGTH = 25;

    const MIN_MODEL_LENGTH = 2;
    const MAX_MODEL_LENGTH = 25;

    const PLATE_LENGTH = 8;

    const MIN_TANK_VOLUME = 30;
    const MAX_TANK_VOLUME = 100;

    const MIN_TOTAL_DISTANCE = 0;
    const MAX_TOTAL_DISTANCE = 1000000;

    const FUEL_TYPES = ['LPG', 'DIESEL', 'PETROL', 'ELECTRICITY'];

    let _totalDistance = 0;
    let _currentFuel = 0;

    function _validateString(value, prop) {
        if (typeof (value) !== 'string' || !isNaN(value * 1)) {
            throw new Error(`${prop} must be a string`);
        }
    }

    function _validateMinLength(value, min, prop) {
        if (value.length < min) {
            throw new Error(`${prop} has invalid length. Name is too short.`);
        }
    }

    function _validateMaxLength(value, max, prop) {
        if (value.length > max) {
            throw new Error(`${prop} is too long`);
        }
    }

    function _validateNumber(value, prop) {
        if (typeof (value) !== 'number' || isNaN(value * 1)) {
            throw new Error(`${prop} must be a number`);
        }
    }

    function _validateMinNumber(value, min, prop) {
        if (value < min) {
            throw new Error(`${prop} must be bigger than ${min}`);
        }
    }

    function _validateMaxNumber(value, max, prop) {
        if (value > max) {
            throw new Error(`${prop} must be less than ${max}`);
        }
    }

    function _validateFuelType(value) {
        if (FUEL_TYPES.indexOf(value.toUpperCase()) < 0) {
            throw new Error(`${value} is not a valid fuel type. Valid fuel types are: ${FUEL_TYPES.join('|')}`);
        }
    }

    class Vehicle {
        constructor(make, model, plate, tankVolume, fuelType) {
            this.make = make;
            this.model = model;
            this.plate = plate;
            this.tankVolume = tankVolume;
            this.fuelType = fuelType;
        }

        get make() {
            return this._make;
        }

        set make(value) {
            let propName = 'Make';

            _validateString(value, propName);
            _validateMinLength(value, MIN_MAKE_LENGTH, propName);
            _validateMaxLength(value, MAX_MAKE_LENGTH, propName);

            this._make = value;
        }

        get model() {
            return this._model;
        }

        set model(value) {
            let propName = 'Model';

            _validateString(value, propName);
            _validateMinLength(value, MIN_MODEL_LENGTH, propName);
            _validateMaxLength(value, MAX_MODEL_LENGTH, propName);

            this._model = value;
        }

        get plate() {
            return this._plate;
        }

        set plate(value) {
            let propName = 'Plate';

            _validateString(value, propName);

            try {
                _validateMinLength(value, PLATE_LENGTH, propName);
                _validateMaxLength(value, PLATE_LENGTH, propName);
            } catch (ex) {
                // since we are reusing the above methods we need to catch their exceptions
                // and to throw new more adequate exception
                throw new Error(`Number plate should be exactly ${PLATE_LENGTH}`);
            }

            this._plate = value;
        }

        get tankVolume() {
            return this._tankVolume;
        }

        set tankVolume(value) {
            let propName = 'Tank volume';

            _validateNumber(value, propName);
            _validateMinNumber(value, MIN_TANK_VOLUME, propName);
            _validateMaxNumber(value, MAX_TANK_VOLUME, propName);

            this._tankVolume = value;
        }

        get fuelType() {
            return this._fuelType;
        }

        set fuelType(value) {
            _validateFuelType(value);

            this._fuelType = value;
        }

        get totalDistance() {
            return _totalDistance;
        }

        move(distance) {
            let propName = 'Distance to move';

            _validateNumber(distance, propName);
            _validateMinNumber(distance, MIN_TOTAL_DISTANCE, propName);
            _validateMaxNumber(distance, MAX_TOTAL_DISTANCE, propName);

            _totalDistance += distance;
        }

        loadFuel(qty, type) {
            let propName = 'Qty';

            _validateNumber(qty, propName);
            _validateMinNumber(qty, 0, propName);
            _validateMaxNumber(qty, this.tankVolume, propName);

            _validateFuelType(type);

            if (type.toUpperCase() !== this.fuelType.toUpperCase()) {
                throw new Error(`Cannot load ${type} on vehicle with fuel type of ${this.fuelType}`);
            }

            if ((_currentFuel + qty) > this.tankVolume) {
                _currentFuel = this.tankVolume;
            } else {
                _currentFuel += qty;
            }

            console.log(`${_currentFuel}l of ${this.fuelType}  available`);
        }

        getInfo() {
            return `${this.make} | ${this.model} | ${this.plate}`;
        }
    }

    return Vehicle;
} ());