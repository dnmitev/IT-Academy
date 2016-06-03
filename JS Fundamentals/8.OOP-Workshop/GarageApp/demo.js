(function () {
    "use strict";

    var bpGarage = new Garage("bpsf", 20, "car");
    console.log(bpGarage.vehiclesCount);

    bpGarage.addVehicle(new Car('VW', 'Passat', 'CB2222AB', 50, 'Petrol', 5, 100));
    bpGarage.addVehicle(new Car('Mercedes', 'C320', 'PB1221AA', 90, 'Diesel', 4, 150));
    bpGarage.addVehicle(new Car('BMW', '328i', 'CB1234AB', 50, 'LPG', 4, 100));
    bpGarage.addVehicle(new Car('Opel', 'Astra', 'BT3245PB', 50, 'Petrol', 3, 100));
    bpGarage.addVehicle(new Car('Opel', 'Astra', 'PK5197AB', 50, 'Petrol', 3, 100));
    bpGarage.addVehicle(new Car('Opel', 'Vectra', 'СС2122AB', 50, 'Petrol', 3, 100));
    bpGarage.addVehicle(new Car('Audi', 'A7', 'PB0001CC', 50, 'Petrol', 4, 200));
    bpGarage.addVehicle(new Car('Nissan', 'GTR', 'CB6666AB',85, 'Petrol', 3, 80));

    console.log(bpGarage.vehiclesCount);
    
    console.log(bpGarage.filter('opel', 'make'));    
    console.log(bpGarage.filter('vectra', 'model'));

    console.log(bpGarage.getVehiclesList());

    var vw = new Car('vw', 'passat', 'CB2222AB', 50, 'Petrol', 5, 100);
    console.log(vw.totalDistance);
    vw.move(100);
    console.log(vw.totalDistance);
    console.log(vw.getInfo());
    console.log(vw.secondFuelType);
    vw.loadFuel(25, 'Petrol');
    vw.loadFuel(15, 'Petrol');
    vw.loadFuel(25, 'Petrol');
    vw.addLpg();
    console.log(vw.secondFuelType);
})();