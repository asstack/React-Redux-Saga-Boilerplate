import React, { Component } from 'react';


class LocationSection extends Component {

    render() {
        return (
            <div className="sectionEvents contactSection apbContactSec">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-lg-12">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">APB<span>Location</span></h2>
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
                                <h2>Collectors’ First View</h2>
                                <div className="contSpacer"><span className="borderBtContDark"></span></div>
                                <p><span className="greyfootText">Wednesday</span><br />
                                    January 16 – 6 PM – 10 PM</p>
                                <div className="contSpacer"><span className="borderBtContGrey"></span></div>
                                <p>Collectors Preview<br />
                                    Wednesday January 16 – 6 PM – 10 PM</p>
                                <div className="contSpacer"><span className="borderBtContGrey"></span></div>
                                <p>Vernissage admission by separate ticket</p>
                                <div className="contactBuy"><a href="#" className="buyTickets">Buy Tickets</a></div>
                            </div>
                            <div className=" col-md-6 colBorder">
                                <div className="mapSection"> <img src="../assets/images/mapImg2.png" alt="map" /></div>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="idNumber">Location</div>
                                <h2>Palm Beach</h2>
                                <div className="contSpacer"><span className="borderBtContDark"></span></div>
                                <p>Palm Beach County Convention Center<br />
                                    650 Okeechobee Boulevard<br />
                                    West Palm Beach, Florida 33401 </p>
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
