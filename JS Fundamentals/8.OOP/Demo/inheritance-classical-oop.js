(function () {
    "use strict";

    var Shape = (function () {

        function Shape(x, y) {
            this._x = x;
            this._y = y;
        }

        Shape.prototype.move = function (to) {
            this._x += to || this._x;
            this._y += to || this._y;
        };

        return Shape;
    }());

    var Rect = (function () {

        function Rect(x, y, width, height) {
            // we should call the parent constructor
            // so the object props are fullfilled
            Shape.call(this, x, y);
            this._width = width;
            this._height = height;
            this.perimeter = _calcPerimeter.call(this);
        }

        // this is where the inheritance happens
        Rect.prototype = new Shape(); // new Shape() is actually equal to Shape.prototype

        Rect.prototype.calcArea = function () {
            return this._width * this._height;
        };

        function _calcPerimeter() {
            return 2 * this._height + 2 * this._width;
        }

        return Rect;
    }());

    var Square = (function () {

        function Square(x, y, side) {
            Rect.call(this, x, y, side, side);
        }

        Square.prototype = new Rect();

        Square.prototype.getDiagonal = function () {
            return Math.sqrt(Math.pow(this._width, 2) * 2);
        }

        return Square;
    }());

    var Circle = (function () {

        function Circle(x, y, radius) {
            Shape.call(this, x, y);
            this._radius = radius;
        }

        Circle.prototype = new Shape();

        Circle.prototype.calcArea = function () {
            return Math.PI * Math.pow(this._radius, 2);
        }

        return Circle;
    }());

    var rect = new Rect(1, 2, 30, 30);
    rect.move(10);

    console.log(rect);
    console.log(rect.calcArea());
    console.log(rect.perimeter);

    var sq = new Square(1, 2, 10);

    sq.move(100);
    console.log(sq.calcArea());
    console.log(sq.getDiagonal());

    var c = new Circle(5, 10, 15);

    console.log(c);
    c.move(5);
    console.log(c);

    console.log(c.calcArea());
}());