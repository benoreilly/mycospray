
$(document).ready(function(){
    $('.sidenav').sidenav({
        inDuration: 600,
        outDuration: 600,
        edge: 'left',
    });
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.pushpin').pushpin({
        top: 0,
        offset: 250,
	});
	
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    $('#logo').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    
    // if ($(window).width() < 700){
    //     $('#covid').removeClass( "horizontal");
    // } else {
    //     $('#covid').addClass( "horizontal");
    // }
    
});

// function maskImgLocation() {
//     var covidImg = document.querySelector('#covid');
//     console.log(covidImg);
//     var ww = window.innerWidth;
//     if (ww < 700){
//         covidImg.className( 'card covid-message');
//     }
//     // } else {
//     //     covidImg.classList('card horizontal covid-message');
//     // }
//     maskImgLocation();
// }

