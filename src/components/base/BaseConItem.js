import React from 'react';
import '../../static/css/baseConItem.less';
import conAvatar from '../../static/img/userImg.png';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      obj: {
        name: this.props.name, 
        tel: this.props.tel
      }
    } 
  }
  toggle = ()=> {
    this.setState({
      show: !this.state.show
    })
  }
  changeVal = (type, e)=> {
    let obj = this.state.obj;
    if(type === 'name') {
      obj.name = e.target.value;
    } else {
      obj.tel = e.target.value;
    }
    this.setState({
      obj
    })
  }
  save = ()=> {
    this.props.save(this.state.obj);
    this.toggle();
  }  
  cancel = ()=> { 
    this.setState({
      obj: {
        name: this.props.name, 
        tel: this.props.tel
      }
    })
    this.toggle();
  }
  render() {
    if(this.state.show) {
      return (<div className="li">
        <div>
          <div className="text">
            <img src={conAvatar} alt="avatar" />
            <div>
              <h1 className="name">{ this.props.name }</h1>
              <p className="tel">{ this.props.tel }</p>
            </div>
          </div>
          <div className="button edit" onClick={this.toggle}><i className="fa fa-edit"></i></div>
          <div className="button delete" onClick={this.props.delete}><i className="fa fa-trash-o"></i></div>
        </div >
      </div>);
    } else {
      return (<div className="li">
        <div v-else>
          <div className="text">
            <img src={conAvatar} alt="avatar" />
            <div>
              <input className="name" type="text" value={this.state.obj.name} onChange={(e)=> this.changeVal('name', e)} />
              <input className="tel" type="text" value={this.state.obj.tel} onChange={(e)=> this.changeTel('tel', e)} />
            </div>
          </div>
          <div className="button save" onClick={this.save}><i className="fa fa-check"></i></div>
          <div className="button return" onClick={this.cancel}> <i className="fa fa-times"></i></div >
        </div > 
      </div>);
    }
  }
}
