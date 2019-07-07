import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

import Header from '../components/header';
import Footer from '../components/footer';

// import CustomLayout from '../components/Layout';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAuth(
            values.userName,
            values.email,
            values.password,
            values.confirm
        );
        this.props.history.push('/');
      }
    });
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Passwords do not match!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    return (
          <div>
              <Header{...this.props}/>
              <div className='Login-page'>
                  <h1>Register an Account</h1>
                  <Form onSubmit={this.handleSubmit}>

                      <FormItem>
                          {getFieldDecorator('userName', {
                              rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                          )}
                      </FormItem>

                      <FormItem>
                          {getFieldDecorator('email', {
                              rules: [{
                                  type: 'email', message: 'The input is not valid E-mail!',
                              }, {
                                  required: true, message: 'Please input your E-mail!',
                              }],
                          })(
                              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                          )}
                      </FormItem>

                      <FormItem>
                          {getFieldDecorator('password', {
                              rules: [{
                                  required: true, message: 'Please input your password!',
                              }, {
                                  validator: this.validateToNextPassword,
                              }],
                          })(
                              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                          )}
                      </FormItem>

                      <FormItem>
                          {getFieldDecorator('confirm', {
                              rules: [{
                                  required: true, message: 'Please confirm your password!',
                              }, {
                                  validator: this.compareToFirstPassword,
                              }],
                          })(
                              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" onBlur={this.handleConfirmBlur} />
                          )}
                      </FormItem>

                      <FormItem>
                          <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                              Signup
                          </Button>
                          Or
                          <NavLink
                              style={{marginRight: '10px'}}
                              to='/login/'> login
                          </NavLink>
                      </FormItem>

                  </Form>
              </div>
              <Footer/>
          </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)),
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
