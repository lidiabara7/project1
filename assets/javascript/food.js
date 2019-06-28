$(document).ready(function () {
    $('.carousel').carousel();
    $('select').formSelect();

});

function food() {

    //var search = $("#food-input").attr().trim();
    var search = "pasta";
    var queryURL = "https://api.edamam.com/search?app_id=a1114364&app_key=9484d825ccfe84c554e9a02c4890952b&q=" + search;


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        //obtain image and link to recipe
        //append to carousel
        for (var i = 0; i < 3; i++) {

            // var publisher = response.recipes[i].publisher
            // var title = response.recipes[i].title
            // var img_url = response.recipes[i].image_url
            // var link = response.recipes[i].source_url
            var img_url = response.hits[i].recipe.image;
            var title = response.hits[i].recipe.label;
            var link = response.hits[i].recipe.url;
            console.log(response.hits[i].recipe.image)

            // var car_item = $("<a>").attr({
            //     "class": "carousel-item",
            //     "href": link
            // })
            var a = $("<a class='carousel-item' style='transform: translateX(438px) translateY(100px) translateX(-400px) translateZ(-400px); z-index: -2; opacity: 0.2; visibility: visible;'></a>");
            var img = $("<img>").attr("src", img_url);
            a.append(img);
            //img.wrap("<a class='carousel-item'></a>");

            // //init carousel
            // var slider = $('.carousel');
            // slider.carousel();

            // //add a new item
            // slider.append('<a class="carousel-item active" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"></a>');

            // //remove the 'initialized' class which prevents slider from initializing itself again when it's not needed
            // if (slider.hasClass('initialized')) {
            //     slider.removeClass('initialized')
            // }

            // //just reinit the carousel
            // slider.carousel();


            $(".carousel").append(a)

        }

    });

}

food();

