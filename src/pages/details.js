import React, {Component} from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/pages/product.css';
import '../css/pages/details.css';
// import DetailsComponent from '../components/details_component';
// import ImgUpload from '../components/img_upload';
import axios from "axios";
import {Link} from "react-router-dom";
import DetailsSlider from "../components/details_slider";

import {Fade} from "react-slideshow-image";

const fadeProperties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
};

class Details extends Component {

    state = {
        uploaded: false,
        title: '',
        content: '',
        image: null,
        image_alt: null,
        newList: [],
        catsList: [],
        name: '',
        image1: null,
        image2: null
    };


    createDetailsImg = (arr1) => {
        let detailImgs = [];

        for (let j = 0; j < arr1.length; j++) {
            detailImgs.push(<DetailsSlider{...arr1[j]}/>);
        }
        return detailImgs;
    };


    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        const {stuff} = this.props.match.params;
        axios
            .get("https://engineersticity.pythonanywhere.com/api/products/" + stuff)
            .then(res => this.setState({
                newList: res.data,
                uploaded: false,
            }))
            .catch(err => console.log(err));
    };


    renderItems = () => {
        const newItems = this.state.newList;
        let url4 = {
            url1: newItems.image
        };
        let url5 = {
            url1: newItems.image_alt
        };
        let arr3 = [url4, url5];
        let mapArr3 = arr3.map((num1) => num1);
        return (

            <div className="details-container">
                <div className="w3-row">
                    <div className="w3-col s12 m6 l6 ">
                        <div className='details-img-container'>
                            <Fade {...fadeProperties}>
                                {this.createDetailsImg(mapArr3)}
                            </Fade>
                        </div>
                    </div>
                    <div className="w3-col s12 m6 l6 ">
                        <div className='product-details'>
                            <div className='details-first-div'>
                                <h1>{newItems.name}</h1>
                                <h5 className='details-price'>Frw {newItems.price} <span
                                    className='line-through'>Frw {newItems.former_price}</span>
                                </h5>
                            </div>
                            <div className='details-quantity'>
                                <h4>Quantity</h4>
                                <input className='input-quantity' type="number" placeholder='1'/>
                                <Link to={''} className="add-cart">ADD TO CART</Link>
                            </div>
                            <h4>DESCRIPTION</h4>
                            <hr/>
                            <p>{newItems.description}</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };


    render() {

        return (
            <div className="Details">
                <Header/>
                {this.renderItems()}
                {/*<ImgUpload/>*/}
                <Footer/>
            </div>
        );
    }
}

export default Details;
