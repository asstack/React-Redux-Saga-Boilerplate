import React, { Component } from 'react';


class Footer extends Component {

    render() {
        return (
            <footer className="container-fluid  Footer_main">
                <div className="footerTopSec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <p className="foot_heading_bold">NFL</p>
                                <p className="mb-0">Call us at +1305-490-4584 or email llester@nextlevelfairs.com</p>
                            </div>
                            <div className="col-md-3">
                                <p className="foot_heading_normal">Socials</p>
                                <ul className="footer_social_icons">
                                    <li className="equal_style_social_icons"><a href="JavaScript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li className="equal_style_social_icons"><a href="JavaScript:void(0);"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                    <li className="equal_style_social_icons"><a href="JavaScript:void(0);"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                                    <li className="equal_style_social_icons"><a href="JavaScript:void(0);"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
                                    <li className="equal_style_social_icons"><a href="JavaScript:void(0);"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <p className="foot_heading_normal">Art Boca Ratan</p>
                                <p className="mb-0">3450 NW 8th Avenue FAU Research Park Boca Ratan, FL 33431</p>
                            </div>
                            <div className="col-md-3">
                                <p className="foot_heading_normal">Art Palm Beach</p>
                                <p className="mb-0">Palm Beach Country Convention Center 650 Okeechobee Boulevard West Palm Beach, Florida 33401</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerCopyRight">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <p>&copy; 2018 NFL All Rights  Reserved</p>
                            </div>
                            <div className="col-md-7">
                                <div className="linkFootRt"> <a href="#">Home</a> <a href="#">News</a> <a href="#">Fairs</a> <a href="#">Gallery</a> <a href="#">Articles</a> <a href="#">Editorials</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}



export default Footer;
