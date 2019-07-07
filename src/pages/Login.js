import React from 'react';
import {Form, Icon, Input, Button, Spin} from 'antd';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import * as actions from '../store/actions/auth';
import Header from '../components/header';
import Footer from '../components/footer';

// import CustomLayout from '../components/Layout';

import '../css/pages/login.css';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{fontSize: 24}} spin/>;


class Login extends React.Component {


    componentDidMount() {
        this.props.onTryAutoSignup();
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onAuth(values.userName, values.password);
                this.props.history.push('/');
            }
        });
    };

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Header{...this.props}/>
                {this.props.isAuthenticated?
                <div className='loggedIn'>
                    <p>You are logged in as {this.props.nameEras}</p>
                    <p>Go to our Products <Link to={'dev/products'}>here</Link></p>
                </div>
                    :
                    <div className='Login-page'>
                        <h1>LogIn Here</h1>
                        {errorMessage}
                        {
                            this.props.loading ?
                                <Spin indicator={antIcon}/>
                                :
                                <Form onSubmit={this.handleSubmit} className="login-form">

                                    <FormItem>
                                        {getFieldDecorator('userName', {
                                            rules: [{required: true, message: 'Please input your username!'}],
                                        })(
                                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                   placeholder="Username"/>
                                        )}
                                    </FormItem>

                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{required: true, message: 'Please input your Password!'}],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                   type="password" placeholder="Password"/>
                                        )}
                                    </FormItem>

                                    <FormItem>
                                        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                                            Login
                                        </Button>
                                        Or
                                        <NavLink
                                            style={{marginRight: '10px'}}
                                            to='/signup/'> signup
                                        </NavLink>
                                    </FormItem>
                                </Form>
                        }
                    </div>
                }
                <Footer/>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

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
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
