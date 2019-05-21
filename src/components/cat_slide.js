import React, {Component} from "react";

import '../css/pages/cat_slide.css';
import {Link} from "react-router-dom";

class CatSlide extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="each-slide">
                <div className="w3-row">
                    <div className="w3-col s2 m2 l2">
                        <Link className="cats-links" to={''}>
                            <div className="cat-img">
                                <img src={this.props.img1} alt=""/>
                            </div>
                            <h4>{this.props.name[0]}</h4>
                        </Link>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <Link className="cats-links" to={''}>
                            <div className="cat-img">
                                <img src={this.props.img2} alt=""/>
                            </div>
                            <h4>{this.props.name[1]}</h4>
                        </Link>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <Link className="cats-links" to={''}>
                            <div className="cat-img">
                                <img src={this.props.img3} alt=""/>
                            </div>
                            <h4>{this.props.name[2]}</h4>
                        </Link>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <Link className="cats-links" to={''}>
                            <div className="cat-img">
                                <img src={this.props.img4} alt=""/>
                            </div>
                            <h4>{this.props.name[3]}</h4>
                        </Link>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <Link className="cats-links" to={''}>
                            <div className="cat-img">
                                <img src={this.props.img5} alt=""/>
                            </div>
                            <h4>{this.props.name[4]}</h4>
                        </Link>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <Link className="cats-links" to={''}>
                            <div className="cat-img">
                                <img src={this.props.img6} alt=""/>
                            </div>
                            <h4>{this.props.name[5]}</h4>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default CatSlide;
