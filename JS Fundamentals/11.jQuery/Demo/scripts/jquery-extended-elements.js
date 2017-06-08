(function () {
    "use strict";

    var $list = $('#items-list');

    $list.addClass('custom-class');
    debugger;
    $list.fadeOut(5000);

    $('#first-div')
        .addClass('yellow')
        .css('background-color', 'yellow');

    console.log($('.yellow'));


    // having HTML in .html() is WRONG!!! and DANGEROUS!!!
    $('body')
        .append($('<div />')
                    .addClass('manually-added')
                    .html('<strong>So strong out</strong>'));

    debugger;
    console.log($('div.manually-added').html());
    console.log($('div.manually-added').text());

    debugger;
    $('div.manually-added').html('<i onclick="alert(\'Zle si!\')">I am italized</i>');
    debugger;
    // $('div.manually-added').text('<i>I am italized</i>');

})();