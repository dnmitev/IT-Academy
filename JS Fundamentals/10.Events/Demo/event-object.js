(function() {
    "use strict";

    var btn = document.getElementById('btn-clickable');
    btn.addEventListener('click', function(ev) {
        ev.preventDefault();

        // submit form
        console.log(ev);
    });

    document.body.addEventListener('keydown', function(e) {
        e.preventDefault();

        console.log('from keydown event');
        console.log(e);

        if (e.keyCode == 32) {
            console.log('Space Bar was pressed');
        }
    });

    var googleBtn = document.getElementById("google");
    googleBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        // NO Google for you
    });

})();