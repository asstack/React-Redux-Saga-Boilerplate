import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getEventsSaga } from '../../../../actions';
import store from '../../../../store';
import { TAG_ABR } from '../../../../appConstants';


const $ = window.$;

class EventsSection extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     artists: []
        // };

        // store.subscribe(() => {
        //     this.setState({
        //         artists: store.getState().artistsReducer.artists
        //     });
        // });
    }

    componentDidMount() {
        this.props.getEventsSaga();
    }

    componentDidUpdate() {
        $('.AbrEventSlider').trigger('destroy.owl.carousel');
        $('.AbrEventSlider').find('.owl-stage-outer').children().unwrap();
        $('.AbrEventSlider').removeClass("owl-center owl-loaded owl-text-select-on");

        $('.AbrEventSlider').owlCarousel({
            loop: true,
            margin: 0,
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
        const { events } = this.props;
        // const { artists } = this.state;
        return (
            <div className="sectionEvents" >
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-6">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">ABR<span>Events</span></h2>
                                </div>
                            </div>
                            <div className=" col-md-6 text-right">
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
                            <div className="col-md-9">
                                <ul className="owl-carousel owlReset AbrEventSlider">
                                    {
                                        events.map(({ title, description, photos }, index) => (
                                            <li key={index}>
                                                <div className="col-md-3 colBorder">
                                                    <h3 className="postTags">Work</h3>
                                                    <div className="postImage" style={{ backgroundImage: `url(${photos && `http://142.93.202.48${photos.url})`}` }}></div>
                                                    <h2>{title}</h2>
                                                    <div className="dateTimePost">
                                                        <p>Date & Time</p>
                                                        <p><strong>15-18 March  2019, 2-3 pm</strong></p>
                                                    </div>
                                                    <div className="postDisc">
                                                        <p>{description}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="events">
                                    <div className="daysTimeEve">Days & Times</div>
                                    <h2 className="eventName">Vernissage</h2>
                                    <div className="spacerBorder"><span className="borderBtSp"></span></div>
                                    <p><span className="whiteTextEve">Thursday</span><br />
                                        <span className="whiteTextEve">March 14</span> – 6 PM – 8 PM</p>
                                    <div className="spacerBorder"><span className="bordeGeyBteve"></span></div>
                                    <p>Collectors Preview<br />
                                        March 14  8 -10 PM, By Invitation Only</p>
                                    <div className="spacerBorder bigGapTpBt"><span className="bordeGeyBteve"></span></div>
                                    <p>Vernissage admission by separate ticket</p>
                                    <p className="redText">$50 per person </p>
                                    <div className="buttonBottomBuy"><a href="#" className="buttonBuy">Byu Tickets</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eventSeeMore">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-lg-12 seeMoreBtnCont"> <a href="#" className="seemoreBtn">See More</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.eventsReducer.events
});

const mapDispatchToProps = dispatch => ({
    getEventsSaga: () => {
        dispatch(getEventsSaga())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsSection);
