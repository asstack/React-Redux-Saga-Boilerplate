import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArtistsSaga } from '../../../../actions';
import { TAG_APB } from '../../../../appConstants';


const $ = window.$;

class ArtistsSection extends Component {

    componentDidMount() {
        this.props.getArtistsSaga();
    }

    componentDidUpdate() {
        $('.sliderArtistsThreeCol').trigger('destroy.owl.carousel');
        $('.sliderArtistsThreeCol').find('.owl-stage-outer').children().unwrap();
        $('.sliderArtistsThreeCol').removeClass("owl-center owl-loaded owl-text-select-on");

        $('.sliderArtistsThreeCol').owlCarousel({
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
        const { artists } = this.props;
        return (
            <div className="sectionEvents artistSection">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-2">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">APB<span>Artists</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-7"> </div>
                            <div className="col-md-3 text-right">
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
                            <div className="col-md-3 colBorder">
                                <ul className="abpArtistList">
                                    <li>
                                        <div className="abpArtListThumb" style={{ backgroundImage: `url(../assets/images/abpArtistImgthumb1.png)` }}></div>
                                        <div className="artistTags">Abstract</div>
                                        <a href="#">Khawam Gallery</a></li>
                                    <li>
                                        <div className="abpArtListThumb" style={{ backgroundImage: `url(../assets/images/abpArtistImgthumb2.png)` }}></div>
                                        <div className="artistTags">Abstract</div>
                                        <a href="#">Kattegat Gallery</a></li>
                                    <li>
                                        <div className="abpArtListThumb" style={{ backgroundImage: `url(../assets/images/abpArtistImgthumb3.png)` }}></div>
                                        <div className="artistTags">Abstract</div>
                                        <a href="#">Khankhalaev Gallery</a></li>
                                    <li>
                                        <div className="abpArtListThumb" style={{ backgroundImage: `url(../assets/images/abpArtistImgthumb4.png)` }}></div>
                                        <div className="artistTags">Abstract</div>
                                        <a href="#">Kendall Art Center</a></li>
                                </ul>
                            </div>
                            <div className="col-md-9">
                                <ul className="owl-carousel owlReset sliderArtistsThreeCol">
                                    <li><div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abpArtistImg1.png)` }}></div>
                                        <div className="idNumber">Design, Insights</div>
                                        <h2>Alberto La Tassa</h2>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abpArtistImg2.png)` }}></div>
                                        <div className="idNumber">Abstract</div>
                                        <h2>Alejandra Aristizabal</h2>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abpArtistImg3.png)` }}></div>
                                        <div className="idNumber">Alejandra Aristizabal</div>
                                        <h2>Alessandra Maria</h2>
                                    </div></li>

                                    <li><div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abpArtistImg1.png)` }}></div>
                                        <div className="idNumber">Design, Insights</div>
                                        <h2>Alberto La Tassa</h2>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abpArtistImg2.png)` }}></div>
                                        <div className="idNumber">Abstract</div>
                                        <h2>Alejandra Aristizabal</h2>
                                    </div></li>
                                    <li><div className="col-md-3 colBorder">
                                        <div className="postImage" style={{ backgroundImage: `url(../assets/images/abpArtistImg3.png)` }}></div>
                                        <div className="idNumber">Alejandra Aristizabal</div>
                                        <h2>Alessandra Maria</h2>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="eventsList">
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
                </div> */}
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
        dispatch(getArtistsSaga({ tags: TAG_APB }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsSection);
