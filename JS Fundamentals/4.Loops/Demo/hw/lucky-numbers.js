(function () {
    'use strict';

    for (var i = 1000; i < 10000; i++) {
        var current = i;
        var currentStr = current.toString(); // 1000 to '1000'
        var isLucky =
            ((+currentStr[0]) + (+currentStr[1])) ===
            ((+currentStr[2]) + (+currentStr[3]));

        if (isLucky) {
            console.log(current);
        }
    }
}());