var img = document.getElementById('lorem-pixel');
img.addEventListener('contextmenu', onImgClick);

function onImgClick(ev) {
    ev.preventDefault();
}