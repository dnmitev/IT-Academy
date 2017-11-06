(function () {
    'use strict';

    var text = 'Липсата на желание за работа най-често идва от ниското заплащане. Най-демотивирани са хората в активна възраст - между 18 и 29 години. Тук все пак трябва да се отчете, че една част от младежите все още са в процес на търсене на своята професионална реализация.';

    function getTextToSentances(text) {
        var sentances = text.split('.');
        return sentances;
    }

    var sentances = getTextToSentances(text);
    console.log(sentances.join('\n ------ \n'));
}());