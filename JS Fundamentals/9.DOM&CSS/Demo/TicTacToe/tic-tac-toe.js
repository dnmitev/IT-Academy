(function () {
    "use strict";
    const X = 'x';
    const O = 'o';

    var fields = document.querySelectorAll('td.field');
    var resetBtn = document.getElementById('btn-reset');
    var p = document.getElementById('winner');

    var game = new TicTacToe(X, O);
    var symbol = X;

    resetBtn.addEventListener('click', _onResetBtnClick);
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        field.addEventListener('click', _onGameFieldClick);
    }

    function _onGameFieldClick(ev) {
        ev.preventDefault();

        var board = _getFieldsAsArray(fields);
        var winner = game.getWinner(board);
        if (winner) {
            debugger;
            return;
        }

        if (this.textContent.toLowerCase() == 'x' || this.textContent.toLowerCase() == 'o') {
            return;
        }

        this.textContent = symbol;
        if (this.textContent.toLowerCase() == X) {
            this.className += ' x-player';
        }

        var index = getRandomInt(0, 8);
        while (!winner 
                && board[index] != '-' 
                && board[index].toLowerCase() == 'x' 
                && board.indexOf('-') >= 0) {
            index = getRandomInt(0, 8);
        }

        fields[index].textContent = O;
        fields[index].className += ' o-player';

        board = _getFieldsAsArray(fields);
        winner = game.getWinner(board);
        if (winner) {
            p.className = p.className.replace('hidden', '');

            var span = document.getElementById('winner-symbol');
            span.textContent = winner.toUpperCase();

            return;
        }
    }

    function _onResetBtnClick(ev) {
        ev.preventDefault();
        p.className += ' hidden';

        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            field.textContent = '-';
            field.className = field.className.replace('x-player', '');
            field.className = field.className.replace('o-player', '');
        }
    }

    function _getFieldsAsArray(fields) {
        var board = [];

        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            board.push(field.textContent);
        }

        return board;
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     * https://stackoverflow.com/a/1527820
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}());