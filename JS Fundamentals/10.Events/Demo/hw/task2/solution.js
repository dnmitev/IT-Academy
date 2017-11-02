(function () {
    'use strict';

    var nameInput = document.getElementById('name-input'),
        ageInput = document.getElementById('age-input'),
        p = document.createElement('p');

    nameInput.addEventListener('change', onNameInputChange);

    function onNameInputChange(ev) {
        ev.preventDefault();
        var that = this;
        var name = that.value.trim();
        var matches = name.match(/[A-Za-z ]/g);
        if (!(matches && matches.length === name.length)) {
            that.style.border = '2px solid red';
            p.innerText = 'Invalid Name!';
            that.parentNode.appendChild(p.cloneNode(true));

            that.parentNode.className += ' invalid';
        } else {
            that.style.border = '';
            that.parentNode.removeChild(
                that.parentNode.querySelector('p')
            );

            that.parentNode.className = that.parentNode.className.replace('invalid', '');
        }
    }
}());