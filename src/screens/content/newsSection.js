import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNewsSaga } from '../../actions';


class NewsSection extends Component {

    componentDidMount() {
        this.props.getNewsSaga();
    }

    render() {
        const { news } = this.props;
        return (
            <div className="sectionEvents NewsSection">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-6">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">ABR<span>News</span></h2>
                                </div>
                            </div>
                            <div className=" col-md-6 text-right">
                                <div className="slideBlogNavRight "><a className="BlogSlideNav prevBlogSlide" href="javascript:void(0);"></a><span className="navDivider"></span><a className="BlogSlideNav NextBlogSlide" href="javascript:void(0);"></a></div>
                                <ul className="tagsEvents">
                                    <li className="active"><a href="#!">Last</a></li>
                                    <li><a href="#!">Popular</a></li>
                                    <li><a href="#!">Old</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eventsList">
                    <div className="container ">
                        <div className="row justify-content-center">
                            {
                                news.map(({ title, photos }, index) => (
                                    <div className={`col-md-3 ${index === 1 ? 'bgRed' : index === 3 && 'bgGolden'}`}key={index}>
                                        <h3 className="postTags">Design, Insights</h3>
                                        <div className="postImage" style={{ backgroundImage: `url(http://142.93.202.48${photos.url})` }}></div>
                                        <h2>{title}</h2>
                                    </div>
                                ))
                            }
                            {/* <div className="col-md-3 ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/news1.png)" }}></div>
                                <h2>David Drebin Brings Photographic Dreamscapes to Art Boca Raton</h2>
                            </div>
                            <div className="col-md-3  bgRed">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/news2.png)" }}></div>
                                <h2>Art Boca Raton 2018 Collector Forum Schedule</h2>
                            </div>
                            <div className="col-md-3 ">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/news3.png)" }}></div>
                                <h2>Glass Stress at the Boca Raton Museum of Art</h2>
                            </div>
                            <div className="col-md-3  bgGolden">
                                <h3 className="postTags">Design, Insights</h3>
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/news4.png)" }}></div>
                                <h2>Opening Vernissage of Art Boca Raton</h2>
                            </div> */}
                            
                                    {/* <ul className="owl-carousel sliderNews" style={{listStyle: "none"}}>
                                        <li>
                                            <div className="col-md-3 ">
                                                <h3 className="postTags">Design, Insights</h3>
                                                <div className="postImage" style={{ backgroundImage:"url(../../assets/images/news1.png)" }}></div>
                                                <h2>David Drebin Brings Photographic Dreamscapes to Art Boca Raton</h2>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3  bgRed">
                                                <h3 className="postTags">Design, Insights</h3>
                                                <div className="postImage" style={{ backgroundImage:"url(../../assets/images/news2.png)" }}></div>
                                                <h2>Art Boca Raton 2018 Collector Forum Schedule</h2>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3 ">
                                                <h3 className="postTags">Design, Insights</h3>
                                                <div className="postImage" style={{ backgroundImage:"url(../../assets/images/news3.png)" }}></div>
                                                <h2>Glass Stress at the Boca Raton Museum of Art</h2>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3  bgGolden">
                                                <h3 className="postTags">Design, Insights</h3>
                                                <div className="postImage" style={{ backgroundImage:"url(../../assets/images/news4.png)" }}></div>
                                                <h2>Opening Vernissage of Art Boca Raton</h2>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3 ">
                                                <h3 className="postTags">Design, Insights</h3>
                                                <div className="postImage" style={{ backgroundImage:"url(../../assets/images/news1.png)" }}></div>
                                                <h2>David Drebin Brings Photographic Dreamscapes to Art Boca Raton</h2>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3  bgRed">
                                                <h3 className="postTags">Design, Insights</h3>
                                                <div className="postImage" style={{ backgroundImage:"url(../../assets/images/news2.png)" }}></div>
                                                <h2>Art Boca Raton 2018 Collector Forum Schedule</h2>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3 ">
                                                <h3 className="postTags">Design, Insights</h3>
                                                <div className="postImage" style={{ backgroundImage:"url(../../assets/images/news3.png)" }}></div>
                                                <h2>Glass Stress at the Boca Raton Museum of Art</h2>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-md-3  bgGolden">
                                                <h3 className="postTags">Design, Insights</h3>
                                                <div className="postImage" style={{ backgroundImage:"url(../../assets/images/news4.png)" }}></div>
                                                <h2>Opening Vernissage of Art Boca Raton</h2>
                                            </div>
                                        </li>
                                    </ul> */}
                                
                        </div>
                    </div>
                </div>
                <div className="eventSeeMore">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-lg-12 seeMoreBtnCont"> <a href="#!" className="seemoreBtn">See All</a> </div>
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

// export default NewsSection;
