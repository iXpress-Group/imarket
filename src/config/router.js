import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { ScrollContext } from 'react-router-scroll-4';
// import request from 'superagent';


import App from '../App';

import Refer from '../pages/refer_a_friend';
import Product from '../pages/product';
import Details from '../pages/details';
import Home1 from '../pages/home1';
import LandingPage from '../pages/landing_page';
import AddProduct from '../pages/add_products';

class AppRouter extends Component{
 
    render(){
        return(
            <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>

            <Route exact path={"/"} component={App} />
            <Route exact path={"/dev/products"} component={Product} />
            <Route exact path={"/dev/product-details/:stuff"} component={Details} />
            <Route exact path={"/dev/refer_a_friend"} component={Refer} />
            <Route exact path={"/dev/home"} component={Home1} />
            <Route exact path={"/dev/landing"} component={LandingPage}/>
            <Route exact path={"/dev/add_products"} component={AddProduct}/>

        </Switch>
    </Router>


        );
    }
}

export default AppRouter;
