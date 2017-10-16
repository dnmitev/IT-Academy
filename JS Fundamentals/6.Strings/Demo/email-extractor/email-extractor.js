(function () {
    "use strict";

    var textarea = document.getElementById('text');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function (ev) {
        ev.preventDefault();

        var text = textarea.value.trim();
        var list = text.getEmailsList(10);

        console.log(list.join('\n'));
    });
}());