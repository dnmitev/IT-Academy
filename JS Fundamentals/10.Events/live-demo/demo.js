(function () {
    "use strict";

    getSolution('wanted');

    function getSolution(className) {
        var divs = document.querySelectorAll('div.' + className);
        var div = document.createElement('div');

        div.className += ' added';
        for (var i = 0; i < divs.length; i++) {
            var element = divs[i];

            if ((i + 1) % 2 == 0) {
                div.id = 'added-'+(i+1); 
                div.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled";
                element.appendChild(div.cloneNode(true));
            }
        }
    }
} ());