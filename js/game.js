$(document).ready(function(){

    console.log ("it worked");
    var savedName=["Austin", "Susan", "Benita", "Francine", "Adrain", "Dakota"];
    var playerName = document.getElementsByName("player")[0].value;
    $('#btn-begin').on('click',function() {
        console.log ("button clicked");
        console.log (playerName);
        if (playerName == savedName[0]){
            console.log ("name match");
            let chapterID = "1A";
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