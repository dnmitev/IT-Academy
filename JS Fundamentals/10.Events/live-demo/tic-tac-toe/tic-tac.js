(function () {
    "use strict";

    var gameBoard = document.getElementById('game-board');

    var isXClicked = false;
    var hasWinner = false;
    gameBoard.addEventListener('click', function (ev) {
        ev.preventDefault();

        var field = ev.target;
        if (field.className.indexOf('man') < 0 || hasWinner) {
            field.innerText = !isXClicked ? 'X' : 'O';
            field.className = !isXClicked ? 'x-man' : 'y-man';

            isXClicked = !isXClicked;
        }

        var fields = this.querySelectorAll('td');
        for (var i = 0; i < fields.length; i += 3) {
            if (fields[i].className != 'empty' && fields[i].className == fields[i + 1].className && fields[i].className == fields[i + 1].className) {
                hasWinner = true;
            }
        }

        for (var i = 0; i < fields.length / 3; i++) {
            if (fields[i].className != 'empty' && fields[i].className == fields[i + 3].className && fields[i].className == fields[i + 6].className) {
                hasWinner = true;
            }

            if (i == 0 && fields[i].className != 'empty' && fields[i].className == fields[i + 4].className && fields[i].className == fields[i + 8].className) {
                hasWinner = true;
            }

            if (i == 2 && fields[i].className != 'empty' && fields[i].className == fields[i + 2].className && fields[i].className == fields[i + 4].className) {
                hasWinner = true;
            }
        }

        if (hasWinner) {
            var winner = document.getElementById('winner');
            winner.style.display = 'block';
        }
    });

}());