(function () {
    "use strict";

    var movie = null;
    var imgUrl = 'http://image.tmdb.org/t/p/w500/';

    // $.ajax('https://api.themoviedb.org/3/movie/550?api_key=ee4147bedd685cdebb23042532c92117', {
    //     method: 'GET',
    //     success: function (response) {
    //         console.log(response);
    //         debugger;

    //         movie = response;
    //         $("#loading").fadeOut(2000);

    //         setTimeout(function () {
    //             var $container = $('<div />');

    //             $container.append($('<h2 />').text(movie.title));
    //             $container.append($('<img />').attr('src', imgUrl + movie.poster_path));

    //             $('#main').append($container).fadeIn(1000);
    //         }, 2000);
    //     },
    //     error: function (jqXhr, status, error) {
    //         $("#loading").fadeOut();
    //         $('#main').append($('<p />').text(error).css('color', 'red'));
    //     }
    // });

    // $.getJSON('https://api.themoviedb.org/3/movie/550?api_key=ee4147bedd685cdebb23042532c92117', function (response) {
    //     console.log(response);
    //     debugger;
    // });

    // $.ajax('https://api.themoviedb.org/3/movie/550?api_key=ee4147bedd685cdebb23042532c92117')
    //     .done(function (response) {
    //         console.log(response);
    //         debugger;
    //     })
    //     .error(function (err) {
    //         console.log(err);
    //         debugger;
    //     });

    //// this would produce an error because the URL is unaouthorized    
    $.ajax('https://api.themoviedb.org/3/movie/550?api_key=ee4147bedd685cdebb23042532c92117----------------')
        .done(function (response) {
            console.log(response);
            debugger;
        })
        .error(function (err) {
            console.log(err);
             $('#main').append($('<h2 />').text('unaouthorized Access!'));
            debugger;
        });
}());