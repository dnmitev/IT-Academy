(function () {
    String.prototype.getCamelCase = function () {
        // camelCase
        // "my sample string" ---> "mySampleString"
        // "my sample string".getCamelCase();
        var str = this;
        var words = str.split(' ');
        var result = words[0].toLowerCase();

        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            if (word) {
                result += word[0].toUpperCase() + word.substr(1).toLowerCase();
            }
        }

        return result;
    }

    String.prototype.toKebabCase = function () {
      var that = this;
      var result = that.split(' ').join('-');
      return result;
    }

    String.prototype.toEscapedHtmlString = function () {
        var regex = /(<([^>]+)>)/ig;
        return this.replace(regex, "");
    }

    Array.prototype.toPrettyString = function (separator) {
        return this.join(separator);
    }

    Array.prototype.customReverse = function () {
        // how is .reverse() implemented
        var result = [];

        for (let i = this.length - 1; i >= 0; i--) {
            result.push(this[i]);
        }

        this.splice(0, this.length, result);

        return result;
    }
}());