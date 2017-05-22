function isPrime(number) {
    var divider,
        maxDivider;

    number = +number;
    maxDivider = Math.sqrt(number);

    for (divider = 2; divider <= maxDivider; divider += 1) {
        if (!(number % divider)) {
            // Divider found, no need to continue execution;
            return false;
        }
    }

    // All dividers tested and none is found
    // The number is prime
    return true;
}

console.log(isPrime(17));
var isNumPrime = isPrime(17);
if (isPrime(25)) {
    console.log('Number is prime!');
} else {
    console.log('Number is NOT prime!');
}

for (var i = 1; i <= 20; i++) {
    if (isPrime(i)) {
        console.log(`${i} is prime!`);
    } else {
        console.log(`${i} is NOT prime!`);
    }
}

var input = document.getElementById('entry');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var value = input.value * 1;
    alert(isPrime(value));
});