(function () {
    'use strict';

    var greeting = 'Hello from the IIFE!';
    // this will produce error, because var/let is missed and we are in strict mode
    // greeting = 'Hello from the IIFE!'; 

    console.log(greeting);
}());

// greeting has no meaing outside the function above
// greeting is a variable that is defined in the function's scope
// the line below will produce an error -> ReferenceError: greeting is not defined
// console.log(greeting);

var today = (function () {
    'use strict';

    var date = new Date();
    // months in JS are array
    // so January has index of 0/zero/ and December is 11
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}());

console.log(today);

var execution = (function(){
    'use strict';

    var x = 'outer';    
    var inner = (function() {
        var x = 'inner';
        return x;
    }());

    return {
        outer: x,
        inner: inner
    }
}());

console.log(execution);