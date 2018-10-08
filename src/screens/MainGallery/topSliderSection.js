import React, { Component } from 'react';

class TopSliderSection extends Component {

    render() {
        return (
            <div className="sliderTopSec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" col-md-2"> <a href="#!" className="slideLeftNav"><i className="fa fa-angle-left" aria-hidden="true"></i></a> <a href="#!" className="slideRightNav"><i className="fa fa-angle-right" aria-hidden="true"></i></a> </div>
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
                                <span className="topDarkText"> 3450 NW 8th Venue, AU Research Park , Boca, Ratin, FL 33431</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default TopSliderSection;
