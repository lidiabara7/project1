
omdb_call = (() => {

    return (genre) => {
        //var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=cc7424fa466286ce5e0ea7956a1183ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=" + genre;
        var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=cc7424fa466286ce5e0ea7956a1183ba&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=" + genre;

        //var img_url;
        //var title;

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(response => {
            if (DEBUG) {
                console.log(response);
            }
            //obtain image and movie title, maybe a short summary?
            //append to carousel
            var index = Math.floor(Math.random() * response.results.length)
            var img_url = response.results[index].poster_path;
            var overview = response.results[index].overview;
            var original_title = response.results[index].original_title;

            if (DEBUG) {
                console.table(img_url, title);
            }

            //hi haig, select id omdb-div
            var omdbDiv = $("<div>").attr("id","omdb-div");
            var title = $("<h4>").text(original_title);
            var summary = $("<p>").text(overview);
            var img = $("<img>").attr("src", "https://image.tmdb.org/t/p/w200" + img_url);

            omdbDiv.append(title).append(summary).append(img);

            $("#food-div").append(omdbDiv);
        });
    }
})()