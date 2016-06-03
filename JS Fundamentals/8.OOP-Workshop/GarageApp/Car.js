var Car = (function () {
    "use strict";

    const MIN_DOORS_COUNT = 3;
    const MAX_DOORS_COUNT = 5;

    const MIN_STORAGE_VOLUME = 50;
    const MAX_STORAGE_VOLUME = 500;

    let _hasSecondFuelType = false;

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

    class Car extends Vehicle {
        constructor(make, model, plate, tankVolume,
            fuelType, doorsCount, storageVolume) {
            super(make, model, plate, tankVolume, fuelType);

            this.doorsCount = doorsCount;
            this.storageVolume = storageVolume;
        }

        get doorsCount() {
            return this._doorsCount;
        }

        set doorsCount(value) {
            let propName = 'doorsCount';

            _validateNumber(value, propName);
            _validateMinNumber(value, MIN_DOORS_COUNT, propName);
            _validateMaxNumber(value, MAX_DOORS_COUNT, propName);

            this._doorsCount = value;
        }

        get storageVolume() {
            return this._storageVolume;
        }

        set storageVolume(value) {
            let propName = 'storageVolume';

            _validateNumber(value, propName);
            _validateMinNumber(value, MIN_STORAGE_VOLUME, propName);
            _validateMaxNumber(value, MAX_STORAGE_VOLUME, propName);

            this._storageVolume = value;
        }

        get secondFuelType() {
            if (_hasSecondFuelType) {
                return 'LPG';
            }

            return 'None';
        }

        getInfo() {
            return super.getInfo() + ` | ${this.doorsCount} | ${this.storageVolume}`;
        }

        addLpg() {
            if (this.fuelType.toUpperCase() == 'PETROL') {
                _hasSecondFuelType = true;
            } else {
                throw new Error('LPG can be added only to cars with fuel type of PETROL');
            }
        }
    }

    return Car;
} ());