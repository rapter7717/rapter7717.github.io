$(document).ready(function(){

    console.log ("it worked");
    var savedName=["Austin", "Susan", "Benita", "Francine", "Adrian", "Dakota"];
    var playerName = document.getElementsByName("player")[0].value;
    var secondButton = document.createElement("button");
    secondButton.innerHTML = "Continue";
    secondButton.className = "btn btn-secondary";
    $('#btn-begin').on('click',function() {
        console.log ("button clicked");
        console.log (playerName);
        if (playerName == savedName[0] || playerName == savedName[2] || playerName == savedName[3] || playerName == savedName[4] || playerName == savedName[5] || playerName == savedName[1]){
            console.log ("name match");
            let chapterID = "1A";
            $.getJSON("json/game-data.json")
            .done(function(gameData) {
                gameData.chapters.forEach(function(elem) {
                    if (elem.chapter_id == chapterID) {
                        $("#game-text").html("Hello " + playerName + "!" + "</br>" + "It's good to see you again! Let's Continue" + "</br>" + " " + "</br>" + elem.chapter_text).append(secondButton);
                        
                    } else {
                        console.log ("failure");
                    };
                });
            });
        } else {
            let chapterID = "1B";
            $.getJSON("json/game-data.json")
            .done(function(gameData) {
                gameData.chapters.forEach(function(elem) {
                    if (elem.chapter_id == chapterID) {
                        $("#game-text").html(elem.chapter_text);
                    } else {
                        console.log ("failure");
                    };
                });
            });
        };
    });
    var thirdButton = document.createElement("button");
    thirdButton.innerHTML = "Be Calm...";
    thirdButton.className = "btn btn-secondary";
    var fourthButton = document.createElement("button");
    fourthButton.innerHTML = "Panic!";
    fourthButton.className = "btn btn-secondary";
    secondButton.addEventListener ("click", function() {
        console.log("second button clicked");
       // $('#game-section').addClass('animated slideOutLeft');
        //$('#game-section').fadeOut(500);
        // I recongnize that this coudl be done with a function similar to this: $("#game-section").animate({left: "500"}, 1000, "swing") but I'm working with Animate.css for consistency.
        let chapterID = "2";
            $.getJSON("json/game-data.json")
            .done(function(gameData) {
                gameData.chapters.forEach(function(elem) {
                    if (elem.chapter_id == chapterID) {
                        $("#game-text").html(elem.chapter_text).append(thirdButton).append(" || ").append(fourthButton);
                    } else {
                        console.log ("failure");
                    };
                });
            });
        $('#game-section').removeClass('slideOutLeft');
        $('#game-section').addClass('animated slideInRight');
        $('#game-section').fadeIn(500);
        });


    // $('#btn-begin').on('click',function() {
    //     if (playerName == savedName[0]){
    //         let chapterID = "1A";
    //         $.getJSON ("game-data.json")
    //         .done(function(prodData) {
    //             prodData.chapters.forEach(function(elem)) {
    //                 if (elem.chapter_id = chapterID) {
    //                     $('#game-text').html(elem.chapter_text);
    //                     console.log (elem.chapter_id); 
    //                 } else {
    //                     console.log ("failure");
    //                 });
    //             });
    //         console.log ("First If");
    //     } else {
    //         $('#game-text').html("text");
    //         console.log (playerName);
    //     }
    // });

});