(function food() {

    var DEBUG = true;

    $(document).ready(function () {
        $('.carousel').carousel();
        $('select').formSelect();

    });

    function api_call() {

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

                var title = response.hits[i].recipe.label;
                var link = response.hits[i].recipe.url;
                var image = response.hits[i].recipe.image;

                if (DEBUG) {
                    console.table(title, link, image)
                }

                // //init carousel
                var slider = $('.carousel');
                slider.carousel();

                //add a new item
                slider.append('<a class="carousel-item active"><img src="' + image + '"></a>');

                if (slider.hasClass('initialized')) {
                    slider.removeClass('initialized')
                }

                slider.carousel();
            }

        });

    }

    //change function call to on click when user hits submit button/enter
    //api_call();

})()
