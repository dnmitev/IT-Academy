(function () {
    "use strict";

    var list = document.getElementById('list');
    // for (var i = 0; i < 100000; i++) {
    //     var li = document.createElement('li');
    //     li.innerText = "List item#" + (i + 1);
    //     list.appendChild(li);
    // }

    // document.body.appendChild(list);
    // debugger;


    var fragment = document.createDocumentFragment();
    // for (var i = 0; i < 100000; i++) {
    //     var li = document.createElement('li');
    //     li.innerText = `List item#${i + 1}`;
    //     fragment.appendChild(li);
    // }

    // // debugger;
    // list.appendChild(fragment);

    var item = document.createElement('li');
    item.className += " list-item";
    item.style.border = '1px solid yellow';
    for (var i = 0; i < 100000; i++) {
        item.innerText = "Optimized#" + (i + 1);
        fragment.appendChild(item.cloneNode(true));
    }

    // // debugger;
    list.appendChild(fragment);
})();