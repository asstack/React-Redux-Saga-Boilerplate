import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArtworksSaga } from '../../../actions';


const $ = window.$;


class ArtworksSection extends Component {

    componentDidMount() {
        this.props.getArtworksSaga();
    }

    componentDidUpdate() {
        $('.sliderArworks').trigger('destroy.owl.carousel');
        $('.sliderArworks').find('.owl-stage-outer').children().unwrap();
        $('.sliderArworks').removeClass("owl-center owl-loaded owl-text-select-on");

        $('.sliderArworks').owlCarousel({
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
        const { artworks } = this.props;
        return (
            <div className="sectionEvents artWorkSection">
                <div className="eventHeaderTop borderTopBt">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className=" col-md-2">
                                <div className="eventHeader">
                                    <h2 className="eventHeading">ABR<span>Artworks</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <ul className="artistName">
                                    <li><a href="#">Painting</a></li>
                                    <li><a href="#">Photography</a></li>
                                    <li><a href="#">Sculture</a></li>
                                    <li><a href="#">Prints & Multiples</a></li>
                                    <li><a href="#">Works on Paper</a></li>
                                    <li><a href="#">Film & Videos</a></li>
                                    <li><a href="#">Design</a></li>
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
                            <ul className="owl-carousel owlReset  sliderArworks">
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
    artworks: state.artworksReducer.artworks
});

const mapDispatchToProps = dispatch => ({
    getArtworksSaga: () => {
        dispatch(getArtworksSaga())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksSection);
