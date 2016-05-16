import React from 'react';

import styles from './style.css';

//import {ChannelIcon} from '../channel';
import {Status} from './status';
const {BaseStatus }=Status;
const {cloneElement} = React;

class Avatar extends React.Component {
  //shouldComponentUpdate(nextProps,nextState){
    //return false;
  //}
  render() {
    let children = null;
    if(this.props.children){
      //console.log(this.props.children);
      children = React.Children.map(this.props.children,(child)=>{
        //console.log(child.type);
        //console.log(BaseStatus);
        if(child.type==BaseStatus){
          //console.log('baseStatus');

        }
        return cloneElement(child,{className:`${child.props.className} avatar-channel`});
      });
    }

    return (
      <div className={`${styles.root} ${this.props.className||''}`} onClick={this.props.onClick}>
        <img src="http://static.hdslb.com/images/member/noface.gif" className="photo"/>
        {children}
      </div>
    );
  }
}

Avatar.Small = function(props){
  return (
    <Avatar className={`small ${props.className||''}`} {...props}/>
  );
}

export { Avatar };

