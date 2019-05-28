import React, {Component} from 'react';
import {Link} from "react-router-dom";

import '../css/pages/details.css';

import {Fade} from "react-slideshow-image";
import DetailsSlider from '../components/details_slider';

const fadeProperties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
};

class DetailsComponent extends Component {
    url4 = {
        url1: this.props.imgUrl
    };
    url5 = {
        url1: this.props.imgUrl_alt
    };
    arr3 = [this.url4,this.url5];
    mapArr3 = this.arr3.map((num1) => num1);

    createDetailsImg = () => {
        let detailImgs = [];

        for (let j = 0; j < this.mapArr3.length; j++) {
            detailImgs.push(<DetailsSlider {...this.mapArr3[j]}/>);
        }
        return detailImgs;
    };

    render() {
        // console.log(this.props.name)
        return (
            <div className="details-container">
                <div className="w3-row">
                    <div className="w3-col s12 m6 l6 ">
                        <div className='details-img-container'>
                            {/*{stuff}*/}
                            <Fade {...fadeProperties}>
                                {this.createDetailsImg()}
                            </Fade>
                        </div>
                    </div>
                    <div className="w3-col s12 m6 l6 ">
                        <div className='product-details'>
                            <div className='details-first-div'>
                                <h1>{this.props.name}</h1>
                                <h5 className='details-price'>Frw {this.props.price} <span
                                    className='line-through'>Frw {this.props.former_price}</span>
                                </h5>
                            </div>
                            <div className='details-quantity'>
                                <h4>Quantity</h4>
                                <input className='input-quantity' type="number" placeholder='1'/>
                                <Link to={''} className="add-cart">ADD TO CART</Link>
                            </div>
                            <h4>DESCRIPTION</h4>
                            <hr/>
                            <p>{this.props.description}</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsComponent;
