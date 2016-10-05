(function() {
    "use strict";
    
    var counter = 0;

    for (let i = 0; i < 10; i++) {
        let myVar = 3;

        if (i % myVar) {
            console.log('Si, senior!');
            break;
        }

        counter++;
    }

    console.log(counter);

}());