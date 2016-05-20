(function () {
    "use strict";

    var btn = document.getElementById('btn-clickable');
    btn.addEventListener('click', function (event) {
        console.log(event);
    });
})();