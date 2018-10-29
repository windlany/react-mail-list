import React from 'react';
import '../../static/css/baseInput.less'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warn: false
    };
    this.value = '';
  }
  focus = ()=> {
    this.setState({
      warn: true
    })
  }
  blur = ()=> {
    let ok = false;
    if(this.value.replace(/^\s*|\s*$/g, '')) {
      ok = true;
      this.setState({
        warn: false
      })
    }
  }
  change = (event)=> {
    this.value = event.target.value;
  }
  render() {
    return (<div className="input">
      <input type="text" placeholder={this.props.prompt} onFocus={this.focus} onBlur={this.blur} onChange={this.change} />
      { (this.state.warn || this.props.succ) && <em>{ this.props.warn }</em>}
    </div>)
  }
}

export default Input;
