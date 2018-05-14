//// this is valid new browsers that support EcmaScript2015
function calculateSurface(a = 5, b = 8) {
    return a * b;
}

var surface = calculateSurface();
console.log(surface);

surface = calculateSurface(3, 5);
console.log(surface);

// function calculateSurface(a, b) {
//     a = a || 5;
//     b = b || 8;

//     return a * b;
// }

var c = 10;
var surface = calculateSurface();
console.log(surface);

surface = calculateSurface(3, 5);
console.log(surface);

console.log(calculateSurface(c));
console.log(calculateSurface(undefined, c));