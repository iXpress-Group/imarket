import React, {Component} from 'react';
import '../css/pages/checkout.css';
import axios from "axios";
import Header from '../components/header';
import Footer from '../components/footer';

console.clear();

let productList = [];

/* Product */
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        };
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.showImage = this.showImage.bind(this);
    }

    add() {
        this.setState({
            qty: this.state.qty + 1
        });
        this.props.handleTotal(parseInt(this.props.price, 10));
        console.log(parseInt(this.props.price, 10));
    }

    static addShit() {
        return "Hello shit";
    }

    subtract() {
        this.setState({
            qty: this.state.qty - 1
        });
        this.props.handleTotal(-parseInt(this.props.price, 10));
    }

    showImage() {
        this.props.handleShow(this.props.Image);
    }

    render() {
        return (
            <div className='checkoutWrapper'>
                {Product.addShit}
                <div className="w3-row form-group testck">
                    <div className="w3-col s6 m6 l6">
                        <h4>{this.props.name}: Rwf {parseInt(this.props.price, 10)}</h4>
                    </div>
                    <div className="w3-col s6 m6 l6  text-right">qty: {this.state.qty}</div>
                </div>
                <div className="w3-row btn-toolbar">
                    <div className="w3-col s6 m6 l6 checkoutimg">
                        <img className='checkimg' src={this.props.image} alt=""/>
                    </div>
                    <div className="w3-col s6 m6 l6 text-right">
                        <button className="btn btn-outline-primary" onClick={this.add}>
                            +1
                        </button>
                        <button className="btn btn-outline-primary" onClick={this.subtract}
                                disabled={this.state.qty < 1}>
                            -1
                        </button>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

/* Total */
class Total extends Component {
    render() {
        // let itemPrice = (parseInt(this.props.itemPrice,10)).toFixed(2);
        let total = (this.props.total * 1).toFixed(2);
        // total = total.toFixed(2);
        let tax = (this.props.total * 0.15).toFixed(2);
        let totalIncTax = (+total + +tax).toFixed(2);
        let mystyle = {
            borderTop: "1px solid red",
            marginTop: "10px",
            fontWeight: 900
        };
        return (
            <div className='checkoutTotal'>
                <h3 className="w3-row" style={{fontWeight: 900}}>
                    <span className="w3-col s12 m6 l6">total price:</span>
                    <span className="w3-col s12 m6 l6 text-right">Rwf {total}</span>
                </h3>
                <h3 className="w3-row" style={{fontWeight: 900}}>
                    <span className="w3-col s12 m6 l6">tax (15%):</span>
                    <span className="w3-col s12 m6 l6 text-right">Rwf {tax}</span>
                </h3>
                <h3 className="w3-row" style={mystyle}>
                    <span className="w3-col s6 m6 l6">total inc tax:</span>
                    <span className="w3-col s6 m6 l6 text-right">Rwf {totalIncTax}</span>
                </h3>

            </div>
        );
    }
}

/* ProductList */
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            itemPrice:400,
            productList: ""
        };

        this.createProduct = this.createProduct.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        // this.showProduct = this.showProduct.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            axios
                .get("https://benedict1.pythonanywhere.com/api/cart/")
                .then(res => this.setState({productList: res.data, uploaded: false}))
                .catch(err => console.log(err));
            // this.setState({productList: productList});
        }, 100);
    }

    createProduct(product) {
        this.setState({
            products: this.state.productList.push(product)
        });
    }

        calculateTotal(price) {
        this.setState({
            total: this.state.total + price
        });
        console.log(this.state.total);
    }

    // showProduct(info) {
    //     console.log(info);
    //     alert(info);
    // }

    render() {
        if (!this.state.productList) return <p><i className="fa fa-shopping-cart fa-spin" style={{fontSize: 48}}/></p>;
        let component = this;
        let products = this.state.productList.map(function (product) {
            return (
                <Product
                    name={product.name}
                    price={parseInt(product.price, 10)}
                    image={product.image}
                    description={product.description}
                    // handleShow={component.showProduct}
                    handleTotal={component.calculateTotal}
                />
            );
        });

        return (
            <div>
                <Header/>
                <div className='checkoutContainer'>
                    <h1 className='header_checkout'>Checkout</h1>
                    {products}
                    <Total total={this.state.total }/>
                    <div className='checkoutButtonDiv'>
                        <button className="checkoutButton">
                            Checkout
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

// ReactDOM.render(<ProductList />, document.getElementById("app"));
export default ProductList;