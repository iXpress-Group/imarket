import React, {Component} from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import '../css/pages/home.css';

import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header/>
                <div className="home-container">
                    <img className="home-img" src={require('../assets/images/coverpage.png')} alt=""/>

                    <p>This is the homepage. Click <Link className='home-link' to={'dev/products'}>here</Link> to go to
                        the products page</p>
                    <p>This is the homepage. Click <Link className='home-link' to={'dev/refer_a_friend'}>here</Link> to go to
                        the refer a friend page</p>


                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;