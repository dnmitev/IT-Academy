var sum = 0;
var counter = 0;

while (counter <= 10) {
    sum += counter;
    counter++;
}

console.log(`Sum of numbers from 1 to 10 is ${sum}`);

// while (true) {
//     console.log('This is an infinite loop');
// }


var fact = 1,
    n = 3;

do {
    fact *= n;
    n -= 1;
} while (n);

console.log(fact);