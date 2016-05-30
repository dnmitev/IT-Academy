(function () {
    "use strict";

    var $first = $('li').first();
    console.log($first);
    debugger;

    console.log($first.next());
    debugger;

    var $node = $('.special');
    console.log($node.parent().attr('id'));
    debugger;

    console.log($node.parents('#wrapper').attr('id'));
    debugger;
})();