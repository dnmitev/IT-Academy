(function () {
    "use strict";

    var NAMES = ['pesho', 'gosho', 'stamat', 'ivan', 'konstantin', 'joro', 'mitko', 'delyan', 'kuci', 'ceco', 'maria', 'gergana', 'niki', 'ralica'];

    var people = [];
    for (var i = 0; i < 100; i++) {
        people.push({
            name: NAMES[getRandomInt(0, NAMES.length - 1)],
            age: getRandomInt(12, 65)
        });
    }
    var _people = people.slice();

    getTableData(people);

    var btn = document.getElementById('sort-btn');

    function getTableData(people) {
        var fragment = document.createDocumentFragment();
        var table = document.getElementById('table-list');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        table.innerHTML = '';
        for (var i = 0; i < people.length; i++) {
            tr.innerHTML = '';
            td.textContent = people[i].name;
            tr.appendChild(td.cloneNode(true));

            td.textContent = people[i].age;
            tr.appendChild(td.cloneNode(true));

            fragment.appendChild(tr.cloneNode(true));
        }

        table.appendChild(fragment);
    }


    btn.addEventListener('click', function (ev) {
        ev.preventDefault();

        if (this.className.indexOf('selected') >= 0) {
            this.className = this.className.replace('selected', '');
            getTableData(_people);
        } else {
            this.className += ' selected';
            // TODO: sort by age
            getTableData(people.reverse());
        }
    });

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     * https://stackoverflow.com/a/1527820
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}());