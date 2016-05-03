function Car(make, model, year) {
    debugger;
    console.log(this);
    this.make = make;
    this.model = model;
    this.year = year;
    debugger;
    console.log(this);
}

var mercedes = new Car('Mercedes', 'E320', 2008);
var tesla = new Car('Tesla', 'Model S', 2012);

console.log(mercedes);
console.log(mercedes.model);
debugger;
console.log(tesla);
console.log(tesla.year);