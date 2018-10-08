import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArtworksSaga } from '../../actions';


class ArtworkSection extends Component {

    componentDidMount() {
        this.props.getArtworksSaga();
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
                                    <li><a href="#!">Painting</a></li>
                                    <li><a href="#!">Photography</a></li>
                                    <li><a href="#!">Sculture</a></li>
                                    <li><a href="#!">Prints & Multiples</a></li>
                                    <li><a href="#!">Works on Paper</a></li>
                                    <li><a href="#!">Film & Videos</a></li>
                                    <li><a href="#!">Design</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 text-right">
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
                                artworks.map(({ title, photos, categories }, index) => {
                                    let categories_array = [];
                                    categories.forEach(element => {
                                        categories_array.push(element.title);
                                    });
                                    return (
                                        <div className="col-md-3 colBorder">
                                            <div className="postImage" style={{ backgroundImage: `url(http://142.93.202.48${photos.url})` }}></div>
                                            <div className="idNumber">{categories_array.join(', ')}</div>
                                            <h2>{title}</h2>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="col-md-3 colBorder">
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/artWorkImg1.png)" }}></div>
                                <div className="idNumber">Painting</div>
                                <h2>Red Grooms</h2>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/artWorkImg2.png)" }}></div>
                                <div className="idNumber">Prints & Multiples</div>
                                <h2>Ricardo Cardenas</h2>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/artWorkImg3.png)" }}></div>
                                <div className="idNumber">Film & Videos</div>
                                <h2>Richard Jolley</h2>
                            </div>
                            <div className="col-md-3 colBorder">
                                <div className="postImage" style={{ backgroundImage: "url(../../assets/images/artWorkImg4.png)" }}></div>
                                <div className="idNumber">Design</div>
                                <h2>Rodolphe Hammadi</h2>
                            </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkSection);
