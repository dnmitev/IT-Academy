(function() {
    "use strict";

    var liElement = document.createElement("li");
    console.log(liElement instanceof HTMLLIElement); //true
    console.log(liElement instanceof HTMLElement); //true
    console.log(liElement instanceof HTMLDivElement); //false

    var teamsList = document.createElement("ul");
    var teamLi = document.createElement("li");
    teamsList.appendChild(teamLi);
    debugger;
    document.body.appendChild(teamsList);
})();