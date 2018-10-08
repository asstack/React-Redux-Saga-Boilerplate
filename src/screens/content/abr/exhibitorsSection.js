import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getExhibitorsSaga } from '../../../actions';


class ExhibitorsSection extends Component {

    componentDidMount() {
        this.props.getExhibitorsSaga();
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
                                    <h2 className="eventHeading">ABR<span>Exhibitors</span></h2>
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
                                exhibitors.map(({ title, location, photos }, index) => (
                                    <div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: `url(http://142.93.202.48${photos.url})` }}></div>
                                        <h2>{title}</h2>
                                        <div className="idNumber">{location}</div>
                                    </div>
                                ))
                            }
                            {/* <div className="col-md-3 colBorder">
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/exbis1.png)" }}></div>
                                <h2>Adamar Fine Arts</h2>
                                <div className="idNumber">408</div>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/exbis2.png)" }}></div>
                                <h2>Ai Bo Gallery</h2>
                                <div className="idNumber">408</div>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/exbis3.png)" }}></div>
                                <h2>Anthony Brunelli Fine Arts</h2>
                                <div className="idNumber">214</div>
                            </div> */}
                            <div className="col-md-3 colBorder">
                                <div className="events exibtEvent">
                                    <div className="daysTimeEve">Art Boca Raton</div>
                                    <h2 className="eventName">Exibitors Call</h2>
                                    <div className="spacerBorder"><span className="borderBtSp"></span></div>
                                    <p><span className="whiteTextEve">Thursday</span><br />
                                        March 14 – 6 PM – 8 PM</p>
                                    <div className="buttonBottomBuy"><a href="#!" className="buttonBuy">To Exibit</a></div>
                                </div>
                            </div>
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
    exhibitors: state.exhibitorsReducer.exhibitors
});

const mapDispatchToProps = dispatch => ({
    getExhibitorsSaga: () => {
        dispatch(getExhibitorsSaga())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExhibitorsSection);
