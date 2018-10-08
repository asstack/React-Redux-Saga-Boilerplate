$(document).ready(function(e) {
    $('.sliderNews').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        nav: true,
        slideBy: 4,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.prevBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.sliderNews').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.sliderNews').find('.NextSlide').trigger("click");
    });
    $('.sliderArtists').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        nav: true,
        slideBy: 4,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.prevBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.sliderArtists').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.sliderArtists').find('.NextSlide').trigger("click");
    });
});