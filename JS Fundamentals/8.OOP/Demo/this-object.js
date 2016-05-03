function Person(name) {
    debugger;
    this.name = name;
    this.getName = function getPersonName() {
        return this.name;
    }
}

var p = new Person("Gosho");

console.log(p.getName()); //Gosho