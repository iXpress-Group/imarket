import React, {Component} from 'react';
import '../css/pages/product.css';
import {Link} from 'react-router-dom';
import Details from '../pages/details';


class ProductComponent extends Component {


    constructor(props){
        super(props);
        // let path1 = this.props.pars;

    }

    render() {

            // let link = '/dev/product-details'+this.props.imgUrl;
            // console.log(this.props.imgUrl);
            // console.log('Hello fro thekmvkds');

        return (

            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <Link to={"/dev/product-details/"+this.props.product_id}>
                            <img className="pic-1" src={this.props.imgUrl} alt={''}/>
                            <img className="pic-2" src={this.props.imgUrl_alt} alt={''}/>

                        </Link>
                        <span className="product-discount-label">-{this.props.discount}%</span>
                        <ul className="social">
                            <li><a href="" data-tip="Quick View"><i className="fa fa-search"/></a></li>
                            <li><a href="" data-tip="Add to Wishlist"><i
                                className="fa fa-shopping-bag"/></a>
                            </li>
                            <li><a href="" data-tip="Add to Cart"><i
                                className="fa fa-shopping-cart"/></a></li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h3 className="title">
                            <a href="#">{this.props.name}</a>
                        </h3>
                        <span className="product-category">
                                        <a href="#">Per pcs</a>
                                    </span>
                        <div className="price">Frw {this.props.price}
                            <span>Frw {this.props.former_price}</span>
                        </div>
                        <a className="add-to-cart" href="">ADD TO CART</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductComponent;