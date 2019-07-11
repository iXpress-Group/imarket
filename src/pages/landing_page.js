import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../css/pages/landing_page.css';
import Footer from '../components/footer';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className='Landing'>
                    <div className='landing-header'>
                        <div className="w3-row">
                            <div className="w3-col s12 m6 l6">
                                <img src={require('../assets/new/logo2.2.png')} alt=""/>
                            </div>
                            <div className="w3-col s12 m6 l6">
                                <button><em>Shop here</em></button>
                            </div>
                        </div>
                    </div>
                    <div className='w3-row row1'>
                        <div className='w3-col s6 m6 l6'>
                            <div className='first-text'>
                                <h2><em>Welcome to Your Grocery Market-place</em></h2>
                            </div>
                        </div>
                        <div className='w3-col s6 m6 l6'>
                            <div className='first-img'>
                                <img src={require('../assets/new/kimirnoko1.1.jpg')} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className='w3-row row2'>
                        <div className="w3-col s6 m6 l6">
                            <img src={require('../assets/new/workingwoman.jpg')} alt=""/>
                        </div>
                        <div className="w3-col s6 m6 l6">
                            <div className='second-text'>
                                <h4><em>Are you exhausted daily with work and wishing someone would make your daily
                                    purchses
                                    as you rest?</em></h4>
                            </div>
                        </div>
                    </div>

                    <div className='third-text'>
                        <h2 className='third-text-h2'><em>“At iXpress Market we believe you deserve absolute rest as a
                            person regardless of your income, either as a Farmer, Student, Lecturer, business person,
                            etc.” </em></h2>
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
                    <hr/>

                    <div className='vendors'>
                        <h2>SHOP YOUR FAVOURITE PRODUCTS AT THE SAME PRICE</h2>
                        <h3><em>JUST PAY FOR TRANSPORT</em></h3>
                        <div className="w3-row">
                            <div className="w3-col s12 m4 l4">
                                <div className='vendor-examples'>
                                    <img src={require('../assets/new/kimirnoko1.1.jpg')} alt=""/>
                                    <h3>Local Market</h3>
                                </div>
                            </div>
                            <div className="w3-col s12 m4 l4">
                                <div className='vendor-examples'>
                                    <img src={require('../assets/new/fixtech1.1.jpg')} alt=""/>
                                    <h3>Restaurant</h3>
                                </div>
                            </div>
                            <div className="w3-col s12 m4 l4">
                                <div className='vendor-examples'>
                                    <img src={require('../assets/new/simab1.1.jpg')} alt=""/>
                                    <h3>Supermarket</h3>
                                </div>
                            </div>
                        </div>
                        <div className='shop-button'>
                            <Link to={'/dev/products'}>
                                <button><em>shop now</em></button>
                            </Link>
                        </div>
                    </div>
                    <hr/>
                    <div className='family'>
                        <div className="w3-row">
                            <div className="w3-col s12 m6 l6">
                                <div className='family-div'>
                                    <p><em>“We only exist to make our customers happy. So spend your time with family &
                                        friends.”</em></p>
                                </div>
                            </div>
                            <div className="w3-col s12 m6 l6">
                                <div className='family-div'>
                                    <img src={require('../assets/new/family.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='end'>
                        <img src={require('../assets/new/relexicon.png')} alt=""/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LandingPage;