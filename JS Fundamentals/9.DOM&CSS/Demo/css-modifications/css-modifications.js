(function () {
    "use strict";

    var wrapper = document.getElementById('wrapper');

    debugger;    
    wrapper.style.border = "2px solid green";
    wrapper.style.backgroundColor = "gray";

    var borders = document.getElementsByClassName('border');
    for (var i = 0; i < borders.length; i++) {
        var element = borders[i];

        element.style.border = '1px dashed yellow';
    }
})();