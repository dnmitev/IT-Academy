var Rect = (function() {
    'use strict';

    var BORDERS = {
        LEFT: 0,
        RIGHT: 100,
        TOP: 0,
        BOTTOM: 100
    };

    function validatePosition() {
        debugger;
        if (this._x < BORDERS.LEFT || BORDERS.RIGHT < this._x ||
            this._y < BORDERS.TOP || BORDERS.BOTTOM < this._y) {
            return false;
        }

        return true;
    }

    function Rect(x, y, width, height) {
        this._x = x;
        this._y = y;
        if (!validatePosition.apply(this)) {
            debugger;
            throw new Error('Invalid Rect position');
        }

        this._width = width;
        this._height = height;
    }

    Rect.prototype = {
        calcArea: function() {
            return this._width * this._height;
        },
        calcPerimeter: function() {
            return 2 * this._width + 2 * this._height;
        }
    };

    return Rect;
}());


console.log(new Rect(1, 2, 30, 30).calcArea());
console.log(new Rect(-1, 2, 30, 30).calcArea());