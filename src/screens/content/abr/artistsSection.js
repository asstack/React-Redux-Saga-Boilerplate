import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArtistsSaga } from '../../../actions';


const $ = window.$;


class ArtistsSection extends Component {

    componentDidMount() {
        this.props.getArtistsSaga();
    }

    componentDidUpdate() {
        $('.sliderArtists').trigger('destroy.owl.carousel');
        $('.sliderArtists').find('.owl-stage-outer').children().unwrap();
        $('.sliderArtists').removeClass("owl-center owl-loaded owl-text-select-on");

        $('.sliderArtists').owlCarousel({
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
        const { artists } = this.props;
        return (
            <div className="sectionEvents artistSection">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-2">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">ABR<span>Artists</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <ul className="artistName">
                                    <li><a href="#">Adriana Dorta</a></li>
                                    <li><a href="#">Alex Katz</a></li>
                                    <li><a href="#">Alexi Torres</a></li>
                                    <li><a href="#">Amir Genislaw</a></li>
                                    <li><a href="#">Alexi Torres</a></li>
                                    <li><a href="#">Andrea Salvador</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 text-right">
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
                                <ul className="owl-carousel owlReset sliderArtists">
                                    {
                                        artists.map(({ firstname, lastname, categories, biophoto }, index) => {
                                            let categories_array = [];
                                            categories.forEach(element => {
                                                categories_array.push(element.title);
                                            });
                                            return (
                                                <li key={index}>
                                                    <div className="col-md-3 colBorder">
                                                        <div className="postImage" style={{ backgroundImage: `url(http://142.93.202.48${biophoto.url})` }}></div>
                                                        <div className="idNumber">{categories_array.join(', ')}</div>
                                                        <h2>{`${firstname} ${lastname}`}</h2>
                                                    </div>
                                                </li>
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
            </div>
        );
    }
}


const mapStateToProps = state => ({
    artists: state.artistsReducer.artists
});

const mapDispatchToProps = dispatch => ({
    getArtistsSaga: () => {
        dispatch(getArtistsSaga())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsSection);
