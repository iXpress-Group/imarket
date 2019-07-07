import React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {Link, withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';

// const {Header, Content, Footer} = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">

                <div className="logo"/>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['']}
                    style={{lineHeight: '64px'}}
                >

                    {
                        this.props.isAuthenticated ?

                            <Menu.Item key="2" onClick={this.props.logout}>
                                Logout
                            </Menu.Item>

                            :

                            <Menu.Item key="2">
                                <NavLink to="/login">Login</NavLink>
                            </Menu.Item>
                    }

                    <Menu.Item key="1">
                        <Link to="/">My Account</Link>
                    </Menu.Item>

                </Menu>
                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                    {this.props.children}
                </div>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));