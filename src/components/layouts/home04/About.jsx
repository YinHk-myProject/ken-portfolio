import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon } from '../home02/about/index';
import { NumberCount } from './about/index';

class About extends Component {
    render() {
        return (
            <section className="about-me t2 s3 shape-am position-relative" id="about">
                <div className="section-icons">
                    <Icon />
                </div>
                <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-7 animate-element wow delay5 fadeInDown">
                        <div className="flat-title t2">
                            <h4 className="sub-title mg-b22">About Me</h4>
                            <h2 className="title-section color-d11 mg-b41">Hi, let me join your team!</h2>
                            <div className="description">
                                <p className="color-d13 lt-sp01">
                                    A programmer/developer with a passion for problem-solving and efficiency
                                    improvement.A supportive and enthusiastic team player dedicated to efficiently resolving project
                                    issues. Excited to leverage my experience in building software that solves real-world
                                    user challenges in a test-driven approach.
                                </p>
                                <p className="color-d13 lt-sp01">
                                    I haveraduated from university with major in computing and mathematics. Previous job is a programmer in web dev.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                <img src="images/section/51.png" alt="images" />
                </div>
            </section>
        );
    }
}

export default About;
