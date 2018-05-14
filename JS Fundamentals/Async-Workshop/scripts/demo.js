(function () {
    "use strict";

    var $movieItem = $('<li />').addClass('list-item'),
        $movieTitle = $('<h3 />'),
        $moviePoster = $('<img />'),
        $movieOverview = $('<p />').addClass('text-primary text-justify'),
        $list = $('#movie-list');

    var imgUrl = 'http://image.tmdb.org/t/p/w500'

    $.getJSON('https://api.themoviedb.org/3/list/39343?api_key=ee4147bedd685cdebb23042532c92117&language=en-US')
        .then(function (data) {
            var movies = data.items;

            for (var i = 0; i < movies.length; i++) {
                var movie = movies[i];

                $movieTitle.text(movie.title);
                $moviePoster.attr('src', imgUrl + movie.poster_path);
                $movieOverview.text(movie.overview);

                $movieItem.append($movieTitle)
                            .append($moviePoster)
                            .append($movieOverview);

                $list.append($movieItem.clone());
            }
        });
}());