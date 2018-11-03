import React from 'react';
import '../../static/css/concats.less';
import ConItem from '../base/BaseConItem';

export default class Concats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concats: [] // 显示的联系人
    }
    this.filter = 'all';
  }
  getVisibleConcats = (filter)=> { // 获取该选项的内容
    return this.props.concats.filter(item=> {
      if(filter === 'all') return item;
      return item.relative === filter;
    });
  }
  select = (filter)=> { // 选项卡
    this.filter = filter;
    this.setState({
      concats: this.getVisibleConcats(this.filter)
    })
  }
  delete = (index)=> { // 删除联系人
    this.props.delete(index); // 后期改为promise
    this.setState({
      concats: this.getVisibleConcats(this.filter)
    })
  }
  save(index, obj) { // 保存对联系人的修改
    this.props.save(index, obj); // 后期改为promise
    this.setState({
      concats: this.getVisibleConcats(this.filter)
    })
  }
  search = (e)=> {
    let val = e.target.value; 
    this.setState({
      concats: this.getVisibleConcats(this.filter).filter(item=> {
        return item.name.indexOf(val) != -1;
      })
    })
  }
  componentDidMount() {
    this.select('all');
  }
  render() {
    return (<div className='concats'>
      <div className="search">
        <input type="text" placeholder="请输入搜索联系人" onChange={this.search} />
        <span><i className="fa fa-search"></i></span>
      </div>
      <p className="all">共有 { this.props.concats.length } 个联系人</p>
      <div className="select">
        <input type="radio" name="contacts" onClick={()=> this.select('all')} />所有联系人
        <input type="radio" name="contacts" onClick={()=> this.select('family')} />亲人
        <input type="radio" name="contacts" onClick={()=> this.select('friend')} />朋友
        <input type="radio" name="contacts" onClick={()=> this.select('class')} />同学
      </div>
      { 
        this.state.concats.length > 0 ? (
          <div className="ul">
          {
            this.state.concats.map((item, index)=> {
              return <ConItem {...item} key={index} index={index} save={(obj)=> this.save(index, obj)} delete={()=> this.delete(index)} />
            })
          }
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
