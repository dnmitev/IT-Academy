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