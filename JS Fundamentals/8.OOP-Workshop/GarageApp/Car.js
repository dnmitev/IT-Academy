var Car = (function() {
    "use strict";

    let _hasSecondFuelType = false;

    class Car extends Vehicle {
        constructor(make, model, plate, type, tankVolume,
            fuelType, doorsCount, storageVolume) {
            super(make, model, plate, type, tankVolume, fuelType);

            this.doorsCount = doorsCount;
            this.storageVolume = storageVolume;
        }

        get doorsCount() {
            return this._doorsCount;
        }

        set doorsCount(value) {
            // TODO: validate
            this._doorsCount = value;
        }

        get storageVolume() {
            return this._storageVolume;
        }

        set storageVolume(value) {
            // TODO: validate
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
            // TODO: validate Petrol
            _hasSecondFuelType = true;
        }
    }

    return Car;
}());

var vw = new Car('vw', 'passat', 'CB2222AB', 'Car', 50, 'Petrol', 5, 100);
console.log(vw.totalDistance);
vw.move(100);
console.log(vw.totalDistance);
console.log(vw.getInfo());
console.log(vw.secondFuelType);
vw.addLpg();
console.log(vw.secondFuelType);