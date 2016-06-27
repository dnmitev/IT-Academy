var CarItem = (function() {
    "use strict";

    var premiumModels = ['Passat', 'Phaeton'];

    function Car(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;

        this.isPremiumVWModel = isPremiumVWModel(model);
        this.isBrandNew = isCarBrandNew(year);
    }

    Car.prototype = {
        move: function move() {
            console.log("Car is moving");
        }
    };

    function isCarBrandNew(year) {
        if (year >= 2015) {
            return true;
        }

        return false;
    }

    function isPremiumVWModel(model) {
        if (premiumModels.indexOf(model) >= 0) {
            return true;
        }

        return false;
    }

    return Car;
}());

var SuvCar = (function() {
    "use strict";

    function SuvCar(make, model, year, is4Wheel) {
        CarItem.call(this, make, model, year);

        this._is4Wheel = is4Wheel;
    }

    SuvCar.prototype = new CarItem();

    SuvCar.prototype.move = function(distance) {
        CarItem.prototype.move.call(this);
        console.log(`${distance}km ahead`);
    };

    return SuvCar;
}());

var vw = new CarItem('VW', 'Golf', 2015);
if (vw.isBrandNew) {
    console.log('New car!');
} else {
    console.log('Old car!');
}

console.log(vw.isPremiumVWModel);
vw.move();

var suv = new SuvCar("VW", "Toureg", 2013, false);
suv.move(15);