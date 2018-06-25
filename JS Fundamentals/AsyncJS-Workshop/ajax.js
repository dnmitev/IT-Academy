(function () {
    "use strict";

    var url = 'https://api.themoviedb.org/3/search/movie?api_key=ee4147bedd685cdebb23042532c92117&language=en-US&query={{searchTerm}}&page=1&include_adult=false';
    var imgUrl = 'http://image.tmdb.org/t/p/w500/';

    var $moviesContainer = $('#movies');
    var $error = $('#error');
    var $loadingScrn = $('#loading-screen');

    $moviesContainer.hide();
    $error.hide();
    $loadingScrn.hide();

    $('#get-movie-btn').click(function (ev) {
        ev.preventDefault();

        var $this = $(this);
        var urlToCall = url.replace('{{searchTerm}}', encodeURI($this.parent().find('input').val()));

        $loadingScrn.fadeIn(1000);

        $.ajax(urlToCall)
            .done(function (movies) {

                $moviesContainer.fadeIn(2000);
                $loadingScrn.fadeOut(1000);

                var $movie = $('<div >').addClass('movie');

                $movie.load(`partial/movie.html`, function (response) {
                    var $movieTemplate = $(response);

                    for (var i = 0; i < movies.results.length; i++) {
                        var movie = movies.results[i];
                        $movie.html(' ');

                        $movieTemplate.find('.movie-poster')
                            .attr('src', imgUrl + movie.poster_path)
                            .attr('alt', movie.title);

                        $movieTemplate.find('.movie-title').text(movie.title);
                        $movieTemplate.find('.movie-overview').text(movie.overview);
                        $movieTemplate.find('.movie-homepage')
                            .attr('href', movie.homepage);

                        $movie.append($movieTemplate);
                        $moviesContainer.append($movie.clone(true));
                    }

                });

            })
            .catch(function (jqXhr, reason, status) {
                $error.fadeIn(1000);
                $error.find('p').text(`${reason} ---> ${status}`);
                $loadingScrn.fadeOut(1000);
            });
    });
}());