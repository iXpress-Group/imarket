import React, {Component} from 'react';
import '../css/pages/product.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductComponent from '../components/product_component';
import DetailsComponent from '../components/details_component';


class Product extends Component {

    constructor(props) {
        super(props);
    }

    products = {
        name: 'Fish Masala',
        imgUrl: require('../assets/images/fish_masala5.jpg'),
        imgUrl_alt: require('../assets/images/fish_masala3.jpg'),
        price: 400,
        discount: 25,
        former_price: 500,
        product_id:1
    };
    products1 = {
        name: 'Onions',
        imgUrl: require('../assets/images/onions.jpeg'),
        imgUrl_alt: require('../assets/images/onions_alt.jpeg'),
        price: 200,
        discount: 12,
        former_price: 224,
        product_id:2
    };

    // Products will be fetched from the api and added to this array

    arr = [this.products, this.products1,this.products, this.products1,this.products, this.products1,this.products, this.products1];
    path = this.arr.map((num) => num);

    createProducts = () => {
        let products = [];
        // let product_details = [];
        // product_details.push(<DetailsComponent{...this.path[1]}/>);

        for (let i = 0; i < this.path.length; i++) {
            products.push(<ProductComponent{...this.path[i]}/>);

        }
        return products;
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
                            {this.createProducts()}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Product;
