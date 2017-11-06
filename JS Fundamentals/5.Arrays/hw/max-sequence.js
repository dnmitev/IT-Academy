(function () {
    'use strict';

    var arr = [2, 1, 1, 2, 3, 3, 3, 3, 3, 3, , 2, 2, 2, 1];
    var bestLength = 1;
    var mostFreqNum = arr[0];

    for (var i = 0; i < arr.length; i++) {
        var bestSoFar = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                bestSoFar++;
            } else {
                break;
            }
        }

        if (bestSoFar > bestLength) {
            bestLength = bestSoFar;
            mostFreqNum = arr[i];
        }

        i += bestSoFar - 1;
    }

    console.log(`Longest sequence is ${bestLength} of ${mostFreqNum}`);
}());