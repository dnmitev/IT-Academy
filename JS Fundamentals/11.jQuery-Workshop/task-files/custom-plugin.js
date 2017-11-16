$.fn.gallery = function (col) {
    var $gallery = this,
        $galleryList = $gallery.find('.gallery-list'),
        $selected = $gallery.find('.selected'),
        $imageContainers = $galleryList.find('.image-container'),
        $currentImage = $selected.find('#current-image'),
        $prevImage = $selected.find('#previous-image'),
        $nextImage = $selected.find('#next-image'),
        galleryWidth = $gallery.outerWidth();   

    col = col || 4;

    $imageContainers.css('width', 
        ((galleryWidth * 0.95) / col) + 'px');

    $gallery.addClass('gallery clearfix');
    $selected.hide();

    $imageContainers.click(function (ev) {
        ev.preventDefault();

        var $this = $(this);
        var index = $imageContainers.get().indexOf(this);

        $selected.show();
        _setupSelectedView(index, $imageContainers.length);
    });

    $currentImage.click(function (ev) {
        ev.preventDefault();
        $galleryList
            .removeClass('blurred disabled-background clearfix');
        $selected.fadeOut(1000);
    });

    $selected.on('click', '.previous-image, .next-image', function (ev) {
        ev.preventDefault();
        var $this = $(this);
        var index = $this
            .find('img')
            .data('info');

        _setupSelectedView(index, $imageContainers.length);
    });

    function _setupSelectedView(index, total) {
        var nextIndex = index + 1 >= total ? 0 : index + 1;
        var prevIndex = index - 1;

        var current = $imageContainers.get(index);
        var next = $imageContainers.get(nextIndex);
        var prev = $imageContainers.get(prevIndex);

        $selected.show();
        $galleryList
            .addClass('blurred disabled-background');

        _setupSelectedImageContainer(index, current, $currentImage);
        _setupSelectedImageContainer(nextIndex, next, $nextImage);
        _setupSelectedImageContainer(prevIndex, prev, $prevImage);
    }

    function _setupSelectedImageContainer(index, element, $element) {
        $element
            .attr('src', $(element).find('img').attr('src'));
        $element
            .data('info', index);
    }
};