var firebaseConfig = {  
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id",
  };
  
// start firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//website loads

// $("#submit").on("click", function() {   assign variables to on click function, in this case we are going to be storing SEARCH PARAMETERS to show users trending searches

// ingredients = $("#searchbar").val().trim();
// typeOfMovieSearched = $("#searchbar2").val().trim();

// database.ref().push({   push variables as an object to firebase
// ingredients: ingredients (key/value)
// typeOfMovieSearched: movie

// })



