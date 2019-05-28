import React, {Component} from 'react';
import {Link} from "react-router-dom";

import '../css/pages/details.css';

class DetailsComponent extends Component {
    render() {
        // console.log(this.props.name)
        return (
            <div className="details-container">
                <div className="w3-row">
                    <div className="w3-col s12 m6 l6 ">
                        <div className='details-img-container'>
                            {/*{stuff}*/}
                            <img className='details-img' src={this.props.imgUrl} alt=""/>
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
