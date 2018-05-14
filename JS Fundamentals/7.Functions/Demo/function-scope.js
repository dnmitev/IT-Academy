// var arr = [1, 2, 2, 2, 5, 6, 7];
// var count = 2;

// function countOccurences(value, collection) {
//     var count = 0;
//     debugger;
//     console.log(collection);
//     for (var i = 0; i < collection.length; i++) {
//         if (collection[i] === value) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countOccurences(2, arr));
// debugger;
// console.log(count); // 'count' is not defined

function outer() {
    var x = 'OUTER';
    var number = 5;
    debugger;
    var inner = function () {
        debugger;
        var x = 'INNER';
        // number is available here since 
        // it was not defined in inner's scope
        console.log(number);
        return x;
    }

    return {
        f: inner(),
        x: x        
    };
}

// this line of code would produce error since inner() is 
// defined in the scope of outer()
// inner(); 

console.log(outer());