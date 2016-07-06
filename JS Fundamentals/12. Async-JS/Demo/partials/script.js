(function () {
    "use strict";

    // load the whole partial
    $('#partial-holder').load('/views/partial.html');

    // load preselected element of the partial
    // $('#partial-holder').load('/views/partial.html p.text');

    // complete fuction example    
    // $('#partial-holder').load('/views/partial.html', function (response, status, xhr) {
    //     console.log(response);
    //     console.log(status);
    //     console.log(xhr);

    //     $('p.text').text('Just magic!');
    // });
} ());