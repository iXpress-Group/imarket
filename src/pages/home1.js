import React, {Component} from 'react';
import '../css/pages/home1.css';
import '../css/pages/slider.css';
import Slider from '../components/slider';
import {Fade} from "react-slideshow-image";
import Header from '../components/header';
import Footer from '../components/footer';
import CatSlide from '../components/cat_slide';
import {Slide} from 'react-slideshow-image';

// import ProductComponent from "../components/product_component";

const fadeProperties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false
};

const slideProperties = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false
};


class Home1 extends Component {

    constructor(props) {
        super(props);
    }

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
        img2: require('../assets/images/onions_alt.jpeg'),
        img3: require('../assets/images/Chicken-Masala2.1.jpg'),
        img4: require('../assets/images/Fruits2.jpg'),
        img5: require('../assets/images/Seasoning _ Spices.jpg'),
    };
    slide2Imgs = {
        img1: require('../assets/images/onions.jpeg'),
        img2: require('../assets/images/onions.jpeg'),
        img3: require('../assets/images/onions.jpeg'),
        img4: require('../assets/images/onions.jpeg'),
        img5: require('../assets/images/onions.jpeg'),
    };
    slide3Imgs = {
        img1: require('../assets/images/onions.jpeg'),
        img2: require('../assets/images/onions.jpeg'),
        img3: require('../assets/images/onions.jpeg'),
        img4: require('../assets/images/onions.jpeg'),
        img5: require('../assets/images/onions.jpeg'),
    };
    arr1 = [this.slide1Imgs, this.slide2Imgs, this.slide3Imgs];
    mapArr1 = this.arr1.map((num1) => num1);
    arr = [this.slide1, this.slide2, this.slide3, this.slide4];
    mapSlide = this.arr.map((num) => num);



    createCats = () => {
        let cats = [];

        for (let i = 0; i < this.mapArr1.length; i++) {
            cats.push(<CatSlide {...this.mapArr1[i]}/>)
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
                    <h2 className="home-header-categories">iXpressMarket <strong>Categories</strong></h2>
                </div>
                <br/><br/>
                <div>
                    <Slide {...slideProperties}>
                    {this.createCats()}
                    </Slide>
                </div>
                <br/>
                <Footer/>
            </div>
        );
    }


}

export default Home1;