import React, {Component} from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Countdown from '../components/countdown';
import Demo from '../components/location';

import '../css/pages/home.css';

import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header/>
                <br/>

                <div className="home-container">
                    <Countdown date={`2019-06-30T00:00:00`}/>
                    <p className="home-comingsoon">Coming soon!!!</p>

                    <img className="home-img" src={require('../assets/images/coverpage.png')} alt=""/>
                    <p>This is the homepage. Click <Link className='home-link' to={'login'}>here</Link> to go to
                        login</p>
                    <p>This is the homepage. Click <Link className='home-link' to={'dev/products'}>here</Link> to go to
                        the products page</p>
                    <p>This is the homepage. Click <Link className='home-link' to={'dev/refer_a_friend'}>here</Link> to
                        go to
                        the refer a friend page</p>

                    <p>
                        <Demo/>
                    </p>


                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;