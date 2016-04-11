var start = 2,
    end = 10,
    number, isPrime, divider, maxDivider;

for (var number = start; number <= end; number += 1) {
    isPrime = true;
    divider = 2;
    maxDivider = Math.sqrt(number);

    while (divider <= maxDivider) {
        if (number % divider === 0) {
            isPrime = false;
            break;
        }

        divider += 1;
    }

    if (isPrime) {
        console.log(number);
    }
}