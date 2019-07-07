import React, {Component} from 'react';
import '../css/pages/home1.css';
import '../css/pages/slider.css';
import '../css/pages/product.css';
import Slider from '../components/slider';
import {Fade} from "react-slideshow-image";
import Header from '../components/header';
import Footer from '../components/footer';
import CatSlide from '../components/cat_slide';
                                                                                                                                                                                                                                                                                                // import {Slide} from 'react-slideshow-image';
import {Zoom} from 'react-slideshow-image';
import ProductComponent from "../components/product_component";

// import ProductComponent from "../components/product_component";

const fadeProperties = {
    duration: 1000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: false,
};

const zoomProperties = {
    duration: 3000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: false,
    autoplay: true,
    scale: 50
};


class Home1 extends Component {

    // constructor(props) {
    //     super(props);
    // }


    products1 = {
        name: 'Fish Masala',
        imgUrl: require('../assets/images/fish_masala5.jpg'),
        imgUrl_alt: require('../assets/images/fish_masala3.jpg'),
        price: 400,
        discount: 25,
        former_price: 500
    };
    products2 = {
        name: 'Onions',
        imgUrl: require('../assets/images/onions.jpeg'),
        imgUrl_alt: require('../assets/images/onions_alt.jpeg'),
        price: 200,
        discount: 12,
        former_price: 224
    };

    new_arr = [this.products1, this.products2, this.products1, this.products2];
    new_path = this.new_arr.map((num) => num);

    createNewProducts = () => {
        let newProducts = [];

        for (let i = 0; i < this.new_path.length; i++) {
            newProducts.push(<ProductComponent{...this.new_path[i]}/>);
        }
        return newProducts;
    };
    createPopularProducts = () => {
        let newProducts = [];

        for (let i = 0; i < this.new_path.length; i++) {
            newProducts.push(<ProductComponent{...this.new_path[i]}/>);
        }
        return newProducts;
    };

    slide1 = {
        img: require('../assets/images/deliver.png'),
        firstline: 'Our fleet on-demand ensures',
        secondline: 'a 2 hour delivery on all your orders',
        lastline: 'You also have 24 hours to return any items'
    };
    slide2 = {
        img: require('../assets/images/boy.png'),
        firstline: 'New Products are regularly added',
        secondline: 'at the best market prices',
        lastline: 'to give you more for less'
    };
    slide3 = {
        img: require('../assets/images/MoMo.png'),
        firstline: 'Multiple Payment Methods',
        secondline: 'including Mobile Money',
        lastline: 'to facilitate a smooth transaction always'
    };
    slide4 = {
        img: require('../assets/images/boy.png'),
        firstline: 'Your Groceries Delivered',
        secondline: 'in a bag full of joy',
        lastline: 'It is simple,affordable and convenient'
    };

    slide1Imgs = {
        img1: require('../assets/images/onions.jpeg'),
        img2: require('../assets/images/onions.jpeg'),
        img3: require('../assets/images/onions.jpeg'),
        img4: require('../assets/images/onions.jpeg'),
        img5: require('../assets/images/onions.jpeg'),
        img6: require('../assets/images/onions.jpeg'),
        name: ['Onions', 'Onions Again', 'Chicken Masala', 'Fruits', 'Spices', 'Extra']
    };
    slide2Imgs = {
        img1: require('../assets/images/onions.jpeg'),
        img2: require('../assets/images/onions.jpeg'),
        img3: require('../assets/images/onions.jpeg'),
        img4: require('../assets/images/onions.jpeg'),
        img5: require('../assets/images/onions.jpeg'),
        img6: require('../assets/images/onions.jpeg'),
        name: ['Onions', 'Onions Again', 'Chicken Masala', 'Fruits', 'Spices', 'Extra']
    };
    slide3Imgs = {
        img1: require('../assets/images/onions.jpeg'),
        img2: require('../assets/images/onions.jpeg'),
        img3: require('../assets/images/onions.jpeg'),
        img4: require('../assets/images/onions.jpeg'),
        img5: require('../assets/images/onions.jpeg'),
        img6: require('../assets/images/onions.jpeg'),
        name: ['Onions', 'Onions Again', 'Chicken Masala', 'Fruits', 'Spices', 'Extra']
    };
    slide4Imgs = {
        img1: require('../assets/images/onions.jpeg'),
        img2: require('../assets/images/onions.jpeg'),
        img3: require('../assets/images/onions.jpeg'),
        img4: require('../assets/images/onions.jpeg'),
        img5: require('../assets/images/onions.jpeg'),
        img6: require('../assets/images/onions.jpeg'),
        name: ['Onions', 'Onions Again', 'Chicken Masala', 'Fruits', 'Spices', 'Extra']
    };
    arr1 = [this.slide1Imgs, this.slide2Imgs, this.slide3Imgs, this.slide4Imgs];
    mapArr1 = this.arr1.map((num1) => num1);
    arr = [this.slide1, this.slide2, this.slide3, this.slide4];
    mapSlide = this.arr.map((num) => num);


    createCats = () => {
        let cats = [];

        for (let j = 0; j < this.mapArr1.length; j++) {
            cats.push(<CatSlide {...this.mapArr1[j]}/>);
        }
        return cats;
    };


    createSlides = () => {
        let slides = [];

        for (let i = 0; i < this.mapSlide.length; i++) {
            slides.push(<Slider {...this.mapSlide[i]}/>);
        }
        return slides;
    };


    render() {

        return (
            <div className="Home1">
                <Header/>
                <br/>
                <div className="Slider">
                    <Fade {...fadeProperties}>
                        {this.createSlides()}
                    </Fade>

                </div>


                <div>
                    <h2 className="home-header-categories">iXpressMarket <strong
                        style={{'color': 'orange'}}>Categories</strong></h2>
                </div>
                <br/><br/>
                <div className="Slider">
                    <Zoom {...zoomProperties}>
                        {this.createCats()}
                    </Zoom>
                </div>

                <h2 className="home-header-new-products">New <strong style={{'color': 'orange'}}>Products</strong></h2>

                <div className="container">
                    <div className="row">
                        {this.createNewProducts()}
                    </div>
                </div>
                <h2 className="home-header-popular-products">Popular <strong
                    style={{'color': 'orange'}}>Products</strong></h2>

                <div className="container">
                    <div className="row">
                        {this.createPopularProducts()}
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        );
    }


}

export default Home1;