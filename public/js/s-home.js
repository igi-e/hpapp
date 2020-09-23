// JavaScript Document

//slide
$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
	pager: false,
	controls: false,
	auto: true
  });
});

//ani
$(document).ready(function(){
    var TIMER = 30; //一つのフレームに対しての時間
    var animeTimer; //タイマー設定用

    //アニメーションの関数
    var spriteAnimation = function() {
        var $jsAnime = $('.jQuery').find('.sprite'); //動かしたいセレクタ

        //フレーム毎の関数
        var frame1 = function(){
            setTimeout(function(){
				removeanimeClass();
				$jsAnime.addClass('frame1'); //フレーム1のクラスをつける
				animeTimer = setTimeout(frame2, TIMER);//次のフレームに移る
			},5000);
        }

        var frame2 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame2');
            animeTimer = setTimeout(frame3, TIMER);
        }

        var frame3 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame3');
            animeTimer = setTimeout(frame4, TIMER);
        }

        var frame4 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame4');
            animeTimer = setTimeout(frame5, TIMER);
        }

        var frame5 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame5');
            animeTimer = setTimeout(frame6, TIMER);
        }

        var frame6 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame6'); 
            animeTimer = setTimeout(frame7, TIMER);
        }

        var frame7 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame7');
            animeTimer = setTimeout(frame8, TIMER);
        }

        var frame8 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame8');
            animeTimer = setTimeout(frame9, TIMER);
        }

        var frame9 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame9');
            animeTimer = setTimeout(frame10, TIMER);
        }

        var frame10 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame10');
            animeTimer = setTimeout(frame11, TIMER);
        }

        var frame11 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame11');
            animeTimer = setTimeout(frame12, TIMER);
        }

//re

        var frame12 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame2');
            animeTimer = setTimeout(frame13, TIMER);
        }

        var frame13 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame3');
            animeTimer = setTimeout(frame14, TIMER);
        }

        var frame14 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame4');
            animeTimer = setTimeout(frame15, TIMER);
        }

        var frame15 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame5');
            animeTimer = setTimeout(frame16, TIMER);
        }

        var frame16 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame6'); 
            animeTimer = setTimeout(frame17, TIMER);
        }

        var frame17 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame7');
            animeTimer = setTimeout(frame18, TIMER);
        }

        var frame18 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame8');
            animeTimer = setTimeout(frame19, TIMER);
        }

        var frame19 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame9');
            animeTimer = setTimeout(frame20, TIMER);
        }

        var frame20 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame10');
            animeTimer = setTimeout(frame21, TIMER);
        }

        var frame21 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame12');
            animeTimer = setTimeout(frame22, TIMER);
        }

//end

        var frame22 = function(){
            removeanimeClass();
            $jsAnime.addClass('frame22');
            animeTimer = setTimeout(frame1, TIMER);
        }



        //フレームリセット用の関数
        var removeanimeClass = function(){
            $jsAnime.removeClass('frame1');
            $jsAnime.removeClass('frame2');
            $jsAnime.removeClass('frame3');
            $jsAnime.removeClass('frame4');
            $jsAnime.removeClass('frame5');
            $jsAnime.removeClass('frame6');
            $jsAnime.removeClass('frame7');
            $jsAnime.removeClass('frame8');
            $jsAnime.removeClass('frame9');
            $jsAnime.removeClass('frame10');
            $jsAnime.removeClass('frame11');
            $jsAnime.removeClass('frame12');
            $jsAnime.removeClass('frame22');
        }

        //フレーム１の関数を呼び出す
        frame1();
    }

$(function() {  
		loadImage("img/eye001.png");
		return false;
 
	function loadImage(url) {   
		var img = new Image();
		img.src = url;
		$(img).bind("load", function() {
			
    //アニメーション発火
    spriteAnimation();
	
			});
	}
});
});