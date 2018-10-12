import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNewsSaga } from '../../../../actions';


const $ = window.$;


class NewsSection extends Component {

    componentDidMount() {
        this.props.getNewsSaga();
    }

    render() {
        const { news } = this.props;
        return (
            <div className="sectionEvents NewsSection apbRedNav">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-6">
                                <div className="eventHeader">
                                    <h2 className="eventHeading"><span>News</span></h2>
                                </div>
                            </div>
                            <div className=" col-md-6 text-right">
                                <ul className="tagsEvents">
                                    <li className="active"><a href="#">Last</a></li>
                                    <li><a href="#">Popular</a></li>
                                    <li><a href="#">Old</a></li>
                                    <li><a href="#">alphabetically</a></li>
                                    <li><a href="#">by deletion</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eventsList">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="col-md-3 ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog1.jpg)` }}></div>
                                <h2>Norman Foster’s Norton Museum of Art Expansion Will Be a “Museum in a Garden”</h2>
                            </div>
                            <div className="col-md-3  bgRed bgBrownLight">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog2.jpg)` }}></div>
                                <h2>ArtPalmBeach 2018 innovative new contemporary art fair model receives rave</h2>
                            </div>
                            <div className="col-md-3 ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog3.jpg)` }}></div>
                                <h2>Boynton Beach Art in Public Places, $100,000 sculpture RFQ, Aug. 1st deadline</h2>
                            </div>
                            <div className="col-md-3  bgGolden bgBrownDark">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog4.jpg)` }}></div>
                                <h2>Raise the Caliber – Exhibition by DetroitWick Weighs in on Gun Violence</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3 bgRed greyLightNew">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog5.jpg)` }}></div>
                                <h2>Eclectic European Artworks Brought to ArtPalmBeach by London’s Ransom Art Gallery</h2>
                            </div>
                            <div className="col-md-3  ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog6.jpg)` }}></div>
                                <h2>Bekindr: The Transformative Power of Kindness</h2>
                            </div>
                            <div className="col-md-3 bgRed BgBrownRed">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog7.jpg)` }}></div>
                                <h2>Shawn Kolodny Brings Fake Fulfillment Center to Art Palm Beach 2018</h2>
                            </div>
                            <div className="col-md-3  ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog8.jpg)` }}></div>
                                <h2>ArtPalmBeach launches Innovative Fair Model</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3 ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog9.jpg)` }}></div>
                                <h2>David Drebin Brings Photographic Dreamscapes to ArtPalmBeach</h2>
                            </div>
                            <div className="col-md-3  bgRed bgGreyLighter">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog10.jpg)` }}></div>
                                <h2>BeKindr at ArtPalmBeach</h2>
                            </div>
                            <div className="col-md-3 ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog11.jpg)` }}></div>
                                <h2>ArtSynergy 5th Annual ArtPalmBeach Week Event Calendar</h2>
                            </div>
                            <div className="col-md-3  bgGolden bgBrownRed">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog12.jpg)` }}></div>
                                <h2>2018 Visionary Award Winner: Jose Bedia</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3 bgRed BgGoldenDark">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog13.jpg)` }}></div>
                                <h2>Stefano Ogliari Badessi Brings His Otherworldly Installations to ArtPalmBeach Showcased </h2>
                            </div>
                            <div className="col-md-3  ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog14.jpg)` }}></div>
                                <h2>Art Mazel Chronicles Florida’s Holocaust Artists curated by Robert Zuckerman</h2>
                            </div>
                            <div className="col-md-3 bgGolden BgBlackGrey">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog15.jpg)` }}></div>
                                <h2>The Photo Realistic Renderings of Arinze Stanley and Ayo Filade at ArtPalmBeach</h2>
                            </div>
                            <div className="col-md-3  ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: `url(../assets/images/apbnewsBlog16.jpg)` }}></div>
                                <h2>A Conversation with Jose Bedia Regarding his Works, his Travels and Collecting</h2>
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

const mapStateToProps = state => ({
    news: state.newsReducer.news
});

const mapDispatchToProps = dispatch => ({
    getNewsSaga: () =>
        dispatch(getNewsSaga())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsSection);
