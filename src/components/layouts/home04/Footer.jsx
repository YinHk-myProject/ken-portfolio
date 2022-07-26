import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <div className="tf-modal-content justify-content-end"> 
                <footer id="footer" className="footer footer-s4">
                    <div className="container">
                        <div id="footer-widget" className="footer-widget-s3 border-bottom-s2 position-relative">
                            <h3 className="widget-title larger lt-sp06 text-white text-center">Feel free to connect me!</h3>
                            <div className="site-list site-list-center text-center">
                            </div>
                        </div>
                    </div>
                    <div id="bottom" className="bottom-s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="copyright lt-sp02">
                                        Ken Ng.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="widget-nav-menu color-s2">
                                        <li><Link to="#">Home</Link></li>
                                        <li><Link to="#">Portfolio</Link></li>
                                        <li><Link to="#">About</Link></li>
                                        <li><Link to="#">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2">
                                    <div className="socials-list color-s2">
                                        <Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                        <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                                        <Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
