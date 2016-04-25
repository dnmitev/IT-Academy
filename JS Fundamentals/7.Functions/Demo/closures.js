function outer(x) {
    function inner(y) {
        return x + " " + y;
    }

    return inner;
}

var sample = outer("IT");
console.log(sample("Academy"));