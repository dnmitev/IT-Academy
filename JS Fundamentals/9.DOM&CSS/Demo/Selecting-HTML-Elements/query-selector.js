(function () {
    "use strict";

    var textInfo = document.querySelector('.text-info');
    console.log(textInfo);
    debugger;

    var logo = document.querySelector('#logo');
    console.log(logo);
    console.log(logo instanceof HTMLImageElement);
    debugger;

    var textInfos = document.querySelectorAll('.text-info');
    console.log(textInfos);
    debugger;

    var theLogo = document.querySelectorAll('#logo');
    console.log(theLogo);
})();