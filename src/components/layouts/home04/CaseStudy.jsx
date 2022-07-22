import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CaseStudy extends Component {
    render() {
        return (
            <section className="flat-case-study s3" id="portfolio">
                <div className="container">
                    <div className="d-md-flex">
                        <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                            <div className="image-link t2">
                                <div className="featured-post">
                                    <Link to={{ pathname: "https://currency-rate-exchange-app.netlify.app/"}} target="_blank">
                                       <img src="images/currency_converter.png" alt="image" />
                                    </Link>
                                    <Link to={{ pathname: "https://github.com/YinHk-myProject/currency-exchange-app"}} target="_blank">
                                      Github
                                    </Link>
                                </div>
                            </div>
                            <div className="image-link t2">
                                <div className="featured-post">
                                    <Link to={{ pathname: "https://easy-translator-app.netlify.app/"}} target="_blank">
                                       <img src="images/translator.png" alt="image" />
                                    </Link>
                                    <Link to={{ pathname: "https://github.com/YinHk-myProject/easy-translator-app"}} target="_blank">
                                      Github
                                    </Link>
                                </div>
                            </div>
                            <div className="fl-btn text-center"> 
                                <Link to="#" className="f-w500">Explore More</Link>
                            </div>
                        </div>
                        <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="flat-title t2 mg-b60">
                                    <h4 className="sub-title mg-b13">Projects</h4>
                                    <h2 className="title-section color-d11 mg-b20">I have a few interesting personal projects</h2>
                                </div>
                            <div className="pd-right">
                                <div className="image-link t2">
                                    <div className="featured-post">
                                        <Link to={{ pathname: "https://geolocator-3d.netlify.app/"}} target="_blank">
                                            <img src="images/geolocator.png" alt="image" />
                                        </Link>
                                        <Link to={{ pathname: "https://github.com/YinHk-myProject/geolocator-3d-app"}} target="_blank">
                                            Github
                                        </Link>
                                    </div>
                                </div>
                                <div className="image-link t2">
                                    <div className="featured-post" style={{display: 'flex', flexDirection: 'column'}}>
                                        <Link to={{ pathname: "https://play.google.com/store/apps/details?id=com.MiniStudio.PaperJump"}} target="_blank">
                                            <img src="images/paperjump.png" alt="image" />
                                        </Link>
                                        <Link to={{ pathname: "https://github.com/YinHk-myProject/MyUnity_PaperJump"}} target="_blank">
                                            Github
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CaseStudy;
