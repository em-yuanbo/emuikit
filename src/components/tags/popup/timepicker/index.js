import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';
import {MainButton} from '../../button';
import {dispatcher} from '../utils';
import {getId} from '../utils';

//TODO extends Panel
class TimePopup extends React.Component{
  constructor(){
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    this.props.onSubmit(new Date());
  }
  componentWillUnmount(){
    if(this.props.onCancel){
      this.props.onCancel();
    }
  }
  render(){
    var time = this.props.time.toString();
    return (
      <div className={`${styles.popup} ${this.props.className||''}`} style={this.props.style}>
        <div className="header">
         2016-05
        </div>
        <div className="content">
          <span> {time} </span>
        </div>
        <div className="footer">
          <MainButton className="submit" onClick={this.onSubmit} label="Ok"/>
        </div>
      </div>
    );
  }
}
TimePopup.props = {
  submit : React.PropTypes.func.required
  //value:
}

class TimePicker extends React.Component{
  constructor(){
    super(...arguments);
    this.popid = getId();
    this.state = {active:false,time:new Date()};
    this.onSubmit = this.onSubmit.bind(this);
    this.onActive = this.onActive.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  onSubmit(time){
    //validate time
    this.setState({time:time,active:false});
    dispatcher.dispatch({
      type:'remove',
      popid:this.popid
    });
  }
  onCancel(){
    this.setState({active:false});
  }
  componentWillUnmount(){
    //TODO 此处是否还需要dispatch,
    //dispatcher.dispatch({
      //type:'remove',
      //popid:this.popid
    //});
  }
  onActive(e){
    e.preventDefault();
    e.stopPropagation();
    var active = !this.state.active;
    this.setState({active:!active});

    if(active){
      var clork = ReactDOM.findDOMNode(this.refs.popupClork);
      let {left,top}=clork.getBoundingClientRect();
      //console.log(clork);
      var timePopup = (
        <TimePopup key={this.popid} className='popup' time={this.state.time} onCancel={this.onCancel} onSubmit={this.onSubmit} style={{left,top}}/>
      );
      dispatcher.dispatch({
        type:'pop-replace',
        popid:this.popid,
        content:timePopup,
      });
    }
  }
  render(){
    return (
      <div className={`${styles.root}`}>
        <div className='time'><input value={this.state.time} onClick={this.onActive}/></div>
        <div ref='popupClork' className={`popup-clork ${styles.popup}`}>
        </div>
      </div>
    );
  }
}

export {TimePicker};
