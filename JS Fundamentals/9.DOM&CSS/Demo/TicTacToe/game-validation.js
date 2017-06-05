var TicTacToe = (function () {
    "use strict";

    class TicTacToe {
        constructor(xSymbol, oSymbol) {
            this._xSymbol = xSymbol;
            this._oSymbol = oSymbol;
        }

        get xSymbol() {
            return this._xSymbol;
        }
        
        get oSymbol() {
            return this._oSymbol;
        }

        // ['x','o', 'x',.....]
        getWinner(board) {
            for (var i = 0; i < board.length; i += 3) {
                if ((board[i] === board[i + 1] && board[i + 1] === board[i + 2]) && 
                    (board[i] === this._xSymbol || board[i] === this._oSymbol))  {
                    return board[i];
                }
            }

            for (var i = 0; i < 3; i++) {
                if ((board[i] === board[i + 3] && board[i + 3] === board[i + 6]) 
                    && (board[i] === this._xSymbol || board[i] === this._oSymbol)) {
                    return board[i];
                }
            }

            if ((board[0] === board[4] && board[4] === board[8]) 
                && (board[0] === this._xSymbol || board[0] === this._oSymbol)) {
                return board[0];
            }

            if ((board[2] === board[4] && board[4] === board[6])
                && (board[2] === this._xSymbol || board[2] === this._oSymbol)) {
                return board[2];
            }

            return "";
        }
    }

    return TicTacToe;
}());