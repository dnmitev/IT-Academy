(function () {
    "use strict";

    var $myDiv = $('<div />');

    $('<ul><li>Hi!</li></ul>').appendTo('body');
    $('body').prepend('<h1>Site Header</h1>');

    $myDiv.text('jquery created a div for us');
    $('body').append($myDiv);

    debugger;    
    $("div").remove(".hello");

    var content = document.createElement('div');
    var $content = $(content);
})();