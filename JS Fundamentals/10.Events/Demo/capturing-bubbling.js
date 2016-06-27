(function() {
    "use strict";

    function onBubbleClick() {
        debugger;
        console.log(this);
        console.log("Bubble: " + this.nodeName);
    }

    function onCaptureClick() {
        debugger;
        console.log("Capture: " + this.nodeName);
    }

    var btn = document.getElementById('btn-clickable');
    //btn.addEventListener('click', onBubbleClick, false);
    btn.addEventListener('click', onCaptureClick, true);

    //document.body.addEventListener('click', onBubbleClick, false);
    document.body.addEventListener('click', onCaptureClick, true);
})();