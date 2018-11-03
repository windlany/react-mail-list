import React from 'react';
import '../../static/css/add.less';
import '../../static/css/set.less';

export default function () {
  return (<div className="set">
  {/* 还需要加classname */}
    <h2>个人信息</h2>
    <div className="form">
      <label for="name">
        <span>姓名：</span>
        <input type="text" id="name" />
        <em v-show="nameIn">*姓名不能为空且只能由字母、数字、下划线组成</em>
      </label>
      <label for="tel">
        <span>电话号码：</span>
        <input type="text" id="tel" v-model="tel" />
        <em v-show="telIn">*不能为空且全部为数字</em>
      </label>
      <label for="psw">
        <span>密码：</span>
        <input type="text" id="psw" v-model="psw" />
        <em>*密码不少于6位且只能由字母、数字、下划线组成</em>
      </label>
      <label v-if="edit">
        <span></span>
        <button className="nomal large">编辑信息</button>
      </label>
      <label className="editing" v-else>
        <span></span>
        <button>保存</button>
        <button className="return">返回</button>
      </label>
    </div>
  </div>);
}