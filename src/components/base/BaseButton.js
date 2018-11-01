import React from 'react';
import '../../static/css/baseButton.less';

export default function (props) {  
  return (<div className="button" onClick={props.onClick}>
    { props.sub } <i className={'fa ' + props.i}></i>
  </div>)
}