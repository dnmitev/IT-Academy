(function() {
    "use strict";

    var newNode = document.createElement('div');
    var parent = document.getElementById('wrapper');
    var div2 = document.getElementById('div-02');

    debugger;
    //// This is incorrect because it's not error-prone
    // newNode.innerHTML = '<p>Sample</p>';

    var p = document.createElement('p');
    p.textContent = "sample";
    newNode.appendChild(p);
    
    parent.insertBefore(newNode, div2);

})();