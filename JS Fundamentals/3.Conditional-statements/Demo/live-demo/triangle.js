(function () {
    "use strict";

    var btn = document.getElementById('side-btn'),
        sideA = document.getElementById('side-a'),
        sideB = document.getElementById('side-b'),
        sideC = document.getElementById('side-c');

    btn.onclick = function (ev) {
        let a = sideA.value * 1;
        let b = sideB.value * 1;
        let c = sideC.value * 1;

        console.log(a + b + c);
    }


}());