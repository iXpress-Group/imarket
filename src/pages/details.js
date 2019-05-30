import React, {Component} from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/pages/product.css';
import DetailsComponent from '../components/details_component';
import ImgUpload from '../components/img_upload';


class Details extends Component {
    products = {
        name: 'Fish Masala',
        imgUrl: require('../assets/images/fish_masala5.jpg'),
        imgUrl_alt: require('../assets/images/fish_masala3.jpg'),
        price: 400,
        discount: 25,
        former_price: 500,
        description: 'This is the best Fish Masala in town. get yours today!!',
        product_id: "1"
    };
    products1 = {
        name: 'Onions',
        imgUrl: require('../assets/images/onions.jpeg'),
        imgUrl_alt: require('../assets/images/onions_alt.jpeg'),
        price: 200,
        discount: 12,
        former_price: 224,
        description: 'These are the best onions in town. get yours today!!',
        product_id: "2"
    };

    arr = [this.products, this.products1];
    path = this.arr.map((num) => num);

    createProductDetails = () => {
        const {stuff} = this.props.match.params;
        let product_details = [];

        for (let i = 0; i < this.path.length; i++) {
            if (this.path[i].product_id === stuff){
                product_details.push(<DetailsComponent key={this.path[i].product_id} {...this.path[i]}/>);
                break;
            }
        }

        return product_details;
    };


    render() {

        return(
            <div className="Details">
                <Header/>
                {this.createProductDetails()}
                <ImgUpload/>
                <Footer/>
            </div>
        );
    }
}

export default Details;