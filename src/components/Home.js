import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import '../static/css/home.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.style = {
      color: '#0f88eb',
      opacity: 1,
      borderBottom: '2px solid',
      paddingBottom: '5px'
    };
  }
  render() {
    return (<div id="contain">  
      <h1>速  讯</h1>
      <h2>拉近我们心灵的距离，感知爱与牵绊</h2>
      <div className="btns">
          <IndexLink to="/" className="btn" activeStyle={this.style}>注册</IndexLink>
          <Link to="/login" activeStyle={this.style}>登录</Link>
      </div>
      { this.props.children } 
    </div>);
  }
}

export default Home;
