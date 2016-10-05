(function() {
    "use strict";

    var btn = document.getElementById('btn-demo'),
        input = document.getElementById('input-demo');

        btn.addEventListener('click', function() {
            let number = input.value * 1;

            if (number % 2) {
                console.log('Even number!');
            } else {
                console.log('Odd number!');
            }
        });
        
        // btn.onclick = function() {
        //     let number = input.value * 1;

        //     if (number % 2) {
        //         console.log('Even number!');
        //     } else {
        //         console.log('Odd number!');
        //     }
        // };
}());