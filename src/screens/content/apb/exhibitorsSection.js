import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getExhibitorsSaga } from '../../../actions';
import { TAG_APB } from '../../../appConstants';


const $ = window.$;

class ExhibitorsSection extends Component {

    componentDidMount() {
        this.props.getExhibitorsSaga();
    }

    componentDidUpdate() {
        $('.ExhibSlider').trigger('destroy.owl.carousel');
        $('.ExhibSlider').find('.owl-stage-outer').children().unwrap();
        $('.ExhibSlider').removeClass("owl-center owl-loaded owl-text-select-on");

        $('.ExhibSlider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            nav: true,
            slideBy: 3,
            navText: ['<a class="prevSlide" href="#"></a>', '<a class="NextSlide" href="#"></a>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    render() {
        const { exhibitors } = this.props;
        return (
            <div className="sectionEvents ExhibSection">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-6">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">APB<span>Exhibitors</span></h2>
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
                            <div className="col-md-9">
                                <ul className="owl-carousel owlReset ExhibSlider">
                                    {
                                        exhibitors.map(({ title, location, photos }, index) => (
                                            <li key={index}>
                                                <div className="col-md-3 colBorder">
                                                    <div className="postImage" style={{ backgroundImage: `url(http://142.93.202.48${photos.url})` }}></div>
                                                    <h2>{title}</h2>
                                                    <div className="idNumber">{location}</div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="events exibtEvent abpExbBg">
                                    <div className="daysTimeEve">Art Palm Beach</div>
                                    <h2 className="eventName">Exibitors Call</h2>
                                    <div className="spacerBorder"><span className="borderBtSp"></span></div>
                                    <p><span className="whiteTextEve">Thursday</span><br />
                                        March 14 – 6 PM – 8 PM</p>
                                    <div className="buttonBottomBuy"><a href="#" className="buttonBuy">To Exibit</a></div>
                                </div>
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
    exhibitors: state.exhibitorsReducer.exhibitors
});

const mapDispatchToProps = dispatch => ({
    getExhibitorsSaga: () => {
        dispatch(getExhibitorsSaga({ tags: TAG_APB }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExhibitorsSection);
