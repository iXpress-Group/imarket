import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { ScrollContext } from 'react-router-scroll-4';
// import request from 'superagent';


// import App from '../App';
import Refer from '../pages/refer_a_friend';
import Product from '../pages/product';
import Details from '../pages/details';
import Home1 from '../pages/home1';
import Home from '../pages/home';
import LandingPage from '../pages/landing_page';
import AddProduct from '../pages/add_products';
import Admin from '../pages/admin';
import ProductList from '../pages/checkoutpage';

import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import LoginCall from "../pages/loginCall";

class AppRouter extends Component{
 
    render(){
        return(
            <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>

            <Route exact path={"/"} component={LandingPage} />
            <Route exact path={"/dev/products"} component={Product} />
            <Route exact path={"/dev/product-details/:stuff"} component={Details} />
            <Route exact path={"/dev/refer_a_friend"} component={Refer} />
            <Route exact path={"/dev/home"} component={Home1} />
            <Route exact path={"/dev/landing"} component={LandingPage}/>
            <Route exact path={"/dev/add_products"} component={AddProduct}/>
            <Route exact path={"/admin"} component={Admin}/>
            <Route exact path={"/checkout"} component={ProductList}/>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/signup"} component={Signup} />

        </Switch>
    </Router>


        );
    }
}

export default AppRouter;
