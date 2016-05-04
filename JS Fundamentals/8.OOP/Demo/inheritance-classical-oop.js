(function() {
    "use strict";

    var Shape = (function() {

        function Shape(x, y) {
            this._x = x;
            this._y = y;
        }

        Shape.prototype.move = function(to) {
            this._x += to || this._x;
            this._y += to || this._y;
        };

        return Shape;
    }());

    var Rect = (function() {

        function Rect(x, y, width, height) {
            // we should call the parent constructor
            // so the object props are fullfilled
            Shape.call(this, x, y);
            this._width = width;
            this._height = height;
        }

        // this is where the inheritance happens
        Rect.prototype = new Shape(); // new Shape() is actually equal to Shape.prototype

        Rect.prototype.calcArea = function() {
            return this._width * this._height;
        };

        return Rect;
    }());

    var rect = new Rect(1, 2, 30, 30);
    rect.move(10);

    console.log(rect);
}());