var a = 3; // 00000000 00000011
var b = 5; // 00000000 00000101

console.log((a | b).toString(2)); // 00000000 00000111
console.log((a & b).toString(2)); // 00000000 00000001
console.log((a ^ b).toString(2)); // 00000000 00000110
console.log((~a & b).toString(2)); // 00000000 00000100
console.log((true << 1).toString(2)); // 00000000 00000010
console.log((true >> 1).toString(2)); // 00000000 00000000