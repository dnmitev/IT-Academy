var Car = (function () {
    'use strict'; // solves the this reffering to the window object problem
    console.log(this);
    var year = 2017;

    function Car(make, model) {
        this._make = make;
        this._model = model;
    }

    Car.prototype = {
        getDescription: function () {
            console.log(`Make: ${this._make}; Model: ${this._model}`);
        },
        startEngine: function () {
            console.log('vrum-vrum');
        },
        putFuel: function (fuel, quantity) {
            console.log(`${quantity}l of ${fuel} filled`);
        },
        getYear: function() {
            return year;
        }
    };

    return Car;
}());

var bmw = new Car('BMW', '530d');

bmw.getDescription();
bmw.startEngine();
bmw.putFuel('Diesel', 25.675);
console.log(bmw.getYear());

var merc = new Car('merc', 'e320');

merc.getDescription();
merc.startEngine();
merc.putFuel('Diesel', 25.675);
merc.getYear();
