var animal = (function () {
    var animal = {};

    Object.defineProperty(animal, 'init', {
        value: function (name, age) {
            this.name = name;
            this.age = age;
            return this;
        }
    });

    Object.defineProperty(animal, 'toString', {
        value: function () {
            var self = this;
            return Object
                .keys(self)
                .reduce(function (result, prop) {
                    return result + '(' + prop[0].toUpperCase() + prop.substr(1) + ': ' + self[prop] + ') ';
                }, '')
                .trim();
        }
    });

    return animal;
}());

var dog = (function (parent) {
    var dog;

    dog = Object.create(parent);

    Object.defineProperty(dog, 'init', {
        value: function (name, age, breed) {
            parent.init.call(this, name, age);
            this.breed = breed;
            return this;
        }
    });

    Object.defineProperty(dog, 'toString', {
        value: function () {
            return parent.toString.call(this) + ' (Type: dog)';
        }
    });

    return dog;
}(animal));

var notSheep = (function (parent) {
    var sheep;

    sheep = Object.create(parent);

    Object.defineProperty(sheep, 'init', {
        value: function (name, age, color) {
            parent.init.call(this, name, age);
            this.color = color;
            return this;
        }
    });

    Object.defineProperty(sheep, 'toString', {
        value: function () {
            return parent.toString.call(this) + ' Beeeeeeee!';
        }
    });

    return sheep;
}(animal));


var johny =
    Object
    .create(dog)
    .init('Johny', 13, 'husky');

console.log(johny.toString());
console.log(johny.breed);

var sven = Object
            .create(notSheep)
            .init('Sven',10,'black');
console.log(sven.toString());
console.log(sven.color);