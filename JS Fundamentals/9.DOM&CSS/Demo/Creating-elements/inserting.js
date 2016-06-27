(function() {
    "use strict";

    var newNode = document.createElement('div');
    var parent = document.getElementById('wrapper');
    var div2 = document.getElementById('div-02');

    debugger;
    newNode.innerHTML = '<p>Sample</p>'
    parent.insertBefore(newNode, div2);

})();