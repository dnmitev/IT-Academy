function Person(theName) {
    debugger;
    this.name = theName;
}

Person.prototype.getName = function getPersonName() {
    return this.name;
}

var gosho = new Person("Gosho");
var vanko1 = new Person("Vanko1");

console.log(gosho.getName()); // Gosho
console.log(vanko1.getName()); // Vanko1