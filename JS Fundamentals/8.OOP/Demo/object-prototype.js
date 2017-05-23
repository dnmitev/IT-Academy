// // adding a repeat method to the String type
String.prototype.repeat = function(count) {
    var pattern = this;
    var str = '';
    debugger;
    console.log(this);

    if (!count) {
        return pattern;
    }


    for (var i = 0; i < count; i += 1) {
        str += pattern;
    }

    return str;
};

console.log('@'.repeat(5)); // @@@@@
debugger;

String.prototype.capitalize = function() {
    debugger;
    return this.toUpperCase();
}

debugger;
console.log('it-academy'.capitalize());

function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.move = function () {
    console.log(`${this.make} is moving`);
}

var vw = new Car('vw', 'polo');
vw.move();

var bmw = new Car('bmw', 'polo');
bmw.move();