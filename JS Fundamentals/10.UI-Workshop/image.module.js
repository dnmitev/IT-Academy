var Image = (function () {
    "use strict";

    var previewContainer = document.createElement('div'),
        listContainer = document.createElement('div'),
        imgList = document.createElement('ul'),
        imgListItem = document.createElement('li'),
        img = document.createElement('img'),
        title = document.createElement('h3'),
        previewTitle = document.createElement('h1'),
        filter = document.createElement('input'),
        label = document.createElement('label'),
        docFragment = document.createDocumentFragment();

    var _createImagesPreviewer = function (selector, collection) {
        var container = document.querySelector(selector);

        _initPreviewContainer(collection);
        _initListContainer(collection);

        listContainer.querySelectorAll('#list-container ul li').forEach(function (el) {
            el.addEventListener('click', _onImgListItemClick);
        });

        docFragment.appendChild(previewContainer);
        docFragment.appendChild(listContainer);

        container.appendChild(docFragment);
    }

    return {
        createImagesPreviewer: _createImagesPreviewer
    };

    function _initPreviewContainer(collection) {
        previewContainer.id = 'preview-container';

        previewTitle.innerText = collection[0].title;
        previewTitle.className += ' preview-title';

        previewContainer.appendChild(previewTitle);

        img.src = collection[0].url;
        img.alt = collection[0].title;

        img.className += ' preview-img img';

        previewContainer.appendChild(img.cloneNode(true));
    }

    function _initListContainer(collection) {
        listContainer.id = 'list-container';
        filter.id = 'filter';

        filter.addEventListener('keyup', _onFilterKeyUp);

        label.htmlFor = 'filter';
        label.innerText = 'Filter';

        listContainer.appendChild(label);
        listContainer.appendChild(filter);

        img.className = img.className.replace('preview-img', '');

        _processCollection(collection);

        listContainer.appendChild(imgList);
    }

    function _processCollection(collection) {
        for (var i = 0; i < collection.length; i++) {
            var current = collection[i];

            title.innerText = current.title;
            img.src = current.url;

            imgListItem.appendChild(title);
            imgListItem.appendChild(img);

            imgList.appendChild(imgListItem.cloneNode(true));
        }
    }

    function _onImgListItemClick(ev) {
        ev.preventDefault();
        var that = this;

        var title = that.querySelector('h3').innerText;
        var imgUrl = that.querySelector('img').src;

        previewTitle.innerText = title;
        previewContainer.querySelector('img').src = imgUrl;
    }

    function _onFilterKeyUp(ev) {
        ev.preventDefault();

        var that = this;

        listContainer.querySelectorAll('#list-container ul li')
            .forEach(function (el) {
                el.className = el.className.replace('hidden', '');
            });

        listContainer.querySelectorAll('#list-container ul li')
            .forEach(function (el) {
                var title = el.querySelector('h3').innerText.trim().toLowerCase();
                if (!title.startsWith(that.value.toLowerCase())) {
                    el.className += ' hidden';
                } else {
                    el.className = el.className.replace('hidden', '');
                }
            });
    }
}());