import React, { Component } from 'react';

class MainGallery extends Component {

    render() {
        return (
            <div className="topSliderMain">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" col-md-5">
                            <div className="sliderWhiteText">by Martin C. Herbst</div>
                            <div className="blackTextSlide">Spheres Installation</div>
                            <div className="greyTextSlide">Anthony Brunelli Fin</div>
                            <div className="readMoreBtnCont"> <a href="#!" className="readMoreNewBtn"><span className="btnCircleRead"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> <span className="readText">Read More</span></a> </div>
                            <div className="sliderBottomText">
                                <div className="row">
                                    <div className=" col-md-6">
                                        <div className="ticcetTxt"> <span className="topDarkText">10th March <br />
                                            - 15th September </span> </div>
                                    </div>
                                    <div className=" col-md-6">
                                        <div className="ticcetTxt">
                                            <div className="topHdrText"><span className="topGreyTxt">Place: </span></div>
                                            <span className="topDarkText">Art Boca Raton</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7"> <img src="../../assets/images/slideRightImg.jpg" alt="" /> </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default MainGallery;
