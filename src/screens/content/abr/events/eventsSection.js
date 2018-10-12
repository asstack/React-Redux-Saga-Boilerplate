import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getEventsSaga } from '../../../../actions';
import store from '../../../../store';


const $ = window.$;

class EventsSection extends Component {

    componentDidMount() {
        this.props.getEventsSaga();

        $('.apbEventSlider').owlCarousel({
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
        $('.prevBlogSlide').on("click", function () {
            $(this).parents('.sectionEvents').find('.apbEventSlider').find('.prevSlide').trigger("click");
        });
        $('.NextBlogSlide').on("click", function () {
            $(this).parents('.sectionEvents').find('.apbEventSlider').find('.NextSlide').trigger("click");
        });
    }

    render() {
        const { events } = this.props;
        return (
            <div className="sectionEvents apbeEventSection">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-2">
                                <div className="eventHeader">
                                    <h2 className="eventHeading"><span>Events</span></h2>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <ul className="artistName">
                                    <li className="active"><a href="#">All</a></li>
                                    <li><a href="#">14 March, 2018</a></li>
                                    <li><a href="#">15 March, 2018</a></li>
                                    <li><a href="#">16 March, 2018</a></li>
                                    <li><a href="#">17 March, 2018</a></li>
                                    <li><a href="#">18 March, 2018</a></li>
                                    <li><a href="#">19 March, 2018</a></li>
                                </ul>
                            </div>
                            <div className=" col-md-3 text-right">
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
                            <div className="col-md-9 colBorder">
                                <ul className="owl-carousel owlReset apbEventSlider">

                                    <li><div className="col-md-3 colBorder">
                                        <h3 className="postTags">Forum</h3>
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abrLect1.png)` }}></div>
                                        <h2>Presentation & Book Signing with Photographer David Drebin</h2>
                                        <div className="dateTimePost">
                                            <p>Date & Time</p>
                                            <p><strong>15-18 March  2019, 2-3 pm</strong></p>
                                        </div>
                                        <div className="postDisc">
                                            <p>The fair’s “Collector Forum” includes a full schedule of collector lectures, artist talks in exhibiting dealer booths, book signings, and art curatorial tours.  </p>
                                        </div>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <h3 className="postTags">Party</h3>
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abrLect2.png)` }}></div>
                                        <h2>Rod Faulds: “SouthXeast” Exhibition at FAU’s Schmidt Art Center</h2>
                                        <div className="dateTimePost">
                                            <p>Date & Time</p>
                                            <p><strong>16-18 March 2019, 6 – 8 PM</strong></p>
                                        </div>
                                        <div className="postDisc">
                                            <p>For Art Boca Raton, the Museum extends its hours each evening with “Art After Dark” which includes special performances, lectures, and an opportunity to mingle with a glass of wine, refreshments…</p>
                                        </div>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <h3 className="postTags">Work</h3>
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abrLect3.png)` }}></div>
                                        <h2>Lanya Snyder, Curator of Alex Katz: Small Works</h2>
                                        <div className="dateTimePost">
                                            <p>Date & Time</p>
                                            <p><strong>15-18 March  2019, 2-3 pm</strong></p>
                                        </div>
                                        <div className="postDisc">
                                            <p>“Artists at Work,” a full daily schedule of live demonstrations of art techniques by local artists and sketching sessions, inviting guests to make as well as see art at the fair. Sponsored by ArtSynergy PB,</p>
                                        </div>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <h3 className="postTags">Forum</h3>
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abrLect1.png)` }}></div>
                                        <h2>Presentation & Book Signing with Photographer David Drebin</h2>
                                        <div className="dateTimePost">
                                            <p>Date & Time</p>
                                            <p><strong>15-18 March  2019, 2-3 pm</strong></p>
                                        </div>
                                        <div className="postDisc">
                                            <p>The fair’s “Collector Forum” includes a full schedule of collector lectures, artist talks in exhibiting dealer booths, book signings, and art curatorial tours.  </p>
                                        </div>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <h3 className="postTags">Party</h3>
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abrLect2.png)` }}></div>
                                        <h2>Rod Faulds: “SouthXeast” Exhibition at FAU’s Schmidt Art Center</h2>
                                        <div className="dateTimePost">
                                            <p>Date & Time</p>
                                            <p><strong>16-18 March 2019, 6 – 8 PM</strong></p>
                                        </div>
                                        <div className="postDisc">
                                            <p>For Art Boca Raton, the Museum extends its hours each evening with “Art After Dark” which includes special performances, lectures, and an opportunity to mingle with a glass of wine, refreshments…</p>
                                        </div>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <h3 className="postTags">Work</h3>
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abrLect3.png)` }}></div>
                                        <h2>Lanya Snyder, Curator of Alex Katz: Small Works</h2>
                                        <div className="dateTimePost">
                                            <p>Date & Time</p>
                                            <p><strong>15-18 March  2019, 2-3 pm</strong></p>
                                        </div>
                                        <div className="postDisc">
                                            <p>“Artists at Work,” a full daily schedule of live demonstrations of art techniques by local artists and sketching sessions, inviting guests to make as well as see art at the fair. Sponsored by ArtSynergy PB,</p>
                                        </div>
                                    </div></li>

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
