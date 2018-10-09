import React, { Component } from 'react';


class Footer extends Component {

    render() {
        return (
            <footer class="container-fluid  Footer_main">
                <div class="footerTopSec">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <p class="foot_heading_bold">NFL</p>
                                <p class="mb-0">Call us at +1305-490-4584 or email llester@nextlevelfairs.com</p>
                            </div>
                            <div class="col-md-3">
                                <p class="foot_heading_normal">Socials</p>
                                <ul class="footer_social_icons">
                                    <li class="equal_style_social_icons"><a href="JavaScript:void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li class="equal_style_social_icons"><a href="JavaScript:void(0);"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                    <li class="equal_style_social_icons"><a href="JavaScript:void(0);"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
                                    <li class="equal_style_social_icons"><a href="JavaScript:void(0);"><i class="fa fa-medium" aria-hidden="true"></i></a></li>
                                    <li class="equal_style_social_icons"><a href="JavaScript:void(0);"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <p class="foot_heading_normal">Art Boca Ratan</p>
                                <p class="mb-0">3450 NW 8th Avenue FAU Research Park Boca Ratan, FL 33431</p>
                            </div>
                            <div class="col-md-3">
                                <p class="foot_heading_normal">Art Palm Beach</p>
                                <p class="mb-0">Palm Beach Country Convention Center 650 Okeechobee Boulevard West Palm Beach, Florida 33401</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footerCopyRight">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <p>&copy; 2018 NFL All Rights  Reserved</p>
                            </div>
                            <div class="col-md-7">
                                <div class="linkFootRt"> <a href="#">Home</a> <a href="#">News</a> <a href="#">Fairs</a> <a href="#">Gallery</a> <a href="#">Articles</a> <a href="#">Editorials</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}



export default Footer;
