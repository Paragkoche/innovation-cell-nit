$(document).ready(function () {
    $('.home-slideshow').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: 'ondemand'
    });
    $(window).resize(function () {
        var bodyheight = $(this).height();
        $(".sliderFull .bg-size").height(bodyheight);
    }).resize();
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up").parent().addClass('');
    jQuery('.bg-img').each(function () {

        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();

        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat'
        });

        el.hide();
    });

});