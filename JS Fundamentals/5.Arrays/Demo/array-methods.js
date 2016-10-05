var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Lemon'];
var nuts = ['Walnut', 'Almond', 'Pistachio'];

console.log(fruits.join('-|-'));

debugger;
var reversedFruits = fruits.reverse();
debugger;
console.log(reversedFruits); // ["Mango", "Apple", "Lemon", "Orange", "Banana"]

debugger;
var mix = fruits.concat(nuts);
debugger;
console.log(mix.join('|'));

var citrus = fruits.slice(1, 3);
// citrus[0] = 'Pine-Apple';
// fruits[1] = 'Hamburger';
// console.log(fruits.join('|'));
debugger;
console.log(citrus); // ['Orange','Lemon']

console.log(fruits.indexOf('Lemon'));
console.log(fruits.indexOf('Lemon', 3));
console.log(fruits.lastIndexOf('Lemon'));

fruits.push('Kiwi');;
var a = 'pesho';
console.log(fruits.join(`---${a}----`));