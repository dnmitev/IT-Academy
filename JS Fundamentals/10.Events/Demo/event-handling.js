function onSimpleButtonClick() {
    debugger;
    alert('Simple button was clicked');
}

var btn = document.getElementById('btn-clickable');
btn.onclick = function onBtnClick() {
    debugger;
    throw new Error('Fatal Error');
    console.log('Advanced button was clicked!');
}

btn.onclick = onBtnClick;
function onBtnClick() {
    debugger;
    console.log('Advanced button was clicked!');
}

btn.addEventListener('mouseover', function() {
    // debugger;
    console.log('btn mouseover');
});

btn.addEventListener('mouseover', onBtnMouseOver);
function onBtnMouseOver() {
    console.log('Fancy mouseover');
}