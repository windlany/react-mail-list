import React from 'react';
import '../../static/css/baseButton.css';

export default function (props) {  
  return (<div className="button" onClick={props.onClick}>
    { props.sub } <i></i>
  </div>)
}