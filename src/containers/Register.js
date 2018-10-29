import React, { Component } from 'react';
import Input from '../components/base/BaseInput.js';
import Button from '../components/base/BaseButton';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [
        { id: 0, prompt: '姓名', warn: '*姓名不能为空且只能由字母、数字、下划线组成', succ: false},
        { id: 1, prompt: '手机号', warn: '*手机号全为数字', succ: false},
        { id: 2, prompt: '密码（不少于6位）', warn: '*密码不能小于6位', succ: false},
      ]
    };
  }
  subCon = ()=> {
    
  }
  render() {
    return (<div className="register">
      {
        this.state.config.map(item=> {
          return <Input {...item} id={item.id} key={item.id} />
        })
      }
      <Button sub="注册速讯" onClick={this.subCon} />
    </div>);
  }
}

export default Register;
