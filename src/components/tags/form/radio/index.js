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

  componentDidMount(){
    store.addListener( this.onChange );
  }

  onChange(){
    var state = store.getState();
    console.log(state);
    var checked = state[this.props.name]==this.props.value;
    this.setState({checked});
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
