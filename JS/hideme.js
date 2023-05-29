$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 

        $('.hideme-lit').each( function(i){
            
            var bottom_of_object = ($(this).offset().top + $(this).outerHeight()) / 1.1;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 

        $('.hideme-light').each( function(i){
            
            var bottom_of_object = ($(this).offset().top + $(this).outerHeight()) / 1.2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
    
});

// document.addEventListener('ready', function(e) {

//     console.log('ready')
//     window.onscroll(function(e) {

//         for (item of document.querySelector('.hideme')) {

//             var bottom_of_object = item.offsetTop() + item.outerHeight();
//             var bottom_of_window = window.scrollTop() + window.height();

//             if( bottom_of_window > bottom_of_object ){
            
//                 document.getElementById(this).animate({'opacity':'1'},500);  
//             }
//         }
//     });
// });