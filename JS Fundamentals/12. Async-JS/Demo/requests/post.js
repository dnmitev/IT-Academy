(function () {
    "use strict";

    var data = {
        testKey: 'Test Value'
    };

    $.ajax('data.json', {
        method: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    })
        .done(function (response) {
            console.log('Success!');
        })
        .error(function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });

    // $.post('/data.json', { key: 'value' }, function (result) {
    //     console.log(result);
    //     debugger;
    // });

    // $.post('/data.json', { key: 'value' })
    //     .done(function (result) {
    //         console.log(result);
    //         debugger;
    //     });
} ());