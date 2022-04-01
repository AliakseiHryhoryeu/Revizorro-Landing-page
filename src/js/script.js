$(document).ready(function () {
    $('.reviews__slider').slick({
        slidesToShow: 1,
        initialSlide: 4,
        autoplay: true,
        autoplaySpeed: 10000,
        waitForAnimate: false,
        centerMode: true,

    });

    $('.header__burger').click(function (event) {
        $('.header__burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});