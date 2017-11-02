(function() {
    'use strict';

    var btn = document.getElementById('btn-clickable'),
        btnZoomIn = document.getElementById('btn-zoom-in'),
        btnZoomOut = document.getElementById('btn-zoom-out'),
        div = document.querySelector('div'),
        step = 1.2,
        fontSize = '16px';

    btn.addEventListener('click', onBtnClick);
    btnZoomIn.addEventListener('click', onBtnZoomInClick);
    btnZoomOut.addEventListener('click', onBtnZoomOutClick);

    div.style.fontSize = fontSize;

    function onBtnClick(ev) {
        ev.preventDefault();
        var div = document.getElementsByTagName('div')[0];
        div.style.backgroundColor = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
            return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
    }

    function onBtnZoomInClick(ev) {
        ev.preventDefault();
        var currentFontSize = parseFloat(div.style.fontSize);
        div.style.fontSize = (currentFontSize * step) + 'px';
    }

    function onBtnZoomOutClick(ev) {
        ev.preventDefault();
        var currentFontSize = parseFloat(div.style.fontSize);
        div.style.fontSize = (currentFontSize / step) + 'px';
    }
}());