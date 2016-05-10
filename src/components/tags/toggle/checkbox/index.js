import React from 'react';

import { Switcher } from '../switcher';

import styles from './index.css';

class CheckboxWithLabel extends React.Component{
  render(){
    var checkedClass = this.state.checked?'checked':'';
    return (
      <div className={`${styles.root} ${this.props.className||''}`} onClick={this.onClick}>
      <Checkbox />
        {this.props.label}
      </div>
    );
  }
}

class Checkbox extends Switcher {
  render(){
    var checkedClass = this.state.checked?'checked':'';
    return (
      <div className={`${styles.root} ${checkedClass} ${this.props.className||''}`} onClick={this.onClick}>
        <div className="bg">
          <div className="flag">r</div>
        </div>
      </div>
    );
  }
}
class CheckboxWithoutBackground extends React.Component{
  render(){
    return ( <Checkbox className={`nobg ${this.props.className||''}`}/>);
  }
}

export { Checkbox , CheckboxWithLabel, CheckboxWithoutBackground};
