import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import request from 'superagent';


import App from '../App';

import Refer from '../pages/refer_a_friend';
import Product from '../pages/product';
import Details from '../pages/details';

class AppRouter extends Component{
 
    render(){
        return(
            <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>

            <Route exact path={"/"} component={App} />
            <Route exact path={"/dev/products"} component={Product} />
            <Route exact path={"/dev/product-details"} component={Details} />
            <Route exact path={"/dev/refer_a_friend"} component={Refer} />

        </Switch>
    </Router>


        );
    }
}

export default AppRouter;
