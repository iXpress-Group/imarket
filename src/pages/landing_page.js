import React, {Component} from 'react';

import '../css/pages/landing_page.css';
import Header from '../components/header';
import Footer from '../components/footer';

class LandingPage extends Component {
    render() {
        return (
            <div className='Landing'>
                <Header/>

                <div className='w3-row'>
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

                <div className='w3-row'>
                    <div className="w3-col s6 m6 l6">
                        <img src={require('../assets/images/polypic.jpg')} alt=""/>
                    </div>
                    <div className="w3-col s6 m6 l6">
                        <div className='second-text'>
                            <h4>Are you exhausted daily with work. And worried of when and how to get things done?</h4>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default LandingPage;