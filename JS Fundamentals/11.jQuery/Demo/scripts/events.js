(function () {
    "use strict";

    // $('a.btn').on('click', function () {
    //     $(".hello").addClass("selected");
    // });

    $('a.btn').click(function(ev) {
        $(".hello").addClass("selected");
    });

    $('div.hello').mouseover(function(ev) {
        ev.preventDefault();
        var $this = $(this);

        $this.css('color', 'blue')
            .css('font-weigth', 'bold');
    });

    $('div.hello').mouseout(function(ev){
        ev.preventDefault();

        $(this).css('color', 'inherit');
    });
})();