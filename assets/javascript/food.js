var DEBUG = true;

food_call = (() => {

    return (search) => {
        var queryURL = "https://api.edamam.com/search?app_id=a1114364&app_key=9484d825ccfe84c554e9a02c4890952b&q=" + search;

        //return this.. somehow, look in app.js for reason why
        //var response;

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(response => {
            if (DEBUG) {
                console.log(response);
            }
            //obtain image and link to recipe
            //append to carousel

            if (response.count === 0) {
                console.log("RESPONSE DOESNT EXIST");
                $(".input-field").css("backgroundColor", "#FA8072");
                $("#food-input").val("");
                return false;
            }
            else {
                $(".input-field").css("backgroundColor", "	#000000");
                
                //obtains random index from API so that we are appending a random item everytime.. 
                var index = Math.floor(Math.random() * response.hits.length)
                var label = response.hits[index].recipe.label;
                var link = response.hits[index].recipe.url;
                var image = response.hits[index].recipe.image;
                

                if (DEBUG) {
                    console.table(title, link, image)
                }

                //hi haig, select id food-div in css
                var foodDiv = $("<div>").attr("id","food-div");
                var title = $("<h4>").text(label);
                //creating clickable image so it links to the recipe. less noise on the page. 
                var img_link = $("<a>").attr({
                    "href" : link,
                    "target" : "_blank"
                });
                var img_url = $("<img>").attr("src", image);
                img_link.append(img_url);
                foodDiv.append(title).append(img_link);
                $("#main-container").append(foodDiv);

            }
        });
        //this is a check condition to prevent ombd from running if food doesn't exist
        return true;
    }
})()

