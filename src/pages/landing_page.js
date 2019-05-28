import React, {Component} from 'react';

import '../css/pages/landing_page.css';
import Header from '../components/header';
import Footer from '../components/footer';

class LandingPage extends Component {
    render() {
        return (
            <div className='Landing'>
                <Header/>

                <div className='w3-row row1'>
                    <div className='w3-col s6 m6 l6'>
                        <div className='first-text'>
                            <h2>Welcome to Your Grocery Marketplace</h2>
                        </div>
                    </div>
                    <div className='w3-col s6 m6 l6'>
                        <div className='first-img'>
                            <img src={require('../assets/images/marketplace.jpg')} alt=""/>
                        </div>
                    </div>
                </div>

                <div className='w3-row row1'>
                    <div className="w3-col s6 m6 l6">
                        <img src={require('../assets/images/polypic.jpg')} alt=""/>
                    </div>
                    <div className="w3-col s6 m6 l6">
                        <div className='second-text'>
                            <h4>Are you exhausted daily with work. And worried of when and how to get things done?</h4>
                        </div>
                    </div>
                </div>

                <div className='third-text'>
                    <h2 className='third-text-h2'>“At iXpress Market, we believe you deserve Rest, Happiness and Joy for
                        all the work you’ve done
                        today.”</h2>
                </div>

                <div className='Rest'>
                    <h2 className='landing-rest-h2'>Now rest!</h2>
                    <div className='landing-rest-div'>
                        <img className='landing-rest-img' src={require('../assets/images/rest.jpg')} alt=""/>
                    </div>

                    <div className="w3-row rest-row">
                        <div className="w3-col s4 m4 l4">
                            <div className='rest-img-div'>
                                <img className='rest-img' src={require('../assets/images/device.png')} alt=""/>
                            </div>
                            <div className="rest-h4">
                                <h4>YOU SHOP WITH YOUR DEVICE </h4>
                            </div>
                        </div>
                        <div className="w3-col s4 m4 l4">
                            <div className="rest-img-div">
                                <img className='rest-img' src={require('../assets/images/shop-market.png')} alt=""/>
                            </div>
                            <div className="rest-h4">
                                <h4>we collect from market </h4>
                            </div>
                        </div>
                        <div className="w3-col s4 m4 l4">
                            <div className="rest-img-div">
                                <img className='rest-img' src={require('../assets/images/deliver1.png')} alt=""/>
                            </div>
                            <div className="rest-h4">
                                <h4>get order in 45 minutes </h4>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default LandingPage;