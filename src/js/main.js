import $ from "jquery";
import "slick-carousel";

//

$(function () {
    $('.header__burger').on('click', function (even) {
        $('.header__burger').toggleClass('active');
    });
    $('.header__burger').on('click', function (even) {
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(".service__inner").slick({
        dots: true,
        slidesToShow:3,
        speed: 1000,
        centerMode:true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        waitForAnimate: false,
        responsive: [{
            breakpoint: 550,
            settings: {
                slidesToShow:1,
            }
        }],
        responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow:1,
            }
        }]
    });
    $(".slider-box__box").slick({
        dots: true,
        speed: 1000,
        slidesToShow: 3,
        centerMode: true,
        waitForAnimate: false,
        responsive: [{
            breakpoint: 550,
            settings: {
                slidesToShow:2,
                centerMode: false
            }
        }]
    });
});

