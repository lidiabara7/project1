//store firebase data here
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2qEO1v5-ETBy30qeexa0lJBm4i3DlV5A",
    authDomain: "dinnerandmovie-16f25.firebaseapp.com",
    databaseURL: "https://dinnerandmovie-16f25.firebaseio.com",
    projectId: "dinnerandmovie-16f25",
    storageBucket: "",
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

$(document).ready(function () {
    $('.carousel').carousel();
    $('select').formSelect();

});

$("#user-input").on("click", event => {

    event.preventDefaut();

    var food_search = $("#food-input").val().trim();
    var genre = $("#genre").val();
    var DEBUG = true;
    //doesn't work properly, ask zane tomorrow
    food_call(food_search);
    omdb_call(genre);

    var trending = {
        food: food_search,
        genre: genre
    };

    database.ref().push(trending);
    if (DEBUG) {
        console.table('app.js', food_search, genre, trending);
    }

});

database.ref().on("child_added", snapshot => {

    if (DEBUG) {
        console.table(snapshot.food, snapshot.genre);
    }
    
});
