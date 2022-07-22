import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import links from '../links';
import menus from '../menus';
import bloglinks from '../bloglinks';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header id="header" className="header header-style4 has-menu-model">
                <div className="container">
                    <div className="flex-header d-flex justify-content-between align-items-center">
                        <div id="logo" className="logo">
                            <Link to="/" onClick={() => {window.location.href="/"}} title="Logo"><img src="images/logo/Color logo - no background.svg" style={{width: 50}} alt="images" data-width={122} data-height={34} /* data-retina="images/logo/02@2x.png" */ /></Link>
                        </div>
                        <div dir="rtl" className="btn-menu mobile-header__menu-button">
                            <div className="line line-1" />
                            <div className="line line-2" />
                            <div className="line line-3" />
                            <div className="line line-4" />
                        </div>
                        <div className="content-menu d-lg-flex">
                            <div className="nav-wrap">
                                
                            </div>
                        </div>
                        <div className="socials-list-hd s3 hv2">
                            <Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                            <Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                            <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
