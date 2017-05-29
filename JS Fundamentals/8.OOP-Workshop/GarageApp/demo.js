var vw = new Car('vw', 'beetle', 'B 2233AB', 30, 'petrol', 4, 100);
var bmw = new Car('bmw', 'X5', 'CB1234AB', 50, 'dIeSeL', 5, 120);

var garage = new Garage('Overdrive', 50);

for (var i = 1; i <= 10; i++) {
    var car;
    if (i & 1) {
        car = new Car('vw', 'beetle', 'B 2233AB', 30 + i, 'petrol', 4, 10 * i);
    } else {screenLeft
        car = new Car('bmw', 'X5', `CB123${i-1}AB`, 40 + i, 'dIeSeL', 5, 120);
    }

    garage.addVehicle(car);
}

garage.addVehicle(vw);
console.log(garage.vehiclesCount);
garage.addVehicle(bmw);
console.log(garage.vehiclesCount);
console.log(garage);