import React, {Component} from 'react';
import axios from 'axios';
import '../css/pages/product.css';
import Header from '../components/header';
import Footer from '../components/footer';
// import ProductComponent from '../components/product_component';
import {Link} from "react-router-dom";

// import DetailsComponent from '../components/details_component';


class Product extends Component {

    state = {
        uploaded: false,
        List: [],
    };

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("https://engineersticity.pythonanywhere.com/api/products/")
            .then(res => this.setState({List: res.data, uploaded: false}))
            .catch(err => console.log(err));
    };

    renderItems = () => {
        const {viewItem} = this.state;
        const newItems = this.state.List.filter(
            item => item.complete === viewItem
        );
        return newItems.map(item => (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <Link to={"/dev/product-details/" + item.id}>
                            <img className="pic-1" src={item.image} alt={''}/>
                            <img className="pic-2" src={item.image_alt} alt={''}/>

                        </Link>
                        <span className="product-discount-label">-{item.discount}%</span>
                        <ul className="social">
                            <li><a href={item.image} data-tip="Quick View"><i className="fa fa-search"/></a>
                            </li>
                            <li><a href={item.image_alt} data-tip="Add to Wishlist"><i
                                className="fa fa-shopping-bag"/></a>
                            </li>
                            <li><a href={item.image} data-tip="Add to Cart"><i
                                className="fa fa-shopping-cart"/></a></li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h3 className="title">
                            <Link to={"/dev/product-details/" + item.id}>{item.name}</Link>
                        </h3>
                        <span className="product-category">Per pcs</span>
                        <div className="price">Frw {item.price}
                            <span>Frw {item.former_price}</span>
                        </div>
                        <a className="add-to-cart" href={item.image}>ADD TO CART</a>
                    </div>
                </div>
            </div>


        ));
    };

    render() {
        return (
            <div>
                <Header/>
                <div className="Products-page">
                    <div className="product-title">
                        <p>FRUITS</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            {this.renderItems()}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Product;
