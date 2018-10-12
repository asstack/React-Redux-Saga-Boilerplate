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
            <div className="topSliderMain apbeMainBanner">
                <ul className="owl-carousel owlReset abrNewsMainSlider">
                    <li>
                        <div className="container">
                            <div className="row justify-content-center">

                                <div className="col-md-5">
                                    <div className="row">
                                        <div className=" col-md-8">
                                            <div className="ticcetTxt">
                                                <div className="topHdrText"><span className="topGreyTxt">Ticcet </span></div>
                                                <span>$15 online </span> <span className="topDarkText">- $20 at door</span> </div>
                                        </div>
                                        <div className=" col-md-4">
                                            <div className="ticcetTxt">
                                                <div className="topHdrText"><span className="topGreyTxt">Time: </span></div>
                                                <span className="topDarkText">17 Mar  3 - 4 pm</span> </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-md-12">
                                            <div className="sliderWhiteText">Abr Lecture</div>
                                            <div className="blackTextSlide">Presentation & Book Signing with Photographer David Drebin</div>
                                            <div className="readMoreBtnCont"> <a href="#" className="readMoreNewBtn"><span className="btnCircleRead"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span className="readText">Read More</span></a> </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-7"> <img src="../assets/images/apbeSlideImg.jpg" alt="" /></div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <div className="row justify-content-center">

                                <div className="col-md-5">
                                    <div className="row">
                                        <div className=" col-md-8">
                                            <div className="ticcetTxt">
                                                <div className="topHdrText"><span className="topGreyTxt">Ticcet </span></div>
                                                <span>$15 online </span> <span className="topDarkText">- $20 at door</span> </div>
                                        </div>
                                        <div className=" col-md-4">
                                            <div className="ticcetTxt">
                                                <div className="topHdrText"><span className="topGreyTxt">Time: </span></div>
                                                <span className="topDarkText">17 Mar  3 - 4 pm</span> </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-md-12">
                                            <div className="sliderWhiteText">Abr Lecture</div>
                                            <div className="blackTextSlide">Presentation & Book Signing with Photographer David Drebin</div>
                                            <div className="readMoreBtnCont"> <a href="#" className="readMoreNewBtn"><span className="btnCircleRead"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span className="readText">Read More</span></a> </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-7"> <img src="../assets/images/apbeSlideImg.jpg" alt="" /></div>

                            </div>
                        </div>
                    </li>

                </ul>
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="newsTopSlideNav">
                                <a href="javascript:void(0);" className="slideLeftNav"><i className="fa fa-angle-left" aria-hidden="true"></i></a> <a href="javascript:void(0);" className="slideRightNav"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}


export default BannerSection;
