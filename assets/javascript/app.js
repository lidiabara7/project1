function omdb() {

    //var settings = {}
    var genre = "28";
    //var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey=trilogy"
    //var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=cc7424fa466286ce5e0ea7956a1183ba&id=28"

    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=cc7424fa466286ce5e0ea7956a1183ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=" + genre;


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
    });

}

function food() {

    var search = "chicken breast";
    var queryURL = "https://www.food2fork.com/api/search?key=ee951658fe4f3d33d2e07163d207798f&q="+search;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(JSON.parse(response));
    });

}

food();
omdb();