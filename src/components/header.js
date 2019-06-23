import React, {Component} from 'react';
import '../css/pages/header.css';
import axios from "axios";
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cList: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            axios
                .get("https://engineersticity.pythonanywhere.com/api/cart/")
                .then(res => this.setState({cList: res.data, uploaded: false}))
                .catch(err => console.log(err));
        }, 100);
    }

    ex = () => {
        const {viewItem} = this.state;
        const newItems = this.state.cList.filter(
            item => item.complete === viewItem
        );
        return newItems.length;
    };
    ex1 = () => {
        const {viewItem} = this.state;
        const newItems = this.state.cList.filter(
            item => item.complete === viewItem
        );
        return newItems.map(item => (
            <li>
                <div className='w3-row '>
                    <div className='w3-col s4 m4 b4 '>
                        <img className='cartListimg' src={item.image} alt=""/>
                    </div>
                    <div className='w3-col s4 m4 b4'>
                        {item.name}
                    </div>
                    <div className='w3-col s4 m4 b4'>
                        {item.price}
                    </div>
                </div>
            </li>
        ))
    };

    render() {
        return (
            <div>
                <img src={require('../assets/images/top.png')} alt=""/>
                <div className="top-nav-bar">
                    <div className="search-logo">
                        <img src={require("../assets/images/logo2.2.png")} className="logo" alt={''}/>
                        <input type="text" placeholder="Let us help you get what you want" className="txtsrch"/>
                        <button type="button" className="btnsrch">Search</button>

                    </div>

                    {/*// <!-- ===========================================Cart=========================== -->*/}
                    <div className="menu-bar">
                        <div className="dropdown">
                            <button className="dropbtn"><i className="fa fa-shopping-basket"/>Cart <sup
                                style={{color: 'black'}}>{this.ex()}</sup></button>
                            <div className="dropdown-content">
                                <div className='cartItemsContainer'>{this.ex() > 0 ?
                                    <ol className='cartListItems'>
                                        {this.ex1()}
                                    </ol> :
                                    <p>Your Cart is Empty </p>}
                                </div>
                                <Link to={'/checkout'}>
                                    <button className="dropbtn-check"><i className="fa fa-shopping-basket"/>Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/*// <!-- =============================main Menu================== -->*/}

                <div className="menu-main">
                    <ul>
                        <li><a href="index2.html">HOME</a></li>
                        <li><a className="dropdown-toggle" href="index2.html">LOCAL MARKETS</a>
                            <ul>
                                <li><a href="index2.html">KIMIRONKO</a></li>
                                <li><a href="index2.html">NYABUGOGO</a></li>
                                <li><a href="index2.html">KIMISAGARA</a></li>
                                <li><a href="index2.html">NAMIRAMBO</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-toggle" href="index2.html">BUSINESSES</a>
                            <ul>
                                <li><a href="index2.html">KFAAM</a></li>
                                <li><a href="index2.html">TRUST INDUSTRIES</a></li>
                                <li><a href="index2.html">SIMBA</a></li>
                                <li><a href="index2.html">SAWA CITI</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-toggle" href="index2.html">RESTURANTS</a>
                            <ul>
                                <li><a href="index2.html">JAVA HOUSE</a></li>
                                <li><a href="index2.html">FIX TECH</a></li>
                                <li><a href="index2.html">THE FORKS</a></li>
                                <li><a href="index2.html">TINA BUFFET</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-toggle" href="index2.html">CONTACT</a>
                            <ul>
                                <li><a href="index2.html">TRADER'S</a></li>
                                <li><a href="index2.html">iXPRESS</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;