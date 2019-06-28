function omdb() {

    var genre = "28"; //change this to jquery to attach to dropdown list
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=cc7424fa466286ce5e0ea7956a1183ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=" + genre;


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        //obtain image and movie title, maybe a short summary?
        //append to carousel
    });
}

omdb();