import React from 'react';
import styles from './style.css';

class EmInput extends React.Component{
  constructor(){
    super(...arguments);
    this.state={tip:''};
    this.onChange= this.onChange.bind(this);
  }
  onChange(){
    var value = this.refs.input.value;
    console.log(value);
    if(this.props.onChange){
      this.props.onChange(value);
    }
  }
  getValue(){
    return this.refs.input.value;
  }
  register(temp){
    var key = this.props.name;
    temp[key]=this;
    return temp;
  }
  componentDidMount(){
    console.log(this.props);
    if(this.props.form){
      this.props.form.register(this);
    }
  }

  render(){
    var tip;
    if(this.state.tip){
      tip = (<div className="tip">{this.state.tip}</div>);
    }
    return (
      <div className={`${styles.root} ${this.props.className||''}`}>
        <input ref='input' type={this.props.type||'text'} className="input" placeholder={this.props.placeholder} onChange={this.onChange} defaultValue={''}/>
        {
          tip
        }
      </div>
    )
  }
}

EmInput.canBindForm=(form)=>true;

class EmPassword extends React.Component{
  constructor(){
    super(...arguments);
    this.state={tip:'error'};
  }

  render(){
    return (
      <div className={`${styles.root} ${this.props.className}`}>
        <input className="input" placeholder={this.props.placeholder}/>
        <div className="tip">{this.state.tip}</div>
      </div>
    )
  }
}


export {EmInput}
