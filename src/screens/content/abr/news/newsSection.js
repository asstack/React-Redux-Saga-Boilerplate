import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNewsSaga } from '../../../../actions';


const $ = window.$;


class NewsSection extends Component {

    componentDidMount() {
        this.props.getNewsSaga();
    }

    componentDidUpdate() {
        $('.sliderNews').trigger('destroy.owl.carousel');
        $('.sliderNews').find('.owl-stage-outer').children().unwrap();
        $('.sliderNews').removeClass("owl-center owl-loaded owl-text-select-on");

        $('.sliderNews').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            nav: true,
            slideBy: 4,
            navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }

    render() {
        const { news } = this.props;
        return (
            <div className="sectionEvents NewsSection">
                <div class="eventHeaderTop borderTopBt">
                    <div class="container ">
                        <div class="row justify-content-center">
                            <div class=" col-md-6">
                                <div class="eventHeader">
                                    <h2 class="eventHeading"><span>News</span></h2>
                                </div>
                            </div>
                            <div class=" col-md-6 text-right">

                                <ul class="tagsEvents">
                                    <li class="active"><a href="#">Last</a></li>
                                    <li><a href="#">Popular</a></li>
                                    <li><a href="#">Old</a></li>
                                    <li><a href="#">alphabetically</a></li>
                                    <li><a href="#">by deletion</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eventsList">
                    <div class="container ">
                        <div class="row justify-content-center">
                            <div class="col-md-3 ">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg1.jpg)` }}></div>
                                <h2>David Drebin Brings Photographic Dreamscapes to Art Boca Raton</h2>
                            </div>
                            <div class="col-md-3  bgRed bgBrownLight">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg2.jpg)` }}></div>
                                <h2>Wilfredo Lam Avant-Garde Master Artist</h2>
                            </div>
                            <div class="col-md-3 ">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg3.jpg)` }}></div>
                                <h2>Art Boca Raton Announces 3rd Edition</h2>
                            </div>
                            <div class="col-md-3  bgGolden bgBrownDark">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg4.jpg)` }}></div>
                                <h2>David Drebin Brings Photographic Dreamscapes to Art Boca Raton</h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-3 bgRed greyLightNew">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg5.jpg)` }}></div>
                                <h2>Art Boca Unites With Boca Museum To Host Third Year Of Vernissage</h2>
                            </div>
                            <div class="col-md-3  ">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg6.jpg)` }}></div>
                                <h2>Art Boca Raton 2018 Collector Forum Schedule</h2>
                            </div>
                            <div class="col-md-3 bgRed BgBrownRed">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg7.jpg)` }}></div>
                                <h2>The Bold Beauty Project at Boca Raton</h2>
                            </div>
                            <div class="col-md-3  ">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg8.jpg)` }}></div>
                                <h2>Glass Stress at the Boca Raton Museum of Art</h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-3 ">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg9.jpg)` }}></div>
                                <h2>Art Boca Raton Selects 2017 Dealer Committee</h2>
                            </div>
                            <div class="col-md-3  bgRed bgGreyLighter">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg10.jpg)` }}></div>
                                <h2>Art Boca Raton Exceeded Expectations</h2>
                            </div>
                            <div class="col-md-3 ">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg11.jpg)` }}></div>
                                <h2>Opening Vernissage of Art Boca Raton</h2>
                            </div>
                            <div class="col-md-3  bgGolden bgBrownRed">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg2.jpg)` }}></div>
                                <h2>Diego Rivera, Frida Kahlo, and Walter Pach: Latin American Art in the U.S. in the 1920s and 1930s</h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-3 bgRed BgGoldenDark">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg13.jpg)` }}></div>
                                <h2>Picture Perfect Partner: Palm Beach’s Photographic Centre</h2>
                            </div>
                            <div class="col-md-3  ">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg14.jpg)` }}></div>
                                <h2>Latin American Art Magazine Spanish version</h2>
                            </div>
                            <div class="col-md-3 bgGolden BgBlackGrey">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg15.jpg)` }}></div>
                                <h2>World-Class Architect Working on ‘Tent Site’ Project</h2>
                            </div>
                            <div class="col-md-3  ">
                                <h3 class="postTags">Design, Insights</h3>
                                <div class="postImage" style={{ backgroundImage: `url(../assets/images/newsListImg16.jpg)` }}></div>
                                <h2>Women Painting WTF Special Exhibition</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eventSeeMore">
                    <div class="container ">
                        <div class="row justify-content-center">
                            <div class=" col-lg-12 seeMoreBtnCont"> <a href="#" class="seemoreBtn">See All</a> </div>
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
