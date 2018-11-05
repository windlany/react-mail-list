import React from 'react';
import '../../static/css/add.less';
import '../../static/css/set.less';

export default class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valArr: [this.props.name, this.props.tel, this.props.psw], // 这里的设计应改为obj
      show: true
    }
  }
  change = (index, e) => {
    let arr = this.state.valArr;
    arr[index] = e.target.value;
    this.setState({
      valArr: arr
    }) 
  }
  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }
  save = ()=> {
    this.props.set({
      name: this.state.valArr[0],
      tel: this.state.valArr[1],
      psw: this.state.valArr[2]
    });
    this.toggle();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      valArr: [nextProps.name, nextProps.tel, nextProps.psw]
    })
  }
  render () {
    return (<div className="add set">
      <h2>个人信息</h2>
      <div className="form">
        <label>
          <span>姓名：</span>
          <input type="text" id="name" autoComplete='off' disabled={this.state.show} value={this.state.valArr[0]} onChange={(e)=> this.change(0, e)} />
          { /\W/g.test(this.state.valArr[0]) && <em>*姓名不能为空且只能由字母、数字、下划线组成</em> }
        </label>
        <label>
          <span>电话号码：</span>
          <input type="text" id="tel" autoComplete='off' disabled={this.state.show} value={this.state.valArr[1]} onChange={(e)=> this.change(1, e)} />
          { /\D/g.test(this.state.valArr[1]) && <em>*不能为空且全部为数字</em> }
        </label>
        <label>
          <span>密码：</span>
          <input type="text" id="psw" autoComplete='off' disabled={this.state.show} value={this.state.valArr[2]} onChange={(e)=> this.change(2, e)} />
          { ((this.state.valArr[2].length < 6) || (/\W/g.test(this.state.valArr[2]))) && <em>*密码不少于6位且只能由字母、数字、下划线组成</em> }
        </label>
        { 
          this.state.show && <label>
            <span></span>
            <div className="button nomal large" onClick={this.toggle}>编辑信息</div>
          </label>
        }
        {
          !this.state.show && <label className="editing">
            <span></span>
            <div className="button save" onClick={this.save}>保存</div>
            <div className="button return" onClick={this.toggle}>返回</div>
          </label>
        }
      </div>
    </div>);
  }
}