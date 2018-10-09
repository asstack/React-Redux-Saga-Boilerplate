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
                                    <h2 className="eventHeading">ABR<span>Reviews</span></h2>
                                </div>
                            </div>
                            <div className="col-10 col-lg-10 text-right">
                                <div className="slideBlogNavRight "><a className="BlogSlideNav prevBlogSlide" href="javascript:void(0);"></a><span className="navDivider"></span><a className="BlogSlideNav NextBlogSlide" href="javascript:void(0);"></a></div>
                                <ul className="tagsEvents">
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
                            <div className="col-md-12">
                                <ul className="owl-carousel owlReset  sliderReviews">
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: "url(../assets/images/reviewImg1.png)" }}></div>
                                        <h2>Sculptor Christian Lapie: Beauty from Charred Ashes</h2>
                                        <div className="idNumber">Kanye West Wants to Teach Art Courses in Chicago</div>
                                    </div>
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: "url(../assets/images/reviewImg2.png)" }}></div>
                                        <h2>Artist Humberto Castro: Master of Transformation</h2>
                                        <div className="idNumber">Two New Art Festivals Boost the American Midwest's Culture Quotient</div>
                                    </div>
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: "url(../assets/images/reviewImg3.png)" }}></div>
                                        <h2>Zammy Migdal: Creator of Wall Sculpture</h2>
                                        <div className="idNumber">An eye for art: The new and the notable at fall's premier arts event</div>
                                    </div>
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: "url(../assets/images/reviewImg4.png)" }}></div>
                                        <h2>Artist Raul Conti: Shares Creative Passion</h2>
                                        <div className="idNumber">Its political views notwithstanding, the Berlin-based website New Models is something like a Drudge Report for the art, tech, and culture sector.</div>
                                    </div>
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: "url(../assets/images/reviewImg1.png)" }}></div>
                                        <h2>Sculptor Christian Lapie: Beauty from Charred Ashes</h2>
                                        <div className="idNumber">Kanye West Wants to Teach Art Courses in Chicago</div>
                                    </div>
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: "url(../assets/images/reviewImg2.png)" }}></div>
                                        <h2>Artist Humberto Castro: Master of Transformation</h2>
                                        <div className="idNumber">Two New Art Festivals Boost the American Midwest's Culture Quotient</div>
                                    </div>
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: "url(../assets/images/reviewImg3.png)" }}></div>
                                        <h2>Zammy Migdal: Creator of Wall Sculpture</h2>
                                        <div className="idNumber">An eye for art: The new and the notable at fall's premier arts event</div>
                                    </div>
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: "url(../assets/images/reviewImg4.png)" }}></div>
                                        <h2>Artist Raul Conti: Shares Creative Passion</h2>
                                        <div className="idNumber">Its political views notwithstanding, the Berlin-based website New Models is something like a Drudge Report for the art, tech, and culture sector.</div>
                                    </div>
                                </ul>
                            </div>
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
