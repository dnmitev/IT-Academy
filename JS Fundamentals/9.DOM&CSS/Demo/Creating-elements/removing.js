(function() {
    "use strict";

    var teams = document.getElementsByTagName("ul")[0];
    var team = teams.getElementsByTagName("li")[3];

    debugger;
    // teams.removeChild(team);
    team.parentNode.removeChild(team);
})();