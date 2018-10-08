import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getEventsSaga } from '../../actions';
import store from '../../store';

class Eventlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: []
        };

        store.subscribe(() => {
            this.setState({
                artists: store.getState().artistsReducer.artists
            });
        });
    }

    componentDidMount() {
        this.props.getEventsSaga();
    }

    render() {
        const { events } = this.props;
        const { artists } = this.state;
        console.log('events artists', artists);
        return (
            <div className="sectionEvents">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-6">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">ABR<span>Events</span></h2>
                                </div>
                            </div>
                            <div className=" col-md-6 text-right">
                                <div className="slideBlogNavRight "><a className="BlogSlideNav prevBlogSlide" href="#!"></a><span className="navDivider"></span><a className="BlogSlideNav NextBlogSlide" href="#!"></a></div>
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
                                events.map(({ title, description, photos }, index) => (
                                    <div className="col-md-3 colBorder">
                                        <h3 className="postTags">Forum</h3>
                                        <div className="postImage" style={{ backgroundImage: `url(http://142.93.202.48${photos.url})` }}></div>
                                        <h2>{title}</h2>
                                        <div className="dateTimePost">
                                            <p>Date & Time</p>
                                            <p><strong>15-18 March  2019, 2-3 pm</strong></p>
                                        </div>
                                        <div className="postDisc">
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <div className="col-md-3 colBorder">
                                <h3 className="postTags">Forum</h3>
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/artImg1.png)" }}></div>
                                <h2>Collector’s Forum</h2>
                                <div className="dateTimePost">
                                    <p>Date & Time</p>
                                    <p><strong>15-18 March  2019, 2-3 pm</strong></p>
                                </div>
                                <div className="postDisc">
                                    <p>The fair’s “Collector Forum” includes a full schedule of collector lectures, artist talks in exhibiting dealer booths, book signings, and art curatorial tours. </p>
                                </div>
                            </div>
                            <div className="col-md-3 colBorder">
                                <h3 className="postTags">Party</h3>
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/artImg2.png)" }}></div>
                                <h2>Art After Dark</h2>
                                <div className="dateTimePost">
                                    <p>Date & Time</p>
                                    <p><strong>16-18 March 2019, 6 – 8 PM</strong></p>
                                </div>
                                <div className="postDisc">
                                    <p>For Art Boca Raton, the Museum extends its hours each evening with “Art After Dark” which includes special performances, lectures, and an opportunity to mingle with a glass of wine, refreshments…</p>
                                </div>
                            </div>
                            <div className="col-md-3 colBorder">
                                <h3 className="postTags">Work</h3>
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/artImg3.png)" }}></div>
                                <h2>Artists at Work</h2>
                                <div className="dateTimePost">
                                    <p>Date & Time</p>
                                    <p><strong>15-18 March  2019, 2-3 pm</strong></p>
                                </div>
                                <div className="postDisc">
                                    <p>“Artists at Work,” a full daily schedule of live demonstrations of art techniques by local artists and sketching sessions, inviting guests to make as well as see art at the fair. Sponsored by ArtSynergy PB, </p>
                                </div>
                            </div>*/}
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
                                    <div className="buttonBottomBuy"><a href="#!" className="buttonBuy">Buy Tickets</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eventSeeMore">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-lg-12 seeMoreBtnCont"> <a href="#!" className="seemoreBtn">See More</a> </div>
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
        dispatch(getEventsSaga({ tag: '5ba0b10161401005fb46bab7' }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);
