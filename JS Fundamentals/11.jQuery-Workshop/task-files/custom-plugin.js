$.fn.gallery = function (col) {
    var $gallery = this,
        $selected = $gallery.find('.selected'),
        $imgs = $gallery.find('.gallery-list img');

    col = col || 4;

    var infoCounter = 0;
    $imgs.each(function (index, element) {
        var $element = $(element);
        $element.attr('data-info', infoCounter)
            .parent()
            .css('width', `${98/col}%`);

        infoCounter++;
    });

    $gallery.addClass('gallery')
        .find('.gallery-list')
        .addClass('clearfix');

    $selected.hide();

    attachClickOnImgs();

    $gallery.on('click', '.disabled-background', function (ev) {
        var $this = $(this);
        $this.find('.image-container img')
            .off('click');
    });

    $selected.on('click', '.current-image', function (ev) {
        ev.preventDefault();

        $gallery.find('.gallery-list')
            .removeClass('blurred disabled-background');

        $selected.hide();
        attachClickOnImgs();
    });

    adjustImageEvent('.previous-image img');
    adjustImageEvent('.next-image img');

    function attachClickOnImgs() {
        $imgs.click(function (ev) {
            ev.preventDefault();

            var $this = $(this),
                index = $this.data("info");

            $selected.show();
            $gallery.find('.gallery-list')
                .addClass('blurred disabled-background');

            adjustSelectedContainer(index, $this);
        });
    }

    function adjustSelectedContainer(index, element) {
        $selected.find('.current-image')
            .html('')
            .append(element.clone());

        $selected.find('.previous-image')
            .html('')
            .append($($imgs.get(index - 1)).clone());

        $selected.find('.next-image')
            .html('')
            .append(
                $($imgs.get((index + 1) >= $imgs.length ? 0 : index + 1))
                .clone());
    }

    function adjustImageEvent(selector) {
        $selected.on('click', selector, function (ev) {
            ev.preventDefault();

            var $this = $(this),
                index = $this.data("info");

            adjustSelectedContainer(index, $this);
        });
    }
};