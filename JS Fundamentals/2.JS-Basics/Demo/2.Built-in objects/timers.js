function timerIntervalFunc() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    document.getElementById("clock").innerHTML = "" + hour + ":" + min + ":" + sec;
}

function timerTimeoutFunc() {
    alert('30 seconds elapsed');
}

setInterval(timerIntervalFunc, 1000);
setTimeout(timerTimeoutFunc, 30 * 1000);