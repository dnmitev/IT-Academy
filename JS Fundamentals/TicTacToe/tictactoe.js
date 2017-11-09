(function () {
    'use strict';

    var GAME_SYMBOLS = {
        X: 'X',
        O: 'O'
    };

    var isXinTurn = true;

    var field = [];

    var fields = document.querySelectorAll('td');
    fields.forEach(function (el) {
        el.addEventListener('click', _onFieldClick);
    });

    function _onFieldClick(ev) {
        ev.preventDefault();

        var that = this;

        if (_hasWinner(field)) {
            return;
        }

        var index = that.id[6] * 1;

        if (isXinTurn) {
            that.innerText = GAME_SYMBOLS.X;
            that.className += ' x-player';
            field[index] = GAME_SYMBOLS.X;
        } else {
            that.innerText = GAME_SYMBOLS.O;
            that.className += ' o-player';
            field[index] = GAME_SYMBOLS.O;
        }

        if (_hasWinner(field)) {
            alert(`Winner: ${isXinTurn ? 'X' : 'O'}`);
            
            if (confirm("Start new game")) {
                isXinTurn = true;
                field = new Array(9);

                fields.forEach(function (el) {
                   el.innerText = '-';
                   el.className = '';
                });
            }
        }

        isXinTurn = !isXinTurn;
    }

    function _hasWinner(field) {
        for (var i = 0; i < field.length; i += 3) {
            if (field[i] && field[i] === field[i + 1] &&
                field[i] === field[i + 2]) {
                return true;
            }
        }

        for (var i = 0; i < 3; i++) {
            if (field[i] && field[i] === field[i + 3] &&
                field[i] === field[i + 6]) {
                return true;
            }
        }

        for (var i = 0; i < 3; i++) {
            if (field[i] && field[i] === field[i + 3] &&
                field[i] === field[i + 6]) {
                return true;
            }
        }

        if (field[0] && field[0] === field[4] && field[0] === field[8]) {
            return true;
        }

        if (field[2] && field[2] === field[4] && field[2] === field[6]) {
            return true;
        }

        return false;
    }
}());