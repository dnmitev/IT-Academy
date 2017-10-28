var Vehicle = (function () {
    'use strict';

    let _validator = new Validator("Vehicle");
    let FUEL_TYPES = ['lpg', 'diesel', 'petrol', 'electriciy'];

    const MIN_MAKE_LENGHT = 2;
    const MAX_MAKE_LENGHT = 25;

    const MIN_MODEL_LENGHT = 2;
    const MAX_MODEL_LENGHT = 25;

    const LICENSE_PLATE_LENGHT = 8;

    const MAX_MILIAGE = 1000000;

    const MIN_TANK_VOLUME = 30;
    const MAX_TANK_VOLUME = 100;

    class Vehicle {
        constructor(make, model, licensePlate, tankVolume, fuelType) {
            this.make = make;
            this.model = model;
            this.licensePlate = licensePlate;
            this.tankVolume = tankVolume;

            _validator.validateIfCollectionContains(fuelType, FUEL_TYPES);
            this._fuelType = fuelType;
            this._miliage = 0;
            this._fuel = 0;
        }

        get make() {
            return this._make;
        }

        set make(value) {
            _getPropValidated(value, "make", MIN_MAKE_LENGHT, MAX_MAKE_LENGHT, "string", null);
            this._make = value;
        }

        get model() {
            return this._model;
        }

        set model(value) {
            _getPropValidated(value, "model", MIN_MODEL_LENGHT, MAX_MODEL_LENGHT, "string", null);
            this._model = value;
        }

        get licensePlate() {
            return this._licensePlate;
        }

        set licensePlate(value) {
            _getPropValidated(value, "licensePlate", null, null, "string", LICENSE_PLATE_LENGHT);
            this._licensePlate = value;
        }

        get miliage() {
            return this._miliage;
        }

        get tankVolume() {
            return this._tankVolume;
        }

        set tankVolume(value) {
            _getPropValidated(value, 'tankVolume', MIN_TANK_VOLUME, MAX_TANK_VOLUME, "number")
            this._tankVolume = value;
        }

        get fuelType() {
            return this._fuelType.toUpperCase();
        }

        get fuel() {
            return this._fuel;
        }

        move(distance) {
            if (distance > 0) {
                this._miliage += distance;
                if (this._miliage >= MAX_MILIAGE) {
                    this._miliage = this._miliage - MAX_MILIAGE;
                }
            }

            return this._miliage;
        }

        loadFuel(volume) {
            if (volume < 0) return;

            this._fuel += volume;
            if (this._fuel > this.tankVolume) {
                this._fuel = this.tankVolume
            }
        }

        toString() {
            return `${this.make.toUpperCase()} --- ${this.model.toUpperCase()} | ${this.licensePlate}`;
        }
    }

    function _getPropValidated(value, name, min, max, type, exactLength) {
        if (type) {
            _validator.validateType(value, type, name);
        }

        if (exactLength) {
            _validator.validateExactLength(value, exactLength, name);
        }

        if (min && max) {
            _validator.validateLength(value, min, max, name, type);
        }
    }

    return Vehicle;
}());