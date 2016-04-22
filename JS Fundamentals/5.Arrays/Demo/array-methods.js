var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var nuts = ['Walnut', 'Almond', 'Pistachio'];

console.log(fruits.join('-|-'));

var reversedFruits = fruits.reverse();
console.log(reversedFruits); // ["Mango", "Apple", "Lemon", "Orange", "Banana"]

var mix = fruits.concat(nuts);
console.log(mix.join('|'));

var citrus = fruits.slice(1, 3);
console.log(citrus); // ['Orange','Lemon']