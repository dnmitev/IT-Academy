var Car = (function() {
    "use strict";
    const MIN_DOORS_COUNT = 3;
    const MAX_DOORS_COUNT = 5;

    class Car extends Vehicle {
        constructor(make, model, licensePlate, tankVolume, fuelType, doorsCount, rackVolume) {
            super(make, model, licensePlate, tankVolume, fuelType);

            this.doorsCount = doorsCount;
            this.rackVolume = rackVolume;
        }

        get doorsCount() {
            return this._doorsCount;
        }

        set doorsCount(value) {
            if (value < MIN_DOORS_COUNT || value > MAX_DOORS_COUNT) {
                throw new RangeError(`Invalid doors count: ${value}`);
            }

            this._doorsCount = value;
        }

        toString() {
            return super.toString() + `; Doors Count: ${this.doorsCount}; Rack Volume: ${this.rackVolume}`;
        }

        addLpg() {
            if (this.fuelType.toLowerCase() === 'petrol') {
                this.fuelType = 'LPG';
                return true;
            }

            return false;
        }
    }

    return Car;
}());