(function () {
    "use strict";

    var list = document.getElementById('list');

    list.style.display = 'none';

    var teams = document.getElementById('teams');
    teams.addEventListener('click', function (e) {
        e.preventDefault();

        var el = this;

        if (list.style.display == 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none'
        }
    });

    list.addEventListener('click', function (e) {
        e.preventDefault();

        var el = e.target;

        teams.textContent = el.textContent;

        if (list.style.display == 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none'
        }
    }, true);

} ());