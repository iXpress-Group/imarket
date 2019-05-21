import React, {Component} from 'react';
import '../css/pages/product.css';

class Header extends Component {
    render() {
        return (
            <div>
                <img src={require('../assets/images/top.png')} alt=""/>
                <div className="top-nav-bar">
                    <div className="search-logo">
                        <img src={require("../assets/images/logo2.2.png")} className="logo"/>
                        <input type="text" placeholder="Let us help you get what you want" className="txtsrch"/>
                        <button type="button" className="btnsrch">Search</button>

                    </div>

                    {/*// <!-- ===========================================Cart=========================== -->*/}
                    <div className="menu-bar">
                        <div className="dropdown">
                            <button className="dropbtn"><i className="fa fa-shopping-basket"/>Cart</button>
                            <div className="dropdown-content">
                                <p>Your Cart is Empty.</p>
                                <button className="dropbtn-check"><i className="fa fa-shopping-basket"/>Checkout Your
                                    Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*// <!-- =============================main Menu================== -->*/}

                <div className="menu-main">
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a className="dropdown-toggle" href="">LOCAL MARKETS</a>
                            <ul>
                                <li><a href="">KIMIRONKO</a></li>
                                <li><a href="">NYABUGOGO</a></li>
                                <li><a href="">KIMISAGARA</a></li>
                                <li><a href="">NAMIRAMBO</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-toggle" href="">BUSINESSES</a>
                            <ul>
                                <li><a href="index2.html">KFAAM</a></li>
                                <li><a href="index2.html">TRUST INDUSTRIES</a></li>
                                <li><a href="index2.html">SIMBA</a></li>
                                <li><a href="index2.html">SAWA CITI</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-toggle" href="">RESTURANTS</a>
                            <ul>
                                <li><a href="index2.html">JAVA HOUSE</a></li>
                                <li><a href="index2.html">FIX TECH</a></li>
                                <li><a href="index2.html">THE FORKS</a></li>
                                <li><a href="index2.html">TINA BUFFET</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-toggle" href="">CONTACT</a>
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