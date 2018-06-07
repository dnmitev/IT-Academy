var customEvent = new CustomEvent("tripleClick");
var contextMenuEvent = new MouseEvent('contextmenu');

// Attach Custom Event to DOM
// getElementByTagName returna a collection
// there is just one body element in the page but
// it will be a collection of 1 element
var body = document.getElementsByTagName("body")[0];
var img = document.getElementById('lorem-pixel');

body.addEventListener("tripleClick", function () {
    alert("You triggered the custom event 'Triple Click'");
});

var btn = document.getElementById("btn-clickable");

var counter = 0;
btn.addEventListener('click', function () {
    counter++;
    if (counter == 3) {
        // Trigger the custom event when the condition is present
        body.dispatchEvent(customEvent);
        counter = 0;
    }

    setInterval(function () {
        counter = 0;
    }, 5000);
}, false);

btn.addEventListener('mouseover', function (ev) {
    img.dispatchEvent(contextMenuEvent);
});

img.addEventListener('contextmenu', function (ev) {
    // debugger;
});