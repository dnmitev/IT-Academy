var a = 5;
var b = 4;

console.log(a >= b); // True
console.log(a != b); // True
console.log(a == b); // False
console.log(0 == ""); // True
console.log(0 === ""); //False

var notNumber = a / 'fake';
console.log(notNumber == NaN);
console.log(notNumber === NaN);
console.log(isNaN(notNumber));