$(document).ready(function () {
    $('.carousel').carousel();
    $('select').formSelect();

});

function food() {

    var search = "chicken breast"; //jquery attach to search bar
    var queryURL = "https://www.food2fork.com/api/search?key=ee951658fe4f3d33d2e07163d207798f&q=" + search;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(JSON.parse(response));
        //obtain image and link to recipe
        //append to carousel
    });

}

food();

