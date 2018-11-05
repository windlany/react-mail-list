import React from 'react';
import '../../static/css/concats.less';
import ConItem from '../base/BaseConItem';

export default class Concats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concats: this.props.concats
    }
    this.radioArr = [
      {type: 'all', rn: '所有联系人'}, 
      {type: 'family', rn: '亲人'}, 
      {type: 'friend', rn: '朋友'}, 
      {type: 'class', rn: '同学'}
    ];
    this.selectIdx = 0;
  }
  delete = (index)=> { // 删除联系人
    this.props.delete(index); // 后期改为promise
  }
  save(index, obj) { // 保存对联系人的修改
    this.props.save(index, obj); // 后期改为promise
  }
  search = (e)=> {
    let val = e.target.value; 
    this.setState({
      concats: this.props.concats.filter(item=> {
        return item.name.indexOf(val) !== -1;
      })
    })
  }
  click = (type, index)=> { // 选项卡
    this.selectIdx = index;
    this.props.select(type);
  }
  componentDidMount() {
    this.props.select('all');
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      concats: nextProps.concats
    })
  }
  render() {
    return (<div className='concats'>
      <div className="search">
        <input type="text" placeholder="请输入搜索联系人" onChange={this.search} />
        <span><i className="fa fa-search"></i></span>
      </div>
      <p className="all">共有 { this.state.concats.length } 个联系人</p>
      <div className="select">
        {
          this.radioArr.map((item, index)=> {
            return <span>
              <input type="radio" name="contacts" 
                checked={this.selectIdx === index} 
                onClick={()=> this.click(item.type, index)} /> {item.rn}
            </span>
          })
        }
      </div>
      { 
        this.state.concats.length > 0 ? (
          <div className="ul">
          {
            this.state.concats.map((item, index)=> {
              return <ConItem {...item} key={index+item.name} index={index} save={(obj)=> this.save(index, obj)} delete={()=> this.delete(index)} />
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
