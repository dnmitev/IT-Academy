function createImagesPreviewer(selector, items) {
    var container = document.querySelector(selector),
        previewContainer = document.createElement('div'),
        previewTitle = document.createElement('h1'),
        previewImg = document.createElement('img'),
        listContainer = document.createElement('div'),
        imgList = document.createElement('ul'),
        imgItem = document.createElement('li'),
        imgItemTitle = document.createElement('h3'),
        imgItemImg = document.createElement('img'),
        filterInput = document.createElement('input'),
        filterLabel = document.createElement('label'),
        imgArr = [];

    adjustStyles(
        previewContainer, listContainer, previewImg,
        imgList, imgItem, imgItemTitle, imgItemImg);

    setImageData(previewImg, items[0]);
    setTitleData(previewTitle, items[0]);

    previewContainer.appendChild(previewTitle);
    previewContainer.appendChild(previewImg);

    filterInput.id = 'animals-filter';
    filterInput.type = 'text';

    filterInput.addEventListener('input', onFilterInput);

    filterLabel.innerText = 'Animals filter';
    filterLabel.htmlFor = 'animals-filter';

    listContainer.appendChild(filterLabel);
    listContainer.appendChild(filterInput);


    for (var index = 0; index < items.length; index++) {
        var element = items[index];

        setTitleData(imgItemTitle, element);
        setImageData(imgItemImg, element);

        imgItem.appendChild(imgItemTitle);
        imgItem.appendChild(imgItemImg);

        imgArr.push(imgItem.cloneNode(true));
    }

    imgArr[0].classList += 'current';

    for (var index = 0; index < imgArr.length; index++) {
        var element = imgArr[index];

        element.addEventListener('mouseover', onThumbnailMouseOver);
        element.addEventListener('mouseout', onThumbnailMouseOut);
        element.addEventListener('click', onThumbnailClick);
        imgList.appendChild(element);
    }

    listContainer.appendChild(imgList);

    container.appendChild(previewContainer);
    container.appendChild(listContainer);

    function onThumbnailClick(ev) {
        ev.preventDefault();

        var target = this,
            currentElement = document.querySelector('.current');

        currentElement.classList.remove('current');

        if (target.classList.contains('current')) {
            target.classList.remove('current');
        } else {
            target.classList += 'current';

            var item = {
                url: this.lastChild.src,
                title: this.lastChild.alt
            };

            setImageData(previewImg, item);
            setTitleData(previewTitle, item);
        }
    }

    function onThumbnailMouseOver(ev) {
        ev.preventDefault();
        this.style.backgroundColor = 'lightgrey';
    }

    function onThumbnailMouseOut(ev) {
        ev.preventDefault();
        this.style.backgroundColor = '';
    }

    function onFilterInput(ev) {
        ev.preventDefault();
        var filter = this.value.toLowerCase();


        for (var index = 0; index < imgArr.length; index++) {
            var element = imgArr[index];

            var title = element.firstChild.innerText.toLowerCase();
            if (title.startsWith(filter)) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        }
    }
}

function adjustStyles(
    previewContainer, listContainer, previewImg,
    imgList, imgItem, imgItemTitle, imgItemImg) {
    adjustPreviewContainerStyles(previewContainer);
    adjustListContainerStyles(listContainer);
    adjustPreviewImgStyles(previewImg);
    adjustImgListStyles(imgList);
    adjustImgItemStyles(imgItem);
    adjustImgTitleStyles(imgItemTitle);
    adjustImgItemImgStyles(imgItemImg);
}

function adjustPreviewContainerStyles(container) {
    container.style.cssFloat = "left";
    container.style.width = '79%';
    container.style.textAlign = 'center';
}

function adjustListContainerStyles(container) {
    container.style.cssFloat = "left";
    container.style.width = '20%';
}

function adjustPreviewImgStyles(img) {
    img.style.width = '100%';
    img.style.borderRadius = '25px'
}

function adjustImgListStyles(imgList) {
    imgList.style.listStyleType = 'none';
}

function adjustImgItemStyles(imgItem) {
    imgItem.style.padding = '10px';
}

function adjustImgTitleStyles(imgItemTitle) {
    imgItemTitle.style.textAlign = 'center';
}

function adjustImgItemImgStyles(imgItemImg) {
    imgItemImg.style.width = '100%';
    imgItemImg.style.borderRadius = '15px';
}

function setImageData(img, item) {
    img.src = item.url;
    img.alt = item.title;
}

function setTitleData(title, item) {
    title.innerText = item.title;
}

