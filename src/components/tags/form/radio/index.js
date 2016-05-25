import React from 'react';
import styles from './style.css';

import {store,dispatcher} from '../utils';

class Radio extends React.Component {
  constructor(){
    super(...arguments);
    this.state={checked:this.props.checked};
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    if(this.props.checked){
      console.log(this.props);
      dispatcher.dispatch({
        type:'own',
        name:this.props.name,
        value:this.props.value,
      });
    }
  }

  onClick(){
    dispatcher.dispatch({
      type:'own',
      name:this.props.name,
      value:this.props.value,
    });
  }
  register(temp){
    var key = this.props.name;
    temp[key]=this;
    return temp;
  }
  getValue(){
    return store.getState()[this.props.name];
  }
  //getValue(){
    //return store.getState()[this.props.name];
  //}

  componentDidMount(){
    store.addListener( this.onChange );
    if(this.props.form){
      this.props.form.register(this);
    }
  }
  componentWillUnmount(){
    store.removeListener( this.onChange );
  }

  onChange(){
    //if(this.isMounted()){
      var state = store.getState();
      var checked = state[this.props.name]==this.props.value;
      if(this.state.checked!=checked){
        console.log(this.props.name,state);
        this.setState({checked});
      }
    //}
  }

  render(){
    //<input type='radio' name={this.props.name} value={this.props.value} checked={this.props.checked}/>
    var checkedClass = this.state.checked?'checked':'';
    return (
      <div className={`${styles.radio} ${checkedClass}`} onClick={this.onClick}>
      <div className='flag'>
      </div>
      </div>
    );
  }
}
Radio.canBindForm=()=>true;

class RadioGroup extends React.Component {
  render(){
    return (
      <div>
      {
        this.props.children
      }
      </div>
    );
  }
}

export { RadioGroup, Radio };
