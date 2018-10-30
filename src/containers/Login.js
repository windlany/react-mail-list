import React, { Component } from 'react';
import Input from '../components/base/BaseInput.js';
import Button from '../components/base/BaseButton';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [
        { prompt: '用户名' },
        { prompt: '密码' }
      ],
      btn: {
        prompt: '登  录',
        i: ''
      },
      status: true
    };
    this.inputValues = [];
  }
  getValue = (id, val)=> {
    this.inputValues[id] = val;
  }
  subCon = ()=> {
    if(this.inputValues[0] && this.inputValues[1]) {
      this.setState({
        status: true,
        btn: {
          prompt: '登  录',
          i: 'fa-spinner fa-spin'
        }
      })

      // get api...
    } else {
      this.setState({
        status: false
      })
    }
  }
  render() {
    return (<div className="Login" style={{paddingLeft: '40vw', textAlign: 'left'}}>
      {
        this.state.config.map((item, index)=> {
          return <Input {...item} id={index} key={index} getValue={this.getValue} />
        })
      }
      {!this.state.status && <em>*用户名或密码错误</em>}
      <Button sub={this.state.btn.prompt} i={this.state.btn.i} onClick={this.subCon} />
    </div>);
  }
}

export default Login;
