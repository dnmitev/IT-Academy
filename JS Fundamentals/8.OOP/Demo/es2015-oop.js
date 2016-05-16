class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value < 2) {
            throw new Error(`Person name is too short: ${value.length}`);
        }

        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (typeof(value) != 'number') {
            throw new Error(`${value} is not a number`);
        }

        this._age = value;
    }

    sayHello() {
        return `Hi! My name is ${this.name} and I'am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, school, grade) {
        super(name, age);
        this.school = school;
        this.grade = grade;
    }

    get school() {
        return this._school;
    }

    set school(value) {
        this._school = value;
    }

    get grade() {
        return this._grade;
    }

    set grade(value) {
        this._grade = value;
    }

    toString() {
        return `${this.name} | ${this.age} years old | ${this.school} | ${this.grade} grade`;
    }

    sayHello() {
        return super.sayHello() + `I'm styding in ${this.school} school`;
    }
}

var pesho = new Person('Pesho', 33);
var vanko = new Student('Ivan', 17, 'Matematicheskata', 10);
console.log(pesho);
console.log(vanko);

console.log(pesho.toString());
console.log(vanko.toString());

console.log(pesho.sayHello());
console.log(vanko.sayHello());