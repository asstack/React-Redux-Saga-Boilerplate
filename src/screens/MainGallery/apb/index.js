import React, { Component } from 'react';


const $ = window.$;

class MainGallery extends Component {

    componentDidMount() {
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
        $('.slideLeftNav').on("click", function () {
            $('.topSliderMain').find('.prevSlide').trigger("click");
        });
        $('.slideRightNav').on("click", function () {
            $('.topSliderMain').find('.NextSlide').trigger("click");
        });
    }

    renderSliderTop = () => (
        <div key={1} className="sliderTopSec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className=" col-md-2"> <a href="#" className="slideLeftNav"><i className="fa fa-angle-left" aria-hidden="true"></i></a> <a href="#" className="slideRightNav"><i className="fa fa-angle-right" aria-hidden="true"></i></a> </div>
                    <div className=" col-md-3">
                        <div className="ticcetTxt">
                            <div className="topHdrText"><span className="topGreyTxt">Ticcet </span></div>
                            <span>$15 online </span> <span className="topDarkText">- $20 at door</span> </div>
                    </div>
                    <div className=" col-md-3">
                        <div className="ticcetTxt">
                            <div className="topHdrText"><span className="topGreyTxt">Time work </span></div>
                            <span className="topDarkText">8 AM - 12 PM</span> </div>
                    </div>
                    <div className=" col-md-4">
                        <div className="ticcetTxt">
                            <div className="topHdrText"><span className="topGreyTxt">Adress: </span></div>
                            <span className="topDarkText">Palm Beach County Convention Center, 650 Okeechobee Boulevard</span> </div>
                    </div>
                </div>
            </div>
        </div>
    )

    renderTopSliderMain = () => (
        <div key={2} className="topSliderMain">
            <ul className="owl-carousel mainBanner">
                <li>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className=" col-md-5">
                                <div className="sliderWhiteText">by Sara Floyd</div>
                                <div className="blackTextSlide">Pictures
              In The Sky</div>
                                <div className="greyTextSlide">Anti Aging Skin Care The Basics</div>
                                <div className="readMoreBtnCont"> <a href="#" className="readMoreNewBtn"><span className="btnCircleRead"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span className="readText">Read More</span></a> </div>
                                <div className="sliderBottomText">
                                    <div className="row">
                                        <div className=" col-md-6">
                                            <div className="ticcetTxt"> <span className="topDarkText">30th March <br />
                                                - 30th September </span> </div>
                                        </div>
                                        <div className=" col-md-6">
                                            <div className="ticcetTxt">
                                                <div className="topHdrText"><span className="topGreyTxt">Place: </span></div>
                                                <span className="topDarkText">Art Palm Beach</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7"> <img src="../assets/images/beachBanner.jpg" alt="" /> </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className=" col-md-5">
                                <div className="sliderWhiteText">by Sara Floyd</div>
                                <div className="blackTextSlide">Pictures
              In The Sky</div>
                                <div className="greyTextSlide">Anti Aging Skin Care The Basics</div>
                                <div className="readMoreBtnCont"> <a href="#" className="readMoreNewBtn"><span className="btnCircleRead"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span className="readText">Read More</span></a> </div>
                                <div className="sliderBottomText">
                                    <div className="row">
                                        <div className=" col-md-6">
                                            <div className="ticcetTxt"> <span className="topDarkText">30th March <br />
                                                - 30th September </span> </div>
                                        </div>
                                        <div className=" col-md-6">
                                            <div className="ticcetTxt">
                                                <div className="topHdrText"><span className="topGreyTxt">Place: </span></div>
                                                <span className="topDarkText">Art Palm Beach</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7"> <img src="../assets/images/beachBanner.jpg" alt="" /> </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )

    render() {
        return (
            [
                this.renderSliderTop(),
                this.renderTopSliderMain()
            ]
        );
    }
}



export default MainGallery;
