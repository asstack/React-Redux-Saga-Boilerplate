import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArtworksSaga } from '../../../actions';
import { TAG_APB } from '../../../appConstants';


const $ = window.$;

class ArtworksSection extends Component {

    componentDidMount() {
        this.props.getArtworksSaga();
    }

    componentDidUpdate() {
        $('.artWorkThreeSlide').trigger('destroy.owl.carousel');
        $('.artWorkThreeSlide').find('.owl-stage-outer').children().unwrap();
        $('.artWorkThreeSlide').removeClass("owl-center owl-loaded owl-text-select-on");

        $('.artWorkThreeSlide').owlCarousel({
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
        const { artworks } = this.props;
        return (
            <div className="sectionEvents artWorkSection">
                <div class="eventHeaderTop borderTopBt">
                    <div class="container ">
                        <div class="row justify-content-center">
                            <div class=" col-md-2">
                                <div class="eventHeader">
                                    <h2 class="eventHeading">APB<span>Arworks</span></h2>
                                </div>
                            </div>
                            <div class="col-lg-7"> </div>
                            <div class="col-md-3 text-right">
                                <div class="slideBlogNavRight "><a class="BlogSlideNav prevBlogSlide" href="javascript:void(0);"></a><span class="navDivider"></span><a class="BlogSlideNav NextBlogSlide" href="javascript:void(0);"></a> </div>
                                <ul class="tagsEvents apbTagEvents">
                                    <li class="active"><a href="#">Last</a></li>
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
                            <div class="col-md-3 colBorder">
                                <ul class="artistName abpArtistName">
                                    <li><a href="#">Painting</a></li>
                                    <li><a href="#">Photography</a></li>
                                    <li><a href="#">Sculture</a></li>
                                    <li><a href="#">Prints & Multiples</a></li>
                                    <li><a href="#">Works on Paper</a></li>
                                    <li><a href="#">Film & Videos</a></li>
                                    <li><a href="#">Design</a></li>
                                </ul>
                            </div>
                            <div class="col-md-9">
                                <ul class="owl-carousel owlReset artWorkThreeSlide">
                                    {
                                        artworks.map(({ title, photos, categories }, index) => {
                                            let categories_array = [];
                                            categories.forEach(element => {
                                                categories_array.push(element.title);
                                            });
                                            return (
                                                <li key={index}>
                                                    <div className="col-md-3 colBorder">
                                                        <div className="postImage" style={{ backgroundImage: `url(http://142.93.202.48${photos.url})` }}></div>
                                                        <div className="idNumber">{categories_array.join(', ')}</div>
                                                        <h2>{title}</h2>
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
                <div class="eventSeeMore">
                    <div class="container ">
                        <div class="row justify-content-center">
                            <div class=" col-lg-12 seeMoreBtnCont"> <a href="#" class="seemoreBtn">See All</a> </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}


const mapStateToProps = state => ({
    artworks: state.artworksReducer.artworks
});

const mapDispatchToProps = dispatch => ({
    getArtworksSaga: () => {
        dispatch(getArtworksSaga({ tags: TAG_APB }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksSection);
