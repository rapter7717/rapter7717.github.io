$(document).ready(function(){

    console.log ("it worked");
    var inputName=["Austin", "Susan", "Benita", "Francine", "Adrain", "Dakota"];
    var playerName = document.getElementsByName("player")[0].value;
    $('#btn-begin').on('click',function() {

        $('#game-text').text("text");
        console.log (playerName)
    });

});