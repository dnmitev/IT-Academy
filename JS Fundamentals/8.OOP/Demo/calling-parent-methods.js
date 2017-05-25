// Shapes is used as a 'namespace' - holder, for the different shapes
var Shapes = (function () {

    var Shape = (function () {
        function Shape(x, y) {
            this._x = x;
            this._y = y;
        }

        Shape.prototype = {
            serialize: function () {
                var serializedShape = {
                    x: this._x,
                    y: this._y
                };

                return serializedShape;
            },
            translate: function (xOffset, yOffset) {
                this._x += xOffset;
                this._y += yOffset;
            }
        };

        return Shape;
    }());


    var Rect = (function () {
        function Rect(x, y, width, height) {
            Shape.call(this, x, y);
            this._width = width;
            this._height = height;
        }

        Rect.prototype = new Shape();

        Rect.prototype.serialize = function () {
            var serializedRect = Shape.prototype.serialize.call(this);

            serializedRect.width = this._width;
            serializedRect.height = this._height;

            return serializedRect;
        };

        Rect.prototype.translate = function (xOffset, yOffset) {
            var xDiff = this._x - xOffset;
            var yDiff = this._y - yOffset;

            // call the parent's method to change the X and Y
            // coordinates accordingly
            Shape.prototype.translate.call(this, xOffset, yOffset);

            this._width -= xDiff;
            this._height -= yDiff;
        }

        return Rect;
    }());

    var Square = (function () {
        function Square(x, y, size) {
            Rect.call(this, x, y, size, size);
        }

        Square.prototype = new Rect();

        return Square;
    }());

    return {
        Shape: Shape,
        Rect: Rect,
        Square: Square
    };

}());

var shape = new Shapes.Shape(5, 10);
var rect = new Shapes.Rect(15, 70, 100, 50);
var square = new Shapes.Square(4,9,15);

console.log(shape.serialize());
console.log(rect.serialize());
console.log(square.serialize());

rect.translate(15, 30);
console.log(rect.serialize());
shape.translate(5,10);
console.log(shape.serialize());
