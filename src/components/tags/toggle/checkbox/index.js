import React from 'react';

import { Switcher } from '../switcher';

import styles from './index.css';

class CheckboxWithLabel extends React.Component{
  render(){
    //var checkedClass = this.state.checked?'checked':'';
    return (
      <div className={`${styles.root} ${this.props.className||''}`} onClick={this.onClick}>
      <Checkbox />
        {this.props.label}
      </div>
    );
  }
}

class Checkbox extends Switcher {
  constructor(){
    super(...arguments);
  }

  componentDidMount(){
    super.componentDidMount();
  }

  register(temp){
    var key = this.props.name;
    var cs = temp[key];
    if(Array.isArray(cs)){
      cs.push(this);
    }else if(cs){
      temp[key]=[cs,this];
    }else{
      temp[key]=[this];
    }
    return temp;
  }

  getValue(){
    return this.state.checked?this.props.value:null;
  }

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

Checkbox.canBindForm=(form)=>true;

class CheckboxWithoutBackground extends React.Component{
  render(){
    return ( <Checkbox className={`nobg ${this.props.className||''}`}/>);
  }
}

export { Checkbox , CheckboxWithLabel, CheckboxWithoutBackground};
