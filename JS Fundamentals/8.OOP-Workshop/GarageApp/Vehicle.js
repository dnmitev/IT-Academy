var Vehicle = (function() {
    "use strict";

    let _totalDistance = 0;
    let _currentFuel = 0;

    class Vehicle {
        constructor(make, model, plate, type, tankVolume, fuelType) {
            this.make = make;
            this.model = model;
            this.plate = plate;
            this.type = type;
            this.tankVolume = tankVolume;
            this.fuelType = fuelType;
        }

        get make() {
            return this._make;
        }

        set make(value) {
            // TODO: Validations
            this._make = value;
        }

        get model() {
            return this._model;
        }

        set model(value) {
            // TODO: Validations
            this._model = value;
        }

        get plate() {
            return this._plate;
        }

        set plate(value) {
            // TODO: Validations
            this._plate = value;
        }

        get tankVolume() {
            return this._tankVolume;
        }

        set tankVolume(value) {
            // TODO: Validations
            this._tankVolume = value;
        }

        get fuelType() {
            return this._fuelType;
        }

        set fuelType(value) {
            // TODO: Validations
            this._fuelType = value;
        }

        get totalDistance() {
            return _totalDistance;
        }

        move(distance) {
            // validation if number
            _totalDistance += distance;
        }

        loadFuel(qty, type) {
            // TODO: validate type
            // TODO: validate qty

            _currentFuel += qty;
        }

        getInfo() {
            return `${this.make} | ${this.model} | ${this.plate}`;
        }

        // toString() {
        //     return `${this.make} | ${this.model} | ${this.plate}`;
        // }
    }

    return Vehicle;
}());

// var vw = new Vehicle('vw', 'passat', 'CB2222AB', 'Car', 50, 'Petrol');
// vw.loadFuel(10, 'Petrol');
// vw.loadFuel(10, 'Petrol');
// console.log(vw.currentFuel);
// console.log(vw);