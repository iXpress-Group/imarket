import React, {Component} from 'react';
import '../css/pages/header.css';
import axios from "axios";
import {Link, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';

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
                .get("https://benedict1.pythonanywhere.com/api/cart/")
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
                <div className='top-header-row'>
                    <ul className='footer-social-ul'>
                        {this.props.isAuthenticated ?
                            <li><i className="fas fa-user-circle"/> Welcome {this.props.nameEras}</li>
                            :
                            null
                        }

                        {this.props.isAuthenticated ?
                            <Link className='footer-links' to={''}>
                            <li><i className="fas fa-user-circle"/> Account</li>
                        </Link>
                            :
                            <Link className='footer-links' to={'/signup'}>
                                <li><i className="fas fa-user-circle"/> Register</li>
                            </Link>
                        }

                        {this.props.isAuthenticated ?
                            <li className='logout-header' onClick={this.props.logout}><i className="fas fa-sign-in-alt"/> Logout</li>
                            :
                            <Link className='footer-links' to={'/login'}>
                                <li><i className='fas fa-user-plus'/> LogIn</li>
                            </Link>
                        }
                    </ul>
                </div>
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

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null,
        nameEras:state.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        logout: () => dispatch(actions.logout())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));