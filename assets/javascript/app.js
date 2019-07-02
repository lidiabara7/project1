// store firebase data here
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2qEO1v5-ETBy30qeexa0lJBm4i3DlV5A",
    authDomain: "dinnerandmovie-16f25.firebaseapp.com",
    databaseURL: "https://dinnerandmovie-16f25.firebaseio.com",
    projectId: "dinnerandmovie-16f25",
    storageBucket: "dinnerandmovie-16f25.appspot.com",
    messagingSenderId: "614452607585",
    appId: "1:614452607585:web:b57b7fea16a412e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//new todo: 
/*
push user input to firebase as an array and then retrieve child for appending images, instead of appending directly from user input. similar to train homework. also will help with creating a trending search. work on this tomorrow during class.

... or should we handle both separately? have the searches push into firebase but also search the API right away, instead of waiting for firebase to return the child_added.
*/

var wallpapers = [
    "assets/images/curtain-2757815_1920.png",
    "assets/images/film-1668918_1920.jpg",
    "assets/images/film-3057394_1920.jpg",
    "assets/images/theater-105574_1920.jpg",
    "assets/images/theater-1713816_1920.jpg",
    "assets/images/theater-4023278_1920.jpg"
];

$(document).ready(function () {
    //$('.carousel').carousel();
    $("select").formSelect();

    var randomWallpaper = Math.floor(Math.random() * wallpapers.length);
    var bgImg = "url(" + wallpapers[randomWallpaper] + ")";
    $("body").css({ "background": "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))," + bgImg });



});

$("button").on("click", event => {

    event.preventDefault();

    var food_search = $("#food-input").val().trim();
    var genre = $("#select-genre").val();
    var genre_name = $("option:selected").text();

    //will now only run ombd_call if food_call works
    food_call(food_search).then(result => {
        if (result) {
            var trending = {
                food: food_search,
                genre: genre_name
            };
            omdb_call(genre);
            $("#main-container").show();
            database.ref().push(trending);

        }
    });

    //if food search is invalid, i don't want to start omdb_call. how can i implement this..?
    //so.. if (response !== 0) then -> omdb_call(genre)?


    

    if (DEBUG) {
        console.table('app.js', food_search, genre, trending);
    }



});

database.ref().on("child_added", snapshot => {

    if (DEBUG) {
        console.table(snapshot.food, snapshot.genre);
    }
    //trending variables
    var food = snapshot.val().food;
    var genre = snapshot.val().genre;

    //create p element to append to trending div
    var trending = $("<p> #" + food + " #" + genre + "</p>");
    // testing, it works! altho its more of a "last search" than a trending, but we will work on that later 
    $("#trending").prepend(trending); //<-- i have this showing up just so we can visualize it right now. will append it to a proper div tomorrow

});
