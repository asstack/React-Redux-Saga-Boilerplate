import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNewsSaga } from '../../../actions';
import { TAG_APB } from '../../../appConstants';


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
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-6">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">APB<span>News</span></h2>
                                </div>
                            </div>
                            <div className=" col-md-6 text-right">
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
                            <div className="col-md-12">
                                <ul className="owl-carousel owlReset sliderNews">
                                    {
                                        news.map(({ title, photos, categories }, index) => {
                                            let categories_array = [];
                                            categories.forEach(element => {
                                                categories_array.push(element.title);
                                            });
                                            return (
                                                <div key={index} className={`col-md-3 ${index === 1 ? 'bgRed bgGoldenDark' : index === 3 && 'bgGolden bgGreyDark'}`} key={index}>
                                                    <h3 className="postTags">{categories_array.join(', ')}</h3>
                                                    <div className="postImage" style={{ backgroundImage: `url(${photos && `http://142.93.202.48${photos.url})`}` }}></div>
                                                    <h2>{title}</h2>
                                                </div>
                                            )
                                        })
                                    }
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
            </div >
        );
    }
}

const mapStateToProps = state => ({
    news: state.newsReducer.news
});

const mapDispatchToProps = dispatch => ({
    getNewsSaga: () =>
        dispatch(getNewsSaga({ tags: TAG_APB }))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsSection);
