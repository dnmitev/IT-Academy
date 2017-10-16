(function () {
    "use strict";

    String.prototype.getEmailsList = function (number) {
        number = number || 3;
        
        var regex = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+/gim;
        var match = this.match(regex);
        var result = [];

        for (var i = 0; i < number; i++) {
            if (i >= match.length) {
                break;
            }

            result.push(match[i]);
        }

        return result;
    }
}());