import React, { Component } from 'react';


class LocationSection extends Component {

    render() {
        return (
            <div className="sectionEvents contactSection">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-lg-12">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">ABR<span>Location</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eventsList">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="col-md-3 colBorder">
                                <div className="idNumber">Days & Times</div>
                                <h2>Vernissage</h2>
                                <div className="contSpacer"><span className="borderBtContDark"></span></div>
                                <p><span className="greyfootText">Thursday</span><br />
                                    March 14 – 6 PM – 8 PM</p>
                                <div className="contSpacer"><span className="borderBtContGrey"></span></div>
                                <p>Collectors Preview<br />
                                    March 14  8 -10 PM, By Invitation Only</p>
                                <div className="contSpacer"><span className="borderBtContGrey"></span></div>
                                <p>Vernissage admission by separate ticket</p>
                                <p className="colorRed">$50 per person</p>
                                <div className="contactBuy"><a href="#" className="buyTickets">Buy Tickets</a></div>
                            </div>
                            <div className=" col-md-6 colBorder">
                                <div className="mapSection"> <img src="../../assets/images/mapImg.png" alt="map" /></div>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="idNumber">Location</div>
                                <h2>Boca Raton</h2>
                                <div className="contSpacer"><span className="borderBtContDark"></span></div>
                                <p>3450 NW 8th Avenue<br />
                                    FAU Reseach Park<br />
                                    Boca Raton, FL 33431<br />
                                    Directions:  Exit I-95 on Spanish River Blvd. East, <br />
                                    right turn on  FAU Blvd. </p>
                                <div className="contSpacer"><span className="borderBtContGrey"></span></div>
                                <p>At Research Park on the grounds of Florida Atlantic
                      University. Complimentary parking.</p>
                                <div className="contactBuy"><a href="#" className="buyTickets">Get Directions</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default LocationSection;
