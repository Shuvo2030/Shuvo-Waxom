$(function () {
    //    Veno
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    //   Counter
    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });
    //    Navbar
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 50) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
        if (scrolling > 1000) {
            $('.back-top').fadeIn(500);
        } else {
            $('.back-top').fadeOut(500);
        }
    });

    //    Animation Scroll
    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 500);
                return false;
            }
        }
    });
    //    Back-Top   
    $('.back-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    ////////////////////////////////////    Preloader
    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500);
    })
});
