import React from 'react';
import { Link } from 'react-router';
import '../../static/css/list.less';
import avtar from '../../static/img/contact.jpg';

export default function (props) {
  return (<div className='list'>
    <div className="head">
      <div className="logo">速讯</div>
      <div className="welcome">
        <span className="name">{ }</span>，你好
        <div className="img">
          <img src={avtar} alt="avatar" />
        </div>
      </div>
    </div>
    <div className="lside">
      <ul>
        <li>
          <Link to="/list"><i className="fa fa-address-book-o"></i> 通讯录</Link>
        </li>
        <li>
          <Link to="/add"><i className="fa fa-reorder"></i> 添加信息</Link>
        </li>
        <li>
          <Link to="/set"><i className="fa fa-user-o"></i> 个人中心</Link>
        </li>
      </ul >
      <div className="out">
        <i className="fa fa-cog"></i> 退出登录
      </div >
    </div >
    <div className="rside">
      { props.children }
    </div >
  </div >);
}
