(function() {
    "use strict";

    var divs = document.getElementsByTagName('div');

    console.log(divs instanceof Array);
    console.log(divs instanceof HTMLCollection);
    for (var index in divs) {
        console.log('divs[' + index + '] = ' + divs[index])
    }
})();