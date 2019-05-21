import React, {Component} from "react";

import '../css/pages/cat_slide.css';

class CatSlide extends Component {
    render() {
        return (
            <div className="each-slide">
                <div className="w3-row">
                    <div className="w3-col s2 m2 l2">
                        <div className="cat-img">
                            <img src={this.props.img1} alt=""/>
                        </div>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <div className="cat-img">
                            <img src={this.props.img2} alt=""/>
                        </div>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <div className="cat-img">
                            <img src={this.props.img3} alt=""/>
                        </div>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <div className="cat-img">
                            <img src={this.props.img4} alt=""/>
                        </div>
                    </div>
                    <div className="w3-col s2 m2 l2">
                        <div className="cat-img">
                            <img src={this.props.img5} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CatSlide;
