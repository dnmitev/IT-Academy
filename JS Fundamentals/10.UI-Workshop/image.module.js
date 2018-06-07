var Image = (function () {
    "use strict";

    var previewContainer = document.createElement('div');
    var previewHeader = document.createElement('h1');
    var listContainer = document.createElement('div');
    var imageList = document.createElement('ul');
    var imageListItem = document.createElement('li');
    var img = document.createElement('img');
    var title = document.createElement('h3');
    var filter = document.createElement('input');
    var filterLabel = document.createElement('label');

    return {
        createImagesPreviewer: _createImagesPreviewer
    };

    function _createImagesPreviewer(selector, collection) {
        var container = document.querySelector(selector);

        _setupImg(collection[0]);
        _setupPreviewHeader(collection[0]);
        _setupPreviewContainer();

        _createCollectionItems(collection);

        _setupFilter();
        _setupListContainer();

        _setupEvents();

        _setupContainer(container);
    }

    function _setupImg(item) {
        img.src = item.url;
        img.alt = item.title;
        img.className += ' img preview-img';
    }

    function _setupPreviewHeader(item) {
        previewHeader.innerText = item.title;
        previewHeader.className += ' preview-title';
    }

    function _setupPreviewContainer() {
        previewContainer.id = "preview-container";

        previewContainer.appendChild(previewHeader);
        previewContainer.appendChild(img.cloneNode(true));
    }

    function _setupFilter() {
        filter.type = 'text';
        filter.id = 'filter';

        filterLabel.innerText = 'Filter: ';
        filterLabel.htmlFor = 'filter';
    }

    function _setupListContainer() {
        listContainer.id = 'list-container';

        listContainer.appendChild(filterLabel);
        listContainer.appendChild(filter);
        listContainer.appendChild(imageList);
    }

    function _createCollectionItems(collection) {
        for (var i = 0; i < collection.length; i++) {
            title.innerText = collection[i].title;

            img.src = collection[i].url;
            img.alt = collection[i].title;

            imageListItem.appendChild(title);
            imageListItem.appendChild(img);

            imageList.appendChild(imageListItem.cloneNode(true));
        }
    }

    function _setupContainer(container) {
        container.appendChild(previewContainer);
        container.appendChild(listContainer);
    }

    function _setupEvents() {
        _setupMouseEvents();
        _setupFilterEvents();
    }

    function _setupMouseEvents() {
        var items = imageList.getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener("mouseover", _onImgItemMouseOver);
            items[i].addEventListener("mouseout", _onImgItemMouseOut);
            items[i].addEventListener("click", _onImgItemClick);
        }
    }

    function _onImgItemMouseOver(ev) {
        ev.preventDefault();
        if (!this.classList.contains('hovered')) {
            this.classList.add('hovered');
        }
    }

    function _onImgItemMouseOut(ev) {
        ev.preventDefault();
        if (this.classList.contains('hovered')) {
            this.classList.remove('hovered');
        }
    }

    function _onImgItemClick(ev) {
        ev.preventDefault();
        var currentImg = this.querySelector('img');
        var item = {
            title: currentImg.alt,
            url: currentImg.src
        };

        _setupImg(item);
        _setupPreviewHeader(item);

        previewContainer.innerHTML = '';

        _setupPreviewContainer();
    }

    function _setupFilterEvents() {
        filter.addEventListener('input', _onFilterChange);
    }

    function _onFilterChange(ev) {
        var searchTerm = this.value.toLowerCase().trim();
        var listItems = this.parentNode.querySelectorAll('li');
        for (var i = 0; i < listItems.length; i++) {
            var item = listItems[i];
            var currentTitle = item.querySelector('h3').textContent.toLowerCase().trim();
            if (currentTitle.startsWith(searchTerm)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        }
    }
}());