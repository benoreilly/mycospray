// function browserCheck() {
//     var isSafari = navigator.userAgent.toLowerCase().includes('safari');
//     var isChrome = navigator.userAgent.toLowerCase().includes('chrome');
//     if (isSafari && !isChrome) {
//         var imgArr = Array.from(document.querySelectorAll('.project-row-screens img'));
//         imgArr.forEach(item => {
//             var imgName = item.src;
//             var extReplace = imgName.replace(".webp", ".jpg");
//             item.src = extReplace;
//         });
//         $('#headshotImg').css({"background-image": "url('/images/headshot.jpg')"});
//      }
// }
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
    
    // $('.method-card').hover(
    //     function(){
    //         $(this).addClass("card-panel transparent")
    //     }, function() {
    //         $( this ).removeClass( "card-panel" );
    //     }
    // );
	
});


