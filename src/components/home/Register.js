import React, { Component } from 'react';
import Input from '../base/BaseInput.js';
import Button from '../base/BaseButton';

import fetch from '../../api';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: [
        { prompt: '姓名', warn: '*姓名不能为空且只能由字母、数字、下划线组成', fail: false },
        { prompt: '手机号', warn: '*手机号全为数字', fail: false },
        { prompt: '密码（不少于6位）', warn: '*密码不能小于6位', fail: false },
      ],
      btn: {
        prompt: '注册速讯',
        i: ''
      }
    };
    this.inputValues = []; // 所有输入框的数据
  }
  getValue = (id, val)=> {
    this.inputValues[id] = val;
  }
  check() {
    let config = this.state.config;
    let succNum = config.filter((item, index)=> {
      let val = this.inputValues[index];
      if(!val) { // 输入框没有数据
        config[index].fail = true; 
      } else if(index === 2 && val.trim().length < 6) {
        config[index].fail = true;
      } else {
        config[index].fail = false;
      }
      return !config[index].fail;
    })

    this.setState({
      config: config
    })
    return succNum.length === this.state.config.length;
  }
  subCon = ()=> {
    if(this.check()) { // 验证成功
      this.setState({
        btn: {
          prompt: '正在注册',
          i: 'fa-spinner fa-spin'
        }
      });
      // post api...
      fetch.postData('http://127.0.0.1:7001/api/user/creation', {
        username: this.inputValues[0],
        psw: this.inputValues[2]
      }).then(()=> {
        this.setState({
          btn: {
            prompt: '注册成功',
            i: 'fa-check'
          }
        });
      }).catch(()=> {
        this.setState({
          btn: {
            prompt: '注册失败',
            i: 'fa-times'
          }
        });
      })
    }
  }
  render() {
    return (<div className="register">
      {
        this.state.config.map((item, index)=> {
          return <Input {...item} id={index} key={index} getValue = {this.getValue} />
        })
      }
      <Button sub={this.state.btn.prompt} i={this.state.btn.i} onClick={this.subCon} />
    </div>);
  }
}

export default Register;
