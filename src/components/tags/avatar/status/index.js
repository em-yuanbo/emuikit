import React from 'react';

import Styles from './style.css';

class BaseStatus extends React.Component{

  render(){
    //console.log('basestatus',this.props.className);
    return (
      <div className={`${Styles.root} ${this.props.className||''}`} onClick={this.props.onClick}>
      </div>
    );
  }
}

function onLineStatus(status,props){
  //console.log(...arguments);
  status = Object.assign(status,props);
  let className = status.onLine?'on-line':'off-line';
  className = `${status.className||''} ${className}`;
  //console.log(className);
  return (
    <BaseStatus {...status} className={className} onClick={props.onClick}/>
  );
}

const Status = {
  OnLine:onLineStatus.bind(Status,{onLine:true}),
  OffLine:onLineStatus.bind(Status,{onLine:false}),
  BaseStatus
};

export {Status};

