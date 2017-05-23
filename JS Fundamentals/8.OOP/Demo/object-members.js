// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         debugger;
//         console.log('Hello! I am ' + this.name + ' and I am ' + this.age + ' years old');
//         console.log(`Hello! I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// var mimi = new Person('Maria', 18);
// debugger;
// mimi.sayHello();
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    debugger;
    console.log(this);
    console.log(`Hello! I am ${this.name} and I am ${this.age} years old`);
}

var mimi = new Person('Maria', 18);
debugger;
mimi.sayHello();

var joro = new Person('Gosho', 24);
debugger;
joro.sayHello();