var vw = new Car('vw', 'polo', 'PB1234AB', 35, 'lpG', 5, 50);
var bmw = new Car('bmw', '316i', 'CB1234AB', 50, 'petrol', 3, 45);
var mercedes = new Car('mercedes', '316i', 'CB1234AB', 50, 'petrol', 3, 45);
var lada = new Car('lada', '316i', 'CB1234AB', 50, 'petrol', 3, 45);


vw.loadFuel(17);
console.log(vw.fuel);
bmw.loadFuel(55);
console.log(bmw.fuel);

var garage =  new Garage('Dupnica', 10);
garage.addVehicle(bmw);
garage.addVehicle(vw);
garage.addVehicle(lada);
garage.addVehicle(mercedes);

garage.getVehiclesListSorted();

console.log(garage.searchForVehicle('vw'));



