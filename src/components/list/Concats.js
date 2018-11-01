import React from 'react';
import '../../static/css/concats.less';

export default class Concats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityRelative: 'all',
      concats: [],
      select: 0
    }
    this.radioInputs = [
      { title: '所有联系人', relative: 'all'},
      { title: '亲人', relative: 'family'},
      { title: '朋友', relative: 'friend'},
      { title: '同学', relative: 'class'}
    ]
  }
  setVisibleRelative = (filter, index) => { // 选择
    this.setState({
      visibilityRelative: filter,
      select: index
    })
    this.getVisibleConcats(filter);
  }
  getVisibleConcats(filter) { // 获取该选项的内容
    let selectConcats = this.props.concats.filter(item=> {
      if(filter === 'all') {
        return item;
      }
      return item.relative === filter;
    })
    this.setState({
      concats: selectConcats
    })
  }
  componentDidMount() {
    this.getVisibleConcats('all');
  }
  render() {
    return (<div className='concats'>
      <div className="search">
        <input type="text" placeholder="请输入搜索联系人" /><span><i className="fa fa-search"></i></span>
      </div>
      <p className="all">共有 { this.state.concats.length } 个联系人</p>
      <div className="select">
      {
        this.radioInputs.map((item, index) => {
          return (<span>
            <input type="radio" name="contacts" 
              checked={index===this.state.select? 'checked' : ''} 
              onClick={()=> this.setVisibleRelative(item.relative, index)} />{item.title}
          </span>);
        })
      }
      </div>
      { 
        this.state.concats.length > 0 ? (
          <div className="ul">
            {/* <contactItem />  */}
          </div>) 
          : <p className="none"> 没有联系人 </p>
      }
      <div className="arrow">
        <a href="#search">
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
    </div>);
  }
}