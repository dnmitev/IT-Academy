var arr = [1, 2, 2, 2, 5, 6, 7];
var count = 2;

function countOccurences(value, collection) {
    var count = 0;
    debugger;
    console.log(collection);
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] === value) {
            count++;
        }
    }

    return count;
}

console.log(count); // 'count' is not defined
debugger;
console.log(countOccurences(2, arr));

// function outer() {
//     var x = 'OUTER';
//     debugger;
//     function inner() {
//         debugger;
//         var x = 'INNER';
//         return x;
//     }

//     return {
//         x: x,
//         f: inner()
//     };
// }

// // inner(); // this line of code would produce error since inner() is 
// defined in the scope of outer()

// console.log(outer());