import React, { Component } from 'react';


class ReviewsSection extends Component {

    render() {
        return (
            <div className="sectionEvents reviewsSection">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-2">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">APB<span>Reviews</span></h2>
                                </div>
                            </div>
                            <div className="col-10 col-lg-10 text-right">
                                <div className="slideBlogNavRight "><a className="BlogSlideNav prevBlogSlide" href="javascript:void(0);"></a><span className="navDivider"></span><a className="BlogSlideNav NextBlogSlide" href="javascript:void(0);"></a> </div>
                                <ul className="tagsEvents apbTagEvents">
                                    <li className="active"><a href="#">Last</a></li>
                                    <li><a href="#">Popular</a></li>
                                    <li><a href="#">Old</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eventsList">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <ul className="owl-carousel owlReset ReviewThreeCol">
                                <li><div className="col-md-3 colBorder">
                                    <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbReviewImg1.png)` }}></div>
                                    <h2>Going Wireless With Your Headphones</h2>
                                    <div className="idNumber">New season of Red Rose art shows begin Sept. 15-16 in West Sedona</div>
                                </div></li>
                                <li><div className="col-md-3 colBorder">
                                    <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbReviewImg2.png)` }}></div>
                                    <h2>Lasik Surgery Frequently Asked Questions</h2>
                                    <div className="idNumber">6th annual Frida Fest brings local, international art and poetry to McAllen</div>
                                </div></li>
                                <li><div className="col-md-3 colBorder">
                                    <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbReviewImg3.png)` }}></div>
                                    <h2>Cutting Prescription Drug Costs</h2>
                                    <div className="idNumber">Located underneath a 1930's shopping center and the adjacent Lasipalatsi Square in Helsinki, the Amos Rex Museum provides about 23,500</div>
                                </div></li>
                                <li><div className="col-md-3 colBorder">
                                    <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbReviewImg4.png)` }}></div>
                                    <h2>The Different Types Of Laser Eye Surgery</h2>
                                    <div className="idNumber">Incoming first-year student Julian Wessell-Meadows shows a painting to Camille Andersen during a button-making session at the Arts@Tufts</div>
                                </div></li>
                                <li><div className="col-md-3 colBorder">
                                    <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbReviewImg1.png)` }}></div>
                                    <h2>Going Wireless With Your Headphones</h2>
                                    <div className="idNumber">New season of Red Rose art shows begin Sept. 15-16 in West Sedona</div>
                                </div></li>
                                <li><div className="col-md-3 colBorder">
                                    <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbReviewImg2.png)` }}></div>
                                    <h2>Lasik Surgery Frequently Asked Questions</h2>
                                    <div className="idNumber">6th annual Frida Fest brings local, international art and poetry to McAllen</div>
                                </div></li>
                                <li><div className="col-md-3 colBorder">
                                    <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbReviewImg3.png)` }}></div>
                                    <h2>Cutting Prescription Drug Costs</h2>
                                    <div className="idNumber">Located underneath a 1930's shopping center and the adjacent Lasipalatsi Square in Helsinki, the Amos Rex Museum provides about 23,500</div>
                                </div></li>
                                <li><div className="col-md-3 colBorder">
                                    <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbReviewImg4.png)` }}></div>
                                    <h2>The Different Types Of Laser Eye Surgery</h2>
                                    <div className="idNumber">Incoming first-year student Julian Wessell-Meadows shows a painting to Camille Andersen during a button-making session at the Arts@Tufts</div>
                                </div></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="eventSeeMore">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-lg-12 seeMoreBtnCont"> <a href="#" className="seemoreBtn">See All</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ReviewsSection;
