(function () {
    "use strict";

    var textInfo = document.querySelector('.text-info');
    console.log(textInfo);

    var logo = document.querySelector('#logo');
    console.log(logo);
    console.log(logo instanceof HTMLImageElement);

    var textInfos = document.querySelectorAll('.text-info');
    console.log(textInfos);
})();