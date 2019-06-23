import React, {Component} from 'react';
import axios from 'axios';
import '../css/pages/product.css';
import Header from '../components/header';
import Footer from '../components/footer';
// import ProductComponent from '../components/product_component';
import {Link} from "react-router-dom";

// import DetailsComponent from '../components/details_component';
let countCart = 0;
let cartList = [];


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaded: false,
            List: [],
            Cart: [],
            Test: false,

        };
    }

    headerList = {
        name: "hello",
        size: 3,
        list: cartList
    };

    componentDidMount() {
        setTimeout(() => {
            this.runRefresh();
        }, 100)
    };

    runRefresh = () => {
        this.refreshCart();
        this.refreshList();
    };

    refreshList = () => {
        axios
            .get("https://engineersticity.pythonanywhere.com/api/products/")
            .then(res => this.setState({List: res.data, Test: true}))
            .catch(err => console.log(err));
    };
    refreshCart = () => {
        axios
            .get("https://engineersticity.pythonanywhere.com/api/cart/")
            .then(res => cartList = res.data)
            .catch(err => console.log(err));
    };

    addCart = (category, name, description, image, former_price, price, productTrackingNo) => {
        let form_data = new FormData();
        form_data.append('category', category);
        form_data.append('name', name);
        form_data.append('description', description);
        form_data.append('image', image);
        form_data.append('former_price', former_price);
        form_data.append('price', price);
        form_data.append('productTrackingNo', productTrackingNo);

        let url = 'https://engineersticity.pythonanywhere.com/api/cart/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
                alert(name + " added to cart ");
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    checkCart = (category, name, description, image, former_price, price, productTrackingNo) => {
        const {viewCartItem} = this.state;
        const newList = cartList.filter(cartItem => cartItem.complete === viewCartItem);
        newList.map(cartItem => cartItem.productTrackingNo === productTrackingNo ?
            countCart += 1 : null
        );

        if (countCart === 0) {
            this.addCart(category, name, description, image, former_price, price, productTrackingNo);
        } else {
            alert(name + " is already in your cart!! " + newList.length);
            countCart = 0;
        }
    };

    renderItems = () => {
        const {viewItem} = this.state;
        if (!this.state.Test) return <p><i className="fa fa-shopping-cart fa-spin spinnerTest" style={{fontSize: 60}}/>
        </p>;
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
                            <li onClick={this.checkCart.bind(this,
                                item.category,
                                item.name,
                                item.description,
                                item.image,
                                item.former_price,
                                item.price,
                                item.productTrackingNo)}><a data-tip="Add to Cart" href={""}><i
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
                        <p onClick={this.checkCart.bind(this,
                            item.category,
                            item.name,
                            item.description,
                            item.image,
                            item.former_price,
                            item.price,
                            item.productTrackingNo)}
                           id="btnSearch"
                           className="add-to-cart">ADD TO CART</p>
                    </div>
                </div>
            </div>
        ));
    };

    render() {
        return (
            <div>
                <Header {...this.headerList}/>
                <div className="Products-page">
                    <div className="product-title">
                        <p>Products</p>
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
