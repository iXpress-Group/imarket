import React, {Component} from 'react';
import '../css/pages/admin.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import AddProduct from '../pages/add_products';
import AdminHome from '../pages/admin_home';
import AddCats from '../pages/add_categories';

class Admin extends Component {
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
                                        <NavItem eventKey="admin/add-category">
                                        <NavIcon>
                                            <i className="fas fa-sitemap" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Add a category
                                        </NavText>
                                    </NavItem>
                                        <NavItem eventKey="admin/charts">
                                            <NavIcon>
                                                <i className="fas fa-chart-area" style={{fontSize: '1.75em'}}/>
                                            </NavIcon>
                                            <NavText>
                                                Charts
                                            </NavText>
                                            <NavItem eventKey="admin/charts/linechart">
                                                <NavIcon>
                                                    <i className="fas fa-chart-line" style={{fontSize: '1.75em'}}/>
                                                </NavIcon>
                                                <NavText>
                                                    Line Chart
                                                </NavText>
                                            </NavItem>
                                            <NavItem eventKey="admin/charts/barchart">
                                                <NavIcon>
                                                    <i className="fas fa-chart-bar" style={{fontSize: '1.75em'}}/>
                                                </NavIcon>
                                                <NavText>
                                                    Bar Chart
                                                </NavText>
                                            </NavItem>
                                        </NavItem>
                                    </SideNav.Nav>
                                </SideNav>
                                <main>
                                    <Route path="/admin/" exact component={props => <AdminHome/>}/>
                                    <Route path="/admin/home" component={props => <AdminHome/>}/>
                                    <Route path="/admin/add-product" component={props => <AddProduct/>}/>
                                    <Route path="/admin/add-category" component={props => <AddCats/>}/>
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