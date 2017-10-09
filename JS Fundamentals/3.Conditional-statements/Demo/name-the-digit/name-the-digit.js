(function () {
    "use strict";

    var number = 919;

    var numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
    ];

    numbers[30] = 'thirty';
    numbers[40] = 'fourty';
    numbers[50] = 'fifty';
    numbers[60] = 'sixty';
    numbers[70] = 'seventy';
    numbers[80] = 'eighty';
    numbers[90] = 'ninety';

    var hundreds = number.toString()[0] * 1;
    var decimals = number.toString()[1] * 1;
    var singulars = number.toString()[2] * 1;

    if (singulars === 0 && decimals === 0) {
        console.log(`${numbers[hundreds]} hundred`);
    } else if (decimals === 0) {
        console.log(`${numbers[hundreds]} hundred and ${numbers[singulars]}`);
    } else if (decimals !== 0 && singulars === 0) {
        console.log(`${numbers[hundreds]} hundred and ${numbers[decimals * 10]}`);
    } else {
        if (decimals === 1) {
            console.log(`${numbers[hundreds]} hundred and ${numbers[decimals * 10 + singulars]}`);
        } else {
            console.log(`${numbers[hundreds]} hundred ${numbers[decimals * 10]} and ${numbers[singulars]}`);
        }
    }

}());