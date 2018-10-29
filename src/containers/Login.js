import React, { Component } from 'react';
import Input from '../components/base/BaseInput.js';
import Button from '../components/base/BaseButton';

class Login extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (<div className="Login">
      <Input prompt="用户名"/>
      <Input prompt="密码"/>
      <Button sub="登  录" />
    </div>);
  }
}

export default Login;
