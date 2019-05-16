import React, {Component} from 'react';
import '../css/pages/details.css';
import Header from '../components/header'
import Footer from '../components/footer'


class Details extends Component{
    render() {
        return(
            <div className="Details">
                <Header/>
                <div className="details-container">
                    <p>The details of the product will be here</p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Details;