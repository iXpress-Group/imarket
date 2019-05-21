import React, {Component} from 'react';

import '../css/pages/slider.css';
import {Link} from "react-router-dom";
// import {Fade} from "react-slideshow-image";


class Slider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="each-fade">
                <div className="w3-row">
                    <div className="w3-col s6 m6 l6">
                        <div className="image-container">
                            <img className="slider-fade-img" src={this.props.img} alt=""/>
                        </div>
                    </div>
                    <div className="w3-col s6 m6 l6">
                        <div className="image-container1">
                                <p className="firstline">{this.props.firstline}</p>
                                <p className="secondline">{this.props.secondline}</p>
                                <p className="lastline">{this.props.lastline}</p>
                            <Link to={'/dev/products'}>
                                <button className="home-slider-button">shop now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;