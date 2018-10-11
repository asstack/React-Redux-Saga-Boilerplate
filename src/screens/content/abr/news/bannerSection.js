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
    }

    render() {
        return (
            <div className="topSliderMain apbeMainBanner newsBanner">
                <ul className="owl-carousel owlReset abrNewsMainSlider">
                    <li>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <div className="row">
                                        <div className=" col-md-12">
                                            <div className="sliderWhiteText">16 Jan 2018</div>
                                            <div className="blackTextSlide">Latin American Art Magazine “ArtPalmBeach 2018”</div>
                                            <div className="greyTextSlide">The extraordinary artistic legacy of Jose Bedia
                                              goes beyond the contributions of the Cuban and
              Latin American modernist vanguard…</div>
                                            <div className="readMoreBtnCont"> <a href="#" className="readMoreNewBtn"><span className="btnCircleRead"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span className="readText">Read More</span></a> </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-7"> <img src="../assets/images/newsBanner.jpg" alt="" /> </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <div className="row">
                                        <div className=" col-md-12">
                                            <div className="sliderWhiteText">16 Jan 2018</div>
                                            <div className="blackTextSlide">Latin American Art Magazine “ArtPalmBeach 2018”</div>
                                            <div className="greyTextSlide">The extraordinary artistic legacy of Jose Bedia
                                              goes beyond the contributions of the Cuban and
              Latin American modernist vanguard…</div>
                                            <div className="readMoreBtnCont"> <a href="#" className="readMoreNewBtn"><span className="btnCircleRead"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span className="readText">Read More</span></a> </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-7"> <img src="../assets/images/newsBanner.jpg" alt="" /> </div>
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
