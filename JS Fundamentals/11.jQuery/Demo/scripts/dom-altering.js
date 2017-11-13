(function () {
    "use strict";

    var $myDiv = $('<div />');
    debugger;
    
    $('<ul><li>Hi!</li></ul>').appendTo('body');
    $('body').prepend('<h1>Site Header</h1>');
    debugger;

    $myDiv.text('jquery created a div for us');
    $('body').append($myDiv);
    debugger

    debugger;
    $("div").remove(".hello");

    $('#lorem').append(
        $('<div />').text('sample text content')
    );
})();