// JavaScript Document
window.onunload = function(){};

//fix
$(function() {
  var $win = $(window),
      $header = $('header'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});
	
//glnavi
(function($) {
    $(function() {
        var $header = $('#header');
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
    });
})(jQuery);


//pagetop
$(function(){
    $('.pagetop').hide();
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.pagetop').fadeIn();
        }
        else {
            $('.pagetop').fadeOut();
        }
    });
 
    $('.pagetop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
 
});


// tellink
$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
        $('.tel-link').each(function(){
            var str = $(this).text();
            $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }
});

//fadein
    $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});

