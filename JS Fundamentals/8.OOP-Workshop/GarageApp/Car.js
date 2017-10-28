var Car = (function () {
    'use strict';

    class Car extends Vehicle {
        constructor(make, model, licensePlate, tankVolume, fuelType, doorsCount, trunkVol) {
            super(make, model, licensePlate, tankVolume, fuelType);

            this.doorsCount = doorsCount;
            this.trunkVol = trunkVol;
            this._hasLpg = false;
        }

        get hasLpg() {
            return this._hasLpg;
        }

        toString() {
            return super.toString() + ` -- ${this.doorsCount} doors -- ${this.trunkVol}l trunk`;
        }

        addLpg() {
            if (this.fuelType.toLowerCase() === 'petrol' && !this.hasLpg) {
                this._hasLpg = true;
            } else {
                throw new Error('Only petrol can have LPG');
            }
        }
    }

    return Car;
}());