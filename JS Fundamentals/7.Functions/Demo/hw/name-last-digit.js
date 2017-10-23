function getLastDigit(num) {
    var lastDigit = num % 10;
    var digits = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];

    return digits[lastDigit];
}

console.log(getLastDigit(100));