var arr = [1, 2, 2, 2, 5, 6, 7];

function countOccurences(value) {
    // this function is coupled to the arr variable which is
    // not totally right
    var count = 0;
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }

    return count;
}

//console.log(count); // 'count' is not defined
console.log(countOccurences(2));

function outer() {
    var x = 'OUTER';

    function inner() {
        var x = 'INNER';
        return x;
    }

    return {
        x: x,
        f: inner()
    };
}

console.log(outer());