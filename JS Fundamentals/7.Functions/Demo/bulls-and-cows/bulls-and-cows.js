(function () {
    'use strict';

    var numberInput = document.getElementById('number'),
        btn = document.getElementById('btn'),
        numberToGuess = getNumberToGuess(),
        number;

    btn.addEventListener('click', solve);

    function solve() {
        number = numberInput.value * 1;

        var result = getBullsAndCowsCount(number);

        console.log(`Cows: ${result.cows}; Bulls: ${result.bulls}`);
    }

    function getBullsAndCowsCount(number) {
        var numberAsString = number.toString();
        var numberToGuessAsString = numberToGuess.toString();
        var cowsCount = 0;
        var bullsCount = 0;

        for (var i = 0; i < 4; i++) {
            var index = numberToGuessAsString.indexOf(numberAsString[i]);
            if (index > -1 && index != i) {
                cowsCount++;
            } else if (index > -1 && index == i) {
                bullsCount++;
            }
        }

        return {
            cows: cowsCount,
            bulls: bullsCount
        };
    }

    function getNumberToGuess() {
        var number = getRandomInt(1000, 9999);
        var counter = 0;

        while (!isValidNumber(number)) {
            counter++;
            number = getRandomInt(1000, 9999);
        }

        console.log(`Valid number was found after ${counter} steps`);
        return number;
    }

    function isValidNumber(number) {
        // valid number is the one with 4 diff. digits
        var numberAsString = number.toString();
        for (var i = 0; i < numberAsString.length; i++) {
            var currentDigit = numberAsString[i];

            for (var j = i + 1; j < numberAsString.length; j++) {
                if (currentDigit == numberAsString[j]) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     * https://stackoverflow.com/a/1527820
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}());