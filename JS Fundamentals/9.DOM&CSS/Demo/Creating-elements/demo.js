(function() {
    "use strict";

    var wrapper = document.getElementById('wrapper');

    var myElement = document.createElement('article');
    var articleHeader = document.createElement('h3');

    articleHeader.textContent = "This is demo article";
    myElement.appendChild(articleHeader);

    wrapper.appendChild(myElement);

    // wrapper.innerHTML = '<div style="color:blue;">Blue text</div>';

    var myValue = document.querySelectorAll('input[type="text"]')[0];
    myValue.value = "Sample";
}());