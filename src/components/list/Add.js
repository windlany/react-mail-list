import React from 'react';
import '../../static/css/add.less';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valArr: ['', '', 'friend']
    }
  }
  change = (index, e)=> {
    let arr = this.state.valArr;
    arr[index] = e.target.value;
    this.setState({
      valArr: arr
    }) 
  }
  isValidate() {
    return !(/\W/g.test(this.state.valArr[0]) || /\D/g.test(this.state.valArr[1]));
  }
  submit = ()=> {
    if(this.isValidate()) {
      this.props.add({ 
        relative: this.state.valArr[2], 
        name: this.state.valArr[0], 
        tel: this.state.valArr[1]
      });
      this.setState({
        valArr: ['', '', '']
      })
    } else {
      alert('请按标准输入！');
    }
  }
  render () {
    return (<div className="add">
      <h2>添加联系人</h2>
      <div className="form">
        <label>
          <span>姓名</span>
          <input type="text" id="name" autoComplete='off' placeholder="请输入姓名" value={this.state.valArr[0]} onChange={(e)=> this.change(0, e)} />
          { /\W/g.test(this.state.valArr[0]) && <em>*姓名不能为空且只能由字母、数字、下划线组成</em> }
        </label>
        <label>
          <span>电话号码</span>
          <input type="text" id="tel" autoComplete='off' placeholder="请输入电话号码" value={this.state.valArr[1]} onChange={(e)=> this.change(1, e)} />
          { /\D/g.test(this.state.valArr[1]) && <em>*不能为空且全部为数字组成</em> }
        </label>
        <label>
          <span>与我的关系</span>
          <select value={this.state.valArr[2]} onChange={(e)=> this.change(2, e)}>
            <option value='friend'>朋友</option>
            <option value='family'>亲人</option>
            <option value='class'>同学</option>
          </select>
        </label>
        <label>
          <span></span>
          <div className='button nomal' onClick={this.submit}>添  加</div>
        </label>
      </div>
    </div>);
  }
}
