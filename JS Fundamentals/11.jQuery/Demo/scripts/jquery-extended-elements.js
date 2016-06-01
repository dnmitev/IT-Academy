(function () {
    "use strict";

    var $list = $('#items-list');

    $list.addClass('custom-class');
    $list.fadeOut(5000);

    $('#first-div')
        .addClass('yellow')
        .css('background-color', 'yellow');

    console.log($('.yellow'));

    $('body')
        .append($('<div />')
                    .addClass('manually-added')
                    .html('<strong>So strong out</strong>'));

    console.log($('div.manually-added').html());
    console.log($('div.manually-added').text());

    debugger;    
    $('div.manually-added').html('<i>I am italized</i>');
    debugger;
    $('div.manually-added').text('<i>I am italized</i>');
        
})();