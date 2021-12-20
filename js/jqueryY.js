$(document).ready(function(){
    
    // special Scroll only
    $(window).scroll( function(){

    let scrollValue = $(window).scrollTop();
    if( scrollValue >= 20)
    {
        $(".navbar").addClass("nav");
    }
    else
    {
        $(".navbar").removeClass("nav");
    }

    });

     // Toggle in btn
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

});

// Scroll to top 
$(window).scroll( function() {

    if( $(this).scrollTop() > 300 ) {

        $('#arrow-up').fadeIn();
    }
    else
    {
        $('#arrow-up').fadeOut();
    }

});

$('#arrow-up').on('click',function(){

    $('html , body').animate ({

        scrollTop:0   

    } , 0);
});


