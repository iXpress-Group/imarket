import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/admin.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import AddProduct from '../pages/add_products';

class Admin extends Component {
// <script >$(document).ready(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active');
//     });
// });</script>
    render() {
        return (
            <div className='Admin'>
                <div className='admin-container'>
                    <Router>
                        <Route render={({location, history}) => (
                            <React.Fragment>
                                <SideNav
                                    onSelect={(selected) => {
                                        const to = '/' + selected;
                                        if (location.pathname !== to) {
                                            history.push(to);
                                        }
                                    }}
                                >
                                    <SideNav.Toggle/>
                                    <SideNav.Nav defaultSelected="home">
                                        <NavItem eventKey="admin/home">
                                            <NavIcon>
                                                <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                                            </NavIcon>
                                            <NavText>
                                                Home
                                            </NavText>
                                        </NavItem>
                                        <NavItem eventKey="admin/add-product">
                                            <NavIcon>
                                                {/*<i className="fa fa-fw fa-device" style={{fontSize: '1.75em'}}/>*/}
                                                <i className="fab fa-product-hunt" style={{fontSize: '1.75em'}}/>
                                            </NavIcon>
                                            <NavText>
                                                Add a Product
                                            </NavText>
                                        </NavItem>
                                        <NavItem eventKey="admin/charts">
                                            <NavIcon>
                                                <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
                                            </NavIcon>
                                            <NavText>
                                                Charts
                                            </NavText>
                                            <NavItem eventKey="admin/charts/linechart">
                                                <NavText>
                                                    Line Chart
                                                </NavText>
                                            </NavItem>
                                            <NavItem eventKey="admin/charts/barchart">
                                                <NavText>
                                                    Bar Chart
                                                </NavText>
                                            </NavItem>
                                        </NavItem>
                                    </SideNav.Nav>
                                </SideNav>
                                <main>
                                    <Route path="/admin/" exact component={props => <Header/>}/>
                                    <Route path="/admin/home" component={props => <Header/>}/>
                                    <Route path="/admin/add-product" component={props => <AddProduct/>}/>
                                </main>
                            </React.Fragment>
                        )}
                        />
                    </Router>
                </div>
            </div>
        );
    }
}

export default Admin;