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

        if (this.textContent.toLowerCase() == 'x' || this.textContent.toLowerCase() == 'o') {
            return;
        }

        this.textContent = symbol;
        if (this.textContent.toLowerCase() == X) {
            this.className += ' x-player';
        } else if (this.textContent.toLowerCase() == O) {
            this.className += ' o-player';
        }

        var board = _getFieldsAsArray(fields);
        var winner = game.getWinner(board);

        if (symbol == X) {
            symbol = O;
        } else {
            symbol = X;
        }

        if (winner) {
            p.className = p.className.replace('hidden', '');

            var span = document.getElementById('winner-symbol');
            span.textContent = winner.toUpperCase();
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
}());