import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg">
                                {/* <!-- Logo --> */}
                                <div className="leftPart">
                                    <a href="#" className="menuIcon navbar-toggler" data-toggle="collapse" data-target="#worldNav" aria-controls="worldNav" aria-expanded="false" aria-label="Toggle navigation"></a>
                                    <div className="breaCrumb">
                                        <a className="navbar-brand" href="index.html">NLF</a>
                                        <span className="divider">/</span>
                                        <span className="pageName">Art Boca Raton</span>
                                    </div>
                                </div>
                                {/* <!-- Navbar Toggler --> */}
                                <button className="navbar-toggler HideMobile" type="button" data-toggle="collapse" data-target="#worldNav" aria-controls="worldNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                                {/* <!-- Navbar --> */}
                                <div className="collapse navbar-collapse mainMenuNav" id="worldNav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active"> <a className="nav-link" href="#">Visit</a> </li>
                                        <li className="nav-item"> <a className="nav-link " href="#">About the Fair</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#">Events</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#">Exhibitors</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#">Artists</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#">News</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#">Press</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="#">Partners</a> </li>
                                    </ul>

                                    {/* <!-- Search Form  --> */}
                                    <div id="search-wrapper" className="">
                                        <form action="#">
                                            <a href="javascript:void(0);" className="IconSearch" ></a>
                                            <input id="search" placeholder="Search something..." type="text" />
                                            <div id="close-icon" style={{ display: "none" }} className=""></div>
                                            <input className="d-none" value="" type="submit" />
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}



export default Header;
