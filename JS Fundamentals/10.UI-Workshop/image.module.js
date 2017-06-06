var Image = (function () {
    "use strict";

    var previewContainer = document.createElement('div'),
        previewTitle = document.createElement('h1'),
        previewImg = document.createElement('img'),
        listContainer = document.createElement('div'),
        label = document.createElement('label'),
        filter = document.createElement('input'),
        imgList = document.createElement('ul'),
        imgListItem = document.createElement('li'),
        imgListItemTitle = document.createElement('h3'),
        imgListItemImg = document.createElement('img');

    function createImagesPreviewer(selector, items) {
        var container = document.querySelector(selector);

        _adjustPreviewContainer(items);
        _adjustListContainer(items);

        _attachEventListeners();

        container.appendChild(previewContainer);
        container.appendChild(listContainer);
    }

    return {
        createImagesPreviewer: createImagesPreviewer
    }

    function _adjustPreviewContainer(items) {
        _setElementId(previewContainer, 'preview-container');
        _setElementId(listContainer, 'list-container');

        _setClassNames(previewTitle, 'preview-title');
        _setTextContent(previewTitle, items[0].title);

        _setClassNames(previewImg, 'img preview-img');

        _setImg(previewImg, items[0].url, items[0].title);

        previewContainer.appendChild(previewTitle);
        previewContainer.appendChild(previewImg);
    }

    function _adjustListContainer(items) {
        _setLabel(label, 'filter');
        _setInput(filter);

        _setClassNames(imgList, 'img-list');
        _setClassNames(imgListItem, 'img-list-item');
        _setClassNames(imgListItemImg, 'img');

        _setListItem(items);

        listContainer.appendChild(label);
        listContainer.appendChild(filter);
        listContainer.appendChild(imgList);
    }

    function _setElementId(element, id) {
        element.id = id;
    }

    function _setClassNames(element, names) {
        element.className += ` ${names}`;
    }

    function _setTextContent(element, text) {
        element.textContent = text;
    }

    function _setImg(img, src, alt) {
        img.src = src;
        img.alt = alt;
    }

    function _setLabel(label, forId, text) {
        text = text || 'Filter';

        label.htmlFor = forId;
        _setTextContent(label, text);
    }

    function _setInput(input, type, id) {
        id = id || 'filter';
        type = type || 'text';

        _setElementId(input, id);
        input.type = type;

        input.addEventListener('input', _onFilterInput);
    }

    function _setListItem(items) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            _setTextContent(imgListItemTitle, item.title);
            _setImg(imgListItemImg, item.url, item.title);

            imgListItem.appendChild(imgListItemTitle);
            imgListItem.appendChild(imgListItemImg);

            imgList.appendChild(imgListItem.cloneNode(true));
        }
    }

    function _attachEventListeners() {
        var listItems = imgList.children;
        for (var i = 0; i < listItems.length; i++) {
            var item = listItems[i];
            item.addEventListener('click', _onImgListItemClick);
            item.addEventListener('mouseover', _onImgListItemMouseOver);
            item.addEventListener('mouseout', _onImgListItemMouseOut);
        }
    }

    function _onImgListItemClick(ev) {
        ev.preventDefault();
        var that = this;

        var clickedImg = that.querySelector('img');
        var clickedTitle = that.querySelector('h3');

        _setTextContent(previewTitle, clickedTitle.textContent);
        _setImg(previewImg, clickedImg.src, clickedImg.alt || clickedTitle.textContent);
    }

    function _onFilterInput(ev) {
        ev.preventDefault();
        var that = this;
        var searchTerm = that.value;

        var listItems = imgList.children;
        for (var i = 0; i < listItems.length; i++) {
            var item = listItems[i];
            item.className = item.className.replace('hidden', '');
        }

        for (var i = 0; i < listItems.length; i++) {
            var item = listItems[i];
            var title = item.querySelector('h3').textContent;
            if (title.toLowerCase().indexOf(searchTerm.toLowerCase()) < 0) {
                if (item.className.indexOf('hidden') < 0) {
                    _setClassNames(item, 'hidden');
                }
            }
        }
    }

    function _onImgListItemMouseOver(ev) {
        ev.preventDefault();
        _setClassNames(this, 'hovered');
    }

    function _onImgListItemMouseOut(ev) {
        ev.preventDefault();
        this.className = this.className.replace('hovered', '');
    }
}());