///Conclave.auto();
$(document).ready(function(e) {

	//window['conclave']=Conclave;
	//Conclave.init();

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
    $('.sliderReviews').owlCarousel({
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
        $(this).parents('.sectionEvents').find('.sliderReviews').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.sliderReviews').find('.NextSlide').trigger("click");
    });
    $('.sliderArworks').owlCarousel({
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
        $(this).parents('.sectionEvents').find('.sliderArworks').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.sliderArworks').find('.NextSlide').trigger("click");
    });
    $('.mainBanner').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        nav: true,
        slideBy: 1,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.slideLeftNav').on("click", function() {
        $('.topSliderMain').find('.prevSlide').trigger("click");
    });
    $('.slideRightNav').on("click", function() {
        $('.topSliderMain').find('.NextSlide').trigger("click");
    });
    $('.AbrEventSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 3,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $('.prevBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.AbrEventSlider').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.AbrEventSlider').find('.NextSlide').trigger("click");
    });
    $('.ExhibSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 3,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $('.prevBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.ExhibSlider').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.ExhibSlider').find('.NextSlide').trigger("click");
    });
    $('.sliderArtistsThreeCol').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 3,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $('.prevBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.sliderArtistsThreeCol').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.sliderArtistsThreeCol').find('.NextSlide').trigger("click");
    });
    $('.ReviewThreeCol').owlCarousel({
        loop: true,
        margin: 0,
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
        $(this).parents('.sectionEvents').find('.ReviewThreeCol').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.ReviewThreeCol').find('.NextSlide').trigger("click");
    });
    $('.artWorkThreeSlide').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 3,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $('.prevBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.artWorkThreeSlide').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.artWorkThreeSlide').find('.NextSlide').trigger("click");
    });
    $('.eventNewsSlider').owlCarousel({
        loop: true,
        margin: 0,
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
        $(this).parents('.sectionEvents').find('.eventNewsSlider').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.eventNewsSlider').find('.NextSlide').trigger("click");
    });
    $('.eventMainSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 1,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.prevBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.eventNewsSlider').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.eventNewsSlider').find('.NextSlide').trigger("click");
    });
    $('.apbEventSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 3,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $('.prevBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.apbEventSlider').find('.prevSlide').trigger("click");
    });
    $('.NextBlogSlide').on("click", function() {
        $(this).parents('.sectionEvents').find('.apbEventSlider').find('.NextSlide').trigger("click");
    });
    $('.abrNewsMainSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 1,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.slideLeftNav').on("click", function() {
        $(this).parents('.topSliderMain').find('.newsTopSlideNav').find('.prevSlide').trigger("click");
    });
    $('.slideRightNav').on("click", function() {
        $(this).parents('.topSliderMain').find('.newsTopSlideNav').find('.NextSlide').trigger("click");
    });
	
	
	
	var owl = $('.colorSliderHp');
	
	owl.on('initialized.owl.carousel', function(e) {
		setTimeout(function(){
			//window['conclave']=Conclave;
			//Conclave.init();
		},1000);
		//alert('hi');
		 
	}).owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 1,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.colPrevSlide').on("click", function() {
        $(this).parents('.bgColoredSectionHp').find('.prevSlide').trigger("click");
    });
    $('.colNextSlide').on("click", function() {
        $(this).parents('.bgColoredSectionHp').find('.NextSlide').trigger("click");
    });
	
	
	
	owl.on('onInitialize.owl.carousel', function(event) {
		console.log( event + 'initialized called' );
		alert('a skdf jslkf s');
	});
	
	owl.on('onInitialized.owl.carousel', function(event) {
		console.log( event + 'initialized called' );
		alert('a skdf jslkf s');
	});
	
//	elem.on('initialize.owl.carousel', function(event) {});
//elem.on('initialized.owl.carousel', function(event) {});  
	
	$('.artBigSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        nav: true,
        slideBy: 1,
        navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.artBigPrev').on("click", function() {
        $(this).parents('.artBigSliderCont').find('.prevSlide').trigger("click");
    });
    $('.artBigNext').on("click", function() {
        $(this).parents('.artBigSliderCont').find('.NextSlide').trigger("click");
    });
	
	
	
});