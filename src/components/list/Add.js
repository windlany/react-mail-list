import React from 'react';
import '../../static/css/add.less';

export default function () {
  return (<div className="add">
    <h2>添加联系人</h2>
    <div className="form">
      <label for="name">
        <span>姓名</span>
        <input type="text" id="name" placeholder="请输入姓名" />
        <em>*姓名不能为空且只能由字母、数字、下划线组成</em>
      </label>
      <label for="tel">
        <span>电话号码</span>
        <input type="text" id="tel" placeholder="请输入电话号码" />
        <em>*不能为空且全部为数字组成</em>
      </label>
      <label>
        <span>与我的关系</span>
        <select>
          <option selected>朋友</option>
          <option>亲人</option>
          <option>同学</option>
        </select>
      </label>
      <label>
        <span></span>
        <div className='button nomal btn'>添  加</div>
      </label>
    </div>
  </div>);
}
