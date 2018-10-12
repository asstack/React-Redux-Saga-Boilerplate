import React, { Component } from 'react';


const $ = window.$;

class BannerSection extends Component {

    componentDidMount() {
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

        $('.slideLeftNav').on("click", function () {
            $('.topSliderMain').find('.prevSlide').trigger("click");
        });
        $('.slideRightNav').on("click", function () {
            $('.topSliderMain').find('.NextSlide').trigger("click");
        });
    }

    render() {
        return (
            <div class="topSliderMain apbeMainBanner newsBanner apbnewsBanner ">
                <ul class="owl-carousel owlReset abrNewsMainSlider">
                    <li>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class=" col-md-12">
                                            <div class="sliderWhiteText">16 Jan 2018</div>
                                            <div class="blackTextSlide">ArtPalmBeach
Announces 2019 Pavilions</div>
                                            <div class="greyTextSlide">The extraordinary artistic legacy of Jose Bedia
                                goes beyond the contributions of the Cuban and
Latin American modernist vanguard…</div>
                                            <div class="readMoreBtnCont"> <a href="#" class="readMoreNewBtn"><span class="btnCircleRead"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span class="readText">Read More</span></a> </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-7"> <img src="../assets/images/beachNewsBanner1.jpg" alt="" /> </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class=" col-md-12">
                                            <div class="sliderWhiteText">16 Jan 2018</div>
                                            <div class="blackTextSlide">ArtPalmBeach
Announces 2019 Pavilions</div>
                                            <div class="greyTextSlide">The extraordinary artistic legacy of Jose Bedia
                                goes beyond the contributions of the Cuban and
Latin American modernist vanguard…</div>
                                            <div class="readMoreBtnCont"> <a href="#" class="readMoreNewBtn"><span class="btnCircleRead"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span class="readText">Read More</span></a> </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-7"> <img src="../assets/images/beachNewsBanner1.jpg" alt="" /> </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="container">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="newsTopSlideNav">
                                <a href="javascript:void(0);" class="slideLeftNav"><i class="fa fa-angle-left" aria-hidden="true"></i></a> <a href="javascript:void(0);" class="slideRightNav"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}


export default BannerSection;
