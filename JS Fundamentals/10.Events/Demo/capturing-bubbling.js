(function () {
    "use strict";

    var btn = document.getElementById('btn-clickable');
    // btn.addEventListener('click', onBubbleClick);
    btn.addEventListener('click', onCaptureClick, true);

    // document.body.addEventListener('click', onBubbleClick);
    document.body.addEventListener('click', onCaptureClick, true);

    function onBubbleClick(ev) {
        debugger;
        console.log(this);
        console.log("Bubble: " + this.nodeName);
    }

    function onCaptureClick(ev) {
        debugger;
        console.log("Capture: " + this.nodeName);
    }

})();