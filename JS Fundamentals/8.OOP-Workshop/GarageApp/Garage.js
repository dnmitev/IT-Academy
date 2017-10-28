var Garage = (function () {
    'use strict';

    class Garage {
        constructor(name, capacity) {
            this.name = name;
            this.capacity = capacity;

            this._vehicles = [];
        }

        addVehicle(vehicle) {
            if (vehicle instanceof Vehicle) {
                if (this._vehicles.length < this.capacity) {
                    this._vehicles.push(vehicle);
                } else {
                    throw new Error('Garage is full');
                }
            } else {
                throw new TypeError('Only instances of Vehicle can be added');
            }
        }

        removeVehicle(licensePlate) {
            let vehicles = [];
            let removed = null;
            for (let i = 0; i < this._vehicles.length; i++) {
                let current = this._vehicles[i];
                if (current.licensePlate.toUpperCase() !== licensePlate.toUpperCase()) {
                    vehicles.push(current);
                } else {
                    removed = current;
                }
            }

            this._vehicles = vehicles;
            
            return removed;
        }

        getVehiclesListSorted() {
            return this._vehicles.sort((vehicle1, vehicle2) => {
                var make1 = vehicle1.make.toUpperCase();
                var make2 = vehicle2.make.toUpperCase();

                if (make1 < make2) return -1;
                if (make1 > make2) return 1;

                return 0;
            });
        }

        searchForVehicle(searchParam) {
            for (let i =0; i < this._vehicles.length; i++) {
                var current = this._vehicles[i];
                if (current.make.toUpperCase() === searchParam.toUpperCase()
                    || current.model.toUpperCase() === searchParam.toUpperCase()
                    || current.licensePlate.toUpperCase() === searchParam.toUpperCase()
                ) {
                    return current;
                }
            }
        }
    }

    return Garage;
}());