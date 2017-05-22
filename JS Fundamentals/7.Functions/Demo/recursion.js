var counter = 0;
var fact = function(n) {
    counter++;
    debugger;
    if (n === 0) {
        return 1;
    }

    return n * fact(n - 1);
};

console.log(fact(5)); // 120
console.log(counter);