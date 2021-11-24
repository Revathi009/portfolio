(function($){

    var typed = new Typed('span.txt-rotate', {
        strings: ["I'm a Web Developer", "I'm a Business Analyst", "I'm a Microsoft certified Expert"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 2,
        autoWidth: false,
        center: false,
        mergeFit: true,
        responsive : {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            }
        }
    })


})(jQuery);

$(document).ready(function(){
    $('.projects-wrapper').isotope({
        filter: '*',
        layoutMode: 'masonry'
    });

    $('.list-filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        });
        return false;
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });
});

$('#tags a').tagcloud({
    size: {
        start: 12,
        end: 55,
        unit: 'pt'
    },
    color: {
        start: '#aaa',
        end: '#080'
    }
})
   
