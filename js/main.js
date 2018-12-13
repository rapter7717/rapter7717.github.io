$(document).ready(function(){

    console.log('jquery is loaded');
    $('#jquery-test').on('click',function() {

        $('#supplement').addClass('animated slideOutUp');
        //$('#supplement').css('display','none');
        //$('#supplement').fadeOut(1000);
        setTimeout(function(){
            $('#supplement').css('display','none');
        }, 750);
      

    });

    $('#first-button').on('click',function(){

        $('#first-element').addClass('animated slideOutUp');
        $('#first-element').fadeOut(500);

    })


    $('#second-button').on('click',function(){

        $('#second-element').addClass('animated slideOutUp');
        $('#second-element').fadeOut(500);

    })


    $('#third-button').on('click',function(){

        $('#third-element').addClass('animated slideOutUp');
        $('#third-element').fadeOut(500);

    })


});