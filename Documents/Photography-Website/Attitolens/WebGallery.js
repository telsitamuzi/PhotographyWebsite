// JQuery Implementation
$(document).ready(function() {

    //Lazy load plugin
    $("img.lazyloadImages").lazyload();

    //Ajax implementation: getting images from json file
    jQuery.getJSON("gallery.json", function(data){
        jQuery.each(data, function(){
            jQuery.each(this, function(key, value){
                
                $(".ProjectImages").append("<img src= " + value.image + "></img>");
                
                $(".ProjectImages").append("<div>" + value.caption+ "</div");


            });
        });

    });
    
});

/*
// JQuery Implementation
$(document).ready(function() {

    //Ajax implementation: getting photographer's bio from json file
    jQuery.getJSON("profile.json", function(data){
        jQuery.each(data, function(){
            console.log(data);

            jQuery.each(this, function(key, value){
                console.log(value);
                
                $("#quoteGallery").append("<blockquote>" + value.blockquote + "<blockquote>");

            });
        });

    });
});
*/