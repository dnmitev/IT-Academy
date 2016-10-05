// var start = 2,
//     end = 10,
//     number, isPrime, divider, maxDivider;

// for (var number = start; number <= end; number += 1) {
//     isPrime = true;
//     divider = 2;
//     maxDivider = Math.sqrt(number);
//     debugger;

//     while (divider <= maxDivider) {
//         debugger;
//         if (number % divider === 0) {
//             isPrime = false;
//             break;
//         }

//         divider += 1;
//     }

//     if (isPrime) {
//         console.log(number);
//     }
// }

var innerCounter = 0;
var outerCounter = 0;

for (var i = 0; i < 5; i++) {
    outerCounter++;

    for(var j = 0; j < 5; j++) {
        console.log(`[i][j] ---> ${i}|${j}`);
        // console.log('[i][j] ---> ' + i + '|' + j);
        innerCounter++;
    }
}

console.log(outerCounter);
console.log(innerCounter);