import React, { Component } from 'react';


const $ = window.$;

class EventDetailsSection extends Component {

    render() {
        return (
            <div className="topSliderMain apbeMainBanner eventDetailCont">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="eventLeftCont">
                                <a className="arrowLeft" href="#">
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                </a>
                                <div className="row">
                                    <div className=" col-md-12">
                                        <div className="sliderWhiteText">Design, Insights</div>
                                        <div className="blackTextSlide">David Drebin <br />
                                            International Photographer: Gallery Talk & Book Signing
                                            </div>
                                        <div className="borderSepratorBlack"></div>
                                        <div className="eventContentText">
                                            <p>
                                                <span className="bigTextStart">D</span>avid Drebin is an internationally renowned photographer and the multi-disciplinary artist will present a gallery talk and book signing “Love & Lights” Saturday, March 17, at 3 pm at
                                                 Art Boca Raton, sponsored by Oliver Cole Gallery of Miami.  He will discuss the inspiration for his subjects, the process he uses to create art, technical expertise with cameras and lighting, as well as his use of multi-disciplines to convey his artistry.
                                            </p>
                                            <p>David is celebrated for creating spectacular photos of dream-like city/landscapes, voyeuristic scenes with femme fatales, and dazzling subjects of celebrities that tell a tale.  His images evoke emotions, psychological perspectives, and insightful reflections into the viewer’s own imagination and experiences.</p>
                                            <p>David also works in other mediums, such as photo sculptures, neon installations, lightboxes, and etchings on crystal Starfire glass.</p>
                                            <p>He has several published books, including:  “Love & Lights,” “Dreamscapes,” and “Chasing Paradise.”</p>
                                            <p>David also works in other mediums, such as photo sculptures, neon installations, lightboxes, and etchings on crystal Starfire glass.</p>
                                            <p>All of David’s works are produced in limited editions.  He is available for private commissions for lovers, socialites, business moguls, icons, and those chasing immortality where the art lives on forever.</p>
                                            <p>David is currently exhibiting at Art Boca Raton, March 14-18, 2018, where some of iconic work can be seen, such as “Jerusalem” and “Central Park,” along with his newest Miami piece, “Peeping.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="eventRightImg">
                                <div className="rightShareIcons"> <span>Share:</span>
                                    <ul className="shareIconImgRt">
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                                <div className="eventImgs"> <img src="../../assets/images/apbeSlideImg.jpg" alt="" /></div>
                                <div className="eventImgs"> <img src="../../assets/images/apbeSlideImg2.jpg" alt="" /></div>
                                <div className="eventImgs"> <img src="../../assets/images/apbeSlideImg3.jpg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventDetailsSection;
