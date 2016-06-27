(function () {
    "use strict";

    var VALID_MAKES = ['VW', 'AUDI', 'BMW'];

    var makeInput = document.getElementById('make');

    makeInput.addEventListener('change', function (e) {
        e.preventDefault();

        var element = this;
        var parent = element.parentNode;
        var p = document.createElement('p');

        element.style.border = '';
        p.textContent = '';
        
        var ps = parent.getElementsByTagName('p');
        
        if (ps.length) {
            parent.removeChild(ps[0]);
        }

        if (VALID_MAKES.indexOf(element.value.toUpperCase()) <= -1) {
            element.style.border = "2px solid red";
            p.textContent = " Not VW, AUDI or BMW";
            parent.appendChild(p);
        } else {
            element.style.border = '2px solid green';
        }
    });
} ());