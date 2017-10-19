function outer(x) {
    debugger;
    function inner(y) {
        debugger;
        return x + " " + y;
    }

    return inner;
}

var sample = outer("IT");
debugger;
console.log(sample("Academy"));

function prettify() {
    var result = outer("my")("pretty");
    return result + '!!!';
}

console.log(prettify());
