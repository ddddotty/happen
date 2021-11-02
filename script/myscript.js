$(function () {

    //手機版
    if ($(window).width() < 769) {
        $(".link,figure").remove();
    }

    if ($(window).width() < 767) {
        $(".upleft").remove();
    }

    //置頂按鈕
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    //淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { //卷軸滾動超過50px的位置才會開始執行以下動作
            $("#gotop").stop().fadeTo("fast", 0.7); //.stop是指意思有就好，不會完全執行完，0.7是半透明
        } else {
            $("#gotop").stop().fadeOut("fast");
        }
    });

    //滾動滑入效果
    $(".row").smoove({
        offset: '15%',
    });

    //Menu套件
    $('.trigger').on('click', function () {
        $(this).toggleClass('on');
        $('.menu').fadeToggle(200);
    });

});