/**
 * Menu responsivo
 * @author Vanessa
 */

$(document).ready(function(){
    $('.Hamburguer').click(function(){
        $('.Menu ul').slideToggle()
    })
    $(window).resize(function(){
        if($(window).widht() >= 480){
            $('.Menu ul').removeAttr('style')
        }

    })

})


