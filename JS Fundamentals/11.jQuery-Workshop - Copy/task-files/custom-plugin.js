$.fn.gallery = function (col) {
    var $this = this,
        $galleryList = $this.find('.gallery-list'),
        $imgContainers = $this.find('.image-container'),
        $selected = $this.find('.selected'),
        $images = $galleryList.find('img'),
        $currentImgContainer = $this.find('.current-image'),
        $prevImgContainer = $this.find('.previous-image'),
        $nextImgContainer = $this.find('.next-image');

    col = col || 4;

    $this.addClass('gallery');
    $galleryList.append(
        $('<div />').addClass('clearfix')
    );

    // set column count depending on col param
    $imgContainers.css('width', ((100 / col) - 2) + '%');

    $selected.hide();

    $this.on('click', 'img', onImgClick);

    function onImgClick(ev) {
        ev.preventDefault();

        var $this = $(this);
        var currentIndex = $this.data('info') - 1;
        var currentImg = $images.get(currentIndex);

        $galleryList.addClass('blurred');

        if ($this.data('info') ==
            currentImgContainer.find('img').data('info')) {
            $selected.fadeOut();
            $galleryList.removeClass('blurred');
            $galleryList.removeClass('disabled-background');

            $galleryList.parent().find('.disabled-background').remove();
            currentIndex = -1;
        } else {
            $selected.fadeIn();
            $galleryList.addClass('blurred');

            $galleryList.parent().append(
                $('<div />').addClass('disabled-background')
            );
        }

        cleanUpImgContainers();

        if (currentIndex >= 0) {
            $currentImgContainer.append($(currentImg).clone());
            $prevImgContainer.append($(getPrev(currentIndex)).clone());
            $nextImgContainer.append($(getNext(currentIndex)).clone());
        }
    }

    function getPrev(index) {
        return $images.get(index - 1);
    }

    function getNext(index) {
        if ((index + 1) < $images.length) {
            return $images.get(index + 1);
        } else {
            return $images.first();
        }
    }

    function cleanUpImgContainers() {
        $currentImgContainer.children().remove();
        $prevImgContainer.children().remove();
        $nextImgContainer.children().remove();
    }
};