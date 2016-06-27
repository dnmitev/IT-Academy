(function() {
    "use strict";

    var logo = document.getElementById('logo');
    console.log(logo);
    debugger;
    console.log(logo.src);
    debugger;

    var loremDivs = document.getElementsByClassName('just-text');
    console.log(loremDivs);
    for (var i = 0; i < loremDivs.length; i++) {
        var element = loremDivs[i];

        console.log(element);
        debugger;
        console.log(element.innerHTML);
        debugger;
        console.log(element.outerHTML);
        debugger;
        console.log(element.textContent);
        debugger;
        console.log(element.innerText);
    }
})();