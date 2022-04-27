
window.onload = function(){
    
}

function registration(){
    location.href = "registration.html";

}

// Event Handler
function submission(){
    alert("Your request has been received");
}

// JQuery Implementation
$(document).ready(function() {

    //Ajax implementation: getting photographer's bio from json file
    jQuery.getJSON("profile.json", function(data){
        jQuery.each(data, function(){
            console.log(data);

            jQuery.each(this, function(key, value){
                console.log(value);

                
                $("#quote").append("<blockquote>" + value.blockquote + "<blockquote>");

            });
        });

    });
});

// JQuery Implementation
$(document).ready(function() {

    //Ajax implementation: getting the image from json file
    jQuery.getJSON("index.json", function(data){
        jQuery.each(data, function(){
            console.log(data);

            jQuery.each(this, function(key, value){
                console.log(value);

                
                $(".photo").append("<img src= " + value.image + "></img>");

            });
        });

    });
});