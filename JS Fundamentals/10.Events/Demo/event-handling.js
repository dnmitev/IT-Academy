function onSimpleButtonClick() {
    debugger;
    alert('Simple button was clicked');
}

var btn = document.getElementById('btn-clickable');
// btn.onclick = function() {
//     debugger;
//     console.log('Advanced button was clicked!');
// }

btn.addEventListener('hover', function() {
    //debugger;
    console.log('btn hover');
    // console.log('Advanced button was clicked!');
});